// Smaller copies of the screenshots the work wall (/work) shows, for its srcset: name.800.webp from each
// computer screenshot and name.480.webp from each phone one. Needs cwebp (brew install webp).
//   node src/thumbs.mjs
// Skips copies that already exist; run it again after adding or replacing a screenshot. build.mjs adds a
// copy to the srcset only when its file exists, so a missing one just means the full-size image.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "./content.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const thumbWidths = { wide: 800, phone: 480 };
const thumbSrc = (src, w) => src.replace(/\.webp$/, `.${w}.webp`);

const jobs = [];
for (const p of projects) {
  for (const im of [p.cover, p.coverPt]) if (im) jobs.push([im.src, thumbWidths.wide]);
  for (const im of [p.coverPhone, p.coverPhonePt]) if (im) jobs.push([im.src, thumbWidths.phone]);
}
for (const [src, w] of jobs) {
  const from = join(ROOT, src), to = join(ROOT, thumbSrc(src, w));
  if (existsSync(to) || !existsSync(from)) continue;
  execFileSync("cwebp", ["-quiet", "-q", "82", "-resize", String(w), "0", from, "-o", to]);
  console.log("wrote", thumbSrc(src, w));
}
