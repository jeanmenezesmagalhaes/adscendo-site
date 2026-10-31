// Films the home hero's Prospector demo into the videos the home page plays (assets/demo/).
//   npm i --no-save playwright && npx playwright install chromium   (once; not a site dependency)
//   node src/record-demo.mjs            (or ONLY=en-wide,pt-narrow node src/record-demo.mjs for some cuts)
// Needs ffmpeg with libsvtav1 and libx264 (Homebrew's has both).
//
// It loads assets/demo.js into the home page in a headless browser with a fake clock, and steps the clock
// one video frame at a time, waiting for every map tile before each shot. So the video never shows a
// half-drawn map, however slow the tile server is. It films lap 1 to lap 2 of the demo, which start and end
// on the same view, so the video loops without a seam.
// Per language (en, pt) and frame (wide: map and panel; narrow: map only, as on phones):
//   assets/demo/<lang>-<frame>.webm (AV1), .mp4 (H.264, for browsers without AV1), .webp (first frame)
import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const { chromium } = await import("playwright").catch(() => {
  console.error("Playwright is missing: npm i --no-save playwright && npx playwright install chromium");
  process.exit(1);
});

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "assets/demo");
const PORT = 4199;
const FPS = 25;
// Filmed sharper than the video (out: its width in pixels), then scaled down: smaller files, cleaner text.
const FRAMES = { wide: { width: 1000, scale: 1.6, out: 1280 }, narrow: { width: 520, scale: 2, out: 1040 } };
const LANGS = { en: "/", pt: "/pt" };

const server = spawn(process.execPath, [join(ROOT, "src/serve.mjs"), String(PORT)], { stdio: "ignore" });
const sleep = ms => new Promise(r => setTimeout(r, ms));
await sleep(500);
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });

try {
  for (const [lang, path] of Object.entries(LANGS)) {
    for (const [name, { width, scale, out }] of Object.entries(FRAMES)) {
      if (process.env.ONLY && !process.env.ONLY.split(",").includes(`${lang}-${name}`)) continue;
      const height = Math.round(width * 10 / 16);
      const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: scale });
      await page.clock.install();
      await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: "load" });
      // Stop the page's time: from here it moves only when the recorder steps it.
      await page.clock.pauseAt(Date.now() + 1000);
      // Only the demo frame, alone on the page and filling it, without transitions (the clock can't step those).
      await page.addStyleTag({ content: `body { margin: 0; } .demo { width: ${width}px; } .demo, .demo * { transition: none !important; }` });
      await page.evaluate(() => { const d = document.querySelector(".demo"); d.replaceChildren(); document.body.replaceChildren(d); });
      await page.evaluate(() => document.fonts.ready);
      await page.addScriptTag({ url: "/assets/demo.js" });

      const lap = () => page.evaluate(() => document.querySelector("[data-demo]").dataset.lap || "0");
      const settle = async () => {
        for (let t = 0; t < 120; t++) {
          if (await page.evaluate(() => { const m = document.querySelector("[data-demo]").map; return !m || m.areTilesLoaded(); })) break;
          await page.clock.runFor(0); // timers due now (the map's own scheduling), without moving time
          await sleep(25);
        }
        await page.evaluate(() => document.querySelector("[data-demo]").map?.redraw());
      };
      // Lap 0 warms up (and fills the tile cache); lap 1 is filmed.
      process.stdout.write(`${lang}-${name}: warming up`);
      while ((await lap()) === "0") { await page.clock.runFor(200); await settle(); }
      const dir = mkdtempSync(join(tmpdir(), `demo-${lang}-${name}-`));
      let n = 0;
      process.stdout.write(`, filming into ${dir}`);
      while ((await lap()) === "1") {
        await page.screenshot({ path: join(dir, `f${String(n++).padStart(5, "0")}.png`) });
        await page.clock.runFor(1000 / FPS);
        await settle();
      }
      console.log(` ${n} frames (${(n / FPS).toFixed(1)} s)`);

      const base = join(OUT, `${lang}-${name}`);
      const input = ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(dir, "f%05d.png"), "-an", "-vf", `scale=${out}:-2:flags=lanczos`, "-pix_fmt", "yuv420p"];
      const ff = args => { const r = spawnSync("ffmpeg", args, { stdio: "inherit" }); if (r.status) throw new Error("ffmpeg failed"); };
      ff([...input, "-c:v", "libsvtav1", "-preset", "5", "-crf", "52", "-g", "250", `${base}.webm`]);
      ff([...input, "-c:v", "libx264", "-preset", "slow", "-crf", "35", "-tune", "animation", "-movflags", "+faststart", `${base}.mp4`]);
      // The poster is the first frame (also the last: the loop point), as WebP from the browser's own encoder.
      const webp = await page.evaluate(async src => {
        const img = new Image();
        img.src = src;
        await img.decode();
        const c = Object.assign(document.createElement("canvas"), { width: img.width, height: img.height });
        c.getContext("2d").drawImage(img, 0, 0);
        return c.toDataURL("image/webp", .8).split(",")[1];
      }, `data:image/png;base64,${(await import("node:fs")).readFileSync(join(dir, "f00000.png")).toString("base64")}`);
      writeFileSync(`${base}.webp`, Buffer.from(webp, "base64"));
      rmSync(dir, { recursive: true });
      await page.close();
    }
  }
} finally {
  await browser.close();
  server.kill();
}
