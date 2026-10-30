// Local static server with the same URL rules as vercel.json (cleanUrls, trailingSlash: false). No dependencies.
//   node src/serve.mjs [port]
// /work/sidemed serves work/sidemed/index.html; /work/sidemed/, /work/sidemed/index.html and
// /work/sidemed.html redirect (308) to /work/sidemed, as they do in production.
// /services, /pt/como-trabalhamos and the other home sections serve the home page, like the rewrites
// build.mjs writes into vercel.json.
// /api/<name> runs the POST handler exported by api/<name>.mjs, like a Vercel function, with the variables
// in .env.local (e.g. RESEND_API_KEY, from `npx vercel env pull .env.local`).
import { createReadStream, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { sections } from "./content.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.argv[2]) || 4173;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon", ".woff2": "font/woff2",
};

try {
  for (const [, k, v] of readFileSync(join(ROOT, ".env.local"), "utf8").matchAll(/^\s*([\w.]+)\s*=\s*"?(.*?)"?\s*$/gm)) process.env[k] ??= v;
} catch {}

const isFile = p => { try { return statSync(p).isFile(); } catch { return false; } };

// Canonical form of a path: no ".html", no "/index", no trailing slash (except the root).
const clean = path => path.replace(/\.html$/, "").replace(/(^|\/)index$/, "$1").replace(/(.)\/+$/, "$1") || "/";

// Hands a request to api/<name>.mjs as a web Request and writes back its Response.
async function api(req, res, name) {
  const file = join(ROOT, "api", `${name}.mjs`);
  const handler = /^[\w-]+$/.test(name) && isFile(file) && (await import(file))[req.method];
  if (!handler) {
    res.writeHead(isFile(file) ? 405 : 404);
    return res.end();
  }
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const out = await handler(new Request(`http://localhost${req.url}`, {
    method: req.method, headers: req.headers, body: chunks.length ? Buffer.concat(chunks) : undefined,
  }));
  res.writeHead(out.status, Object.fromEntries(out.headers));
  res.end(Buffer.from(await out.arrayBuffer()));
}

createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const path = decodeURIComponent(url.pathname);
  if (path.startsWith("/api/")) return api(req, res, path.slice(5)).catch(err => {
    console.error(err);
    res.writeHead(500);
    res.end();
  });
  const target = clean(path);
  if (target !== path) {
    res.writeHead(308, { Location: target + url.search });
    return res.end();
  }
  const home = Object.values(sections).flatMap(s => [[`/${s.en}`, "/"], [`/pt/${s.pt}`, "/pt"]]).find(([p]) => p === path)?.[1];
  const rel = normalize(home ?? path).replace(/^(\.\.[/\\])+/, "");
  const file = [join(ROOT, rel), join(ROOT, `${rel}.html`), join(ROOT, rel, "index.html")].find(isFile);
  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    return res.end("Not found");
  }
  res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));
