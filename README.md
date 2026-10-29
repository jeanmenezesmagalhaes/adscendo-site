# Adscendo site

Portfolio of Adscendo, the consultancy of Jean Menezes: the home page plus one story page per project (Prospector, Minha companhia, Sidemed, plus the studio's own story, Adscendo, linked from About). English at `/`, Portuguese at `/pt/`. Static HTML, no framework.

Split from `adscendo-prospector` on 2026-10-29.

## Run locally

```bash
python3 -m http.server 4173
```

Open http://localhost:4173.

## Edit copy or add a project

All text, in both languages, lives in `src/content.mjs`. The HTML is generated from it:

```bash
node src/build.mjs
```

Commit the generated HTML together with the content change. The deploy serves the files as they are, with no build step.

To add a project: add an entry to `projects` (and, if you want, to `timeline`) in `src/content.mjs`, put its screenshots in `assets/work/<slug>/` (`.webp`, 16:10 for desktop, 780×1688 for phone; a `.pt.webp` twin plus `coverPt`/`coverPhonePt` gives the Portuguese pages their own screenshots), and run the build.

## Structure

```
index.html, work/<slug>/index.html         English pages (generated)
pt/index.html, pt/work/<slug>/index.html   Portuguese pages (generated)
src/content.mjs                            All copy, EN and PT
src/build.mjs                              Page templates and generator
assets/site.css, assets/site.js            Shared styles and script
assets/demo.js                             Live Prospector demo in the home hero (sample data only)
assets/work/                               Project screenshots (.webp)
favicon.svg
vercel.json                                Clean URLs, screenshot cache, basic headers
PRODUCT.md, DESIGN.md                      Audience and visual system
```

## Configuration

- `CONFIG` at the top of `assets/site.js`: `formEndpoint` (Formspree or similar; empty = the form opens the visitor's email app), `whatsapp` (digits only; empty = hidden), `email`.
- `founderPhoto` in `src/content.mjs`: path to Jean's photo (e.g. `/assets/jean.webp`). Empty = the cloud mark.
- `SITE` at the top of `src/build.mjs`: the public origin (e.g. `https://adscendo.com`). Once set and rebuilt, every page gets canonical and `hreflang` links between the English and Portuguese versions.

## Hero demo

The home hero runs a small, self-contained Prospector demo (`assets/demo.js`): a MapLibre GL globe (loaded from unpkg, pinned to 5.24.0) on the free OpenFreeMap Positron style, with businesses generated in the page from the circle's center. Nothing is sent anywhere. The phone beside it is Prospector's "What the AI learned" screen in HTML, with numbers from `aiDemo` in `src/content.mjs`. The static globe screenshot under the demo shows until the map is ready, and stays if WebGL is unavailable.

## Deploy (Vercel)

Static project, no build. On Vercel: Framework Preset "Other", Build Command empty, Output Directory `.`.

```bash
npx vercel --prod
```
