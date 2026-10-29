# Adscendo site

Portfolio of Adscendo, the consultancy of Jean Menezes: the home page plus one story page per project (Sidemed, Minha companhia, Reels Autopilot, Adscendo). English at `/`, Portuguese at `/pt/`. Static HTML, no framework.

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

To add a project: add an entry to `projects` (and, if you want, to `timeline`) in `src/content.mjs`, put its screenshots in `assets/work/<slug>/` (`.webp`, 1440×900 for desktop, 780×1688 for phone), and run the build.

## Structure

```
index.html, work/<slug>/index.html         English pages (generated)
pt/index.html, pt/work/<slug>/index.html   Portuguese pages (generated)
src/content.mjs                            All copy, EN and PT
src/build.mjs                              Page templates and generator
assets/site.css, assets/site.js            Shared styles and script
assets/work/                               Project screenshots (.webp)
favicon.svg
vercel.json                                Clean URLs, screenshot cache, basic headers
PRODUCT.md, DESIGN.md                      Audience and visual system
```

## Configuration

- `CONFIG` at the top of `assets/site.js`: `formEndpoint` (Formspree or similar; empty = the form opens the visitor's email app), `whatsapp` (digits only; empty = hidden), `email`.
- `SITE` at the top of `src/build.mjs`: the public origin (e.g. `https://adscendo.com`). Once set and rebuilt, every page gets canonical and `hreflang` links between the English and Portuguese versions.

## Deploy (Vercel)

Static project, no build. On Vercel: Framework Preset "Other", Build Command empty, Output Directory `.`.

```bash
npx vercel --prod
```
