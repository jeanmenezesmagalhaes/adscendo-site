// One-time setup for api/meeting.mjs: signs in to Google and prints the refresh token it needs. No dependencies.
//   GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=... node src/google-auth.mjs
// (or put both in .env.local). The client is an OAuth client of type "Desktop app" in Google Cloud, in a
// project with the Google Calendar API enabled and its consent screen published ("In production"): while
// the screen is in "Testing", Google expires the refresh token after 7 days.
// Sign in with the account that owns the calendar. Then set GOOGLE_REFRESH_TOKEN on Vercel.
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SCOPES = ["https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/calendar.freebusy"];

try {
  const env = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "..", ".env.local"), "utf8");
  for (const [, k, v] of env.matchAll(/^\s*([\w.]+)\s*=\s*"?(.*?)"?\s*$/gm)) process.env[k] ??= v;
} catch {}
const { GOOGLE_CLIENT_ID: id, GOOGLE_CLIENT_SECRET: secret } = process.env;
if (!id || !secret) {
  console.error("Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET first (environment or .env.local).");
  process.exit(1);
}
if (!id.endsWith(".apps.googleusercontent.com")) {
  console.error(`GOOGLE_CLIENT_ID "${id}" isn't a client ID: copy it from Google Cloud > APIs & Services > Credentials (it ends in .apps.googleusercontent.com).`);
  process.exit(1);
}

// Google sends the browser back to this local address with a one-time code, traded here for the tokens.
const server = createServer(async (req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  const code = url.searchParams.get("code");
  if (!code) return res.writeHead(404).end();
  const redirect = `http://127.0.0.1:${server.address().port}`;
  const out = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    body: new URLSearchParams({ code, client_id: id, client_secret: secret, redirect_uri: redirect, grant_type: "authorization_code" }),
  }).then(r => r.json());
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  if (!out.refresh_token) {
    res.end("No refresh token came back. See the terminal.");
    console.error(out);
  } else {
    res.end("Done. You can close this tab and go back to the terminal.");
    console.log(`\nGOOGLE_REFRESH_TOKEN=${out.refresh_token}\n\nAdd it to Vercel (Production and Preview), with GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.`);
  }
  server.close();
});
server.listen(0, "127.0.0.1", () => {
  const auth = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  auth.search = new URLSearchParams({
    client_id: id, redirect_uri: `http://127.0.0.1:${server.address().port}`, response_type: "code",
    scope: SCOPES.join(" "), access_type: "offline", prompt: "consent",
  });
  console.log(`Open this address and sign in with the calendar's Google account:\n\n${auth}\n`);
});
