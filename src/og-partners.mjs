// Share images (og:image) for the partner program pages: assets/og/partners.jpg (EN) and partners.pt.jpg (PT),
// 1200x630. Black, like the brand kit's social banners: the wordmark, the rate in big type and the page's H1.
// The copy comes from content.mjs, so run this again after changing the rate or the H1.
//   npm i --no-save playwright && npx playwright install chromium   (once; not a site dependency)
//   node src/og-partners.mjs
// Needs network for the Geist font (Google Fonts) and sips (macOS) for the JPEG.
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { partnerPage } from "./content.mjs";

const { chromium } = await import("playwright").catch(() => {
  console.error("Playwright is missing: npm i --no-save playwright && npx playwright install chromium");
  process.exit(1);
});

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const cloud = `<svg viewBox="0 0 48 32" aria-hidden="true"><path d="M15 27H37a6.5 6.5 0 0 0 0-13a9.2 9.2 0 0 0-17.6 1.2A6.6 6.6 0 0 0 10 25" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// The H1 is two sentences: the first in white, the second in gray, as on the brand kit banners.
const page = lang => {
  const d = partnerPage[lang];
  const [first, ...rest] = d.h1.split(/(?<=\.)\s+/);
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=block" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; background: #000; color: #f5f5f7; overflow: hidden; }
  body { font-family: Geist, sans-serif; -webkit-font-smoothing: antialiased; padding: 64px 72px 60px; display: flex; flex-direction: column; }
  .top { display: flex; align-items: center; justify-content: space-between; }
  .brand { display: inline-flex; align-items: center; gap: 12px; font-size: 30px; font-weight: 500; letter-spacing: -0.03em; }
  .brand svg { width: 46px; height: 31px; }
  .eyebrow { font-size: 20px; font-weight: 500; letter-spacing: -0.012em; color: #a1a1a6; }
  .rate { margin-top: auto; font-size: 280px; font-weight: 600; line-height: .8; letter-spacing: -0.06em; margin-left: -12px; }
  h1 { margin-top: 44px; font-size: 54px; font-weight: 600; line-height: 1.06; letter-spacing: -0.04em; }
  h1 span { color: #86868b; }
</style></head>
<body>
  <div class="top"><span class="brand">${cloud}Adscendo.</span><span class="eyebrow">${esc(d.eyebrow)}</span></div>
  <p class="rate">${partnerPage.rate}%</p>
  <h1>${esc(first)}<br><span>${esc(rest.join(" "))}</span></h1>
</body></html>`;
};

const tmp = mkdtempSync(join(tmpdir(), "og-partners-"));
const browser = await chromium.launch();
try {
  const tab = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const lang of ["en", "pt"]) {
    await tab.setContent(page(lang), { waitUntil: "networkidle" });
    await tab.evaluate(() => document.fonts.ready);
    if (!(await tab.evaluate(() => document.fonts.check('600 54px "Geist"')))) throw new Error("Geist did not load");
    const png = join(tmp, `${lang}.png`);
    await tab.screenshot({ path: png });
    const out = `assets/og/partners${lang === "en" ? "" : ".pt"}.jpg`;
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "82", png, "--out", join(ROOT, out)], { stdio: "ignore" });
    console.log("wrote", out);
  }
} finally {
  await browser.close();
  rmSync(tmp, { recursive: true, force: true });
}
