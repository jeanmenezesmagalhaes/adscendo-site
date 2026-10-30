# Adscendo site

Portfolio of Adscendo, the consultancy of Jean Menezes: the home page plus one story page per project (Prospector, Minha companhia, Sidemed, plus the studio's own story, Adscendo, linked from About). English at `/`, Portuguese at `/pt`. Static HTML, no framework.

Split from `adscendo-prospector` on 2026-10-29.

## Run locally

```bash
node src/serve.mjs
```

Open http://localhost:4173. Same URL rules as production (`vercel.json`): clean URLs, no trailing slash, so `/work/sidemed/` and `/work/sidemed/index.html` redirect to `/work/sidemed`.

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
src/serve.mjs                              Local server with the production URL rules
assets/site.css, assets/site.js            Shared styles and script
assets/demo.js                             Live Prospector demo in the home hero (sample data only)
assets/chat.js                             Contact chat: scripted questions, first estimate, one Send (/api/lead)
api/lead.mjs                               Vercel function: emails the chat's summary to Jean through Resend
assets/work/                               Project screenshots (.webp)
favicon.svg
vercel.json                                Clean URLs, screenshot cache, basic headers
PRODUCT.md, DESIGN.md                      Audience and visual system
```

## Configuration

- `CONFIG` at the top of `assets/site.js`: `formEndpoint` (`/api/lead`) is where the contact chat's single "Send" posts its summary. `api/lead.mjs` emails it through [Resend](https://resend.com), with the visitor's email as Reply-To. It needs `RESEND_API_KEY` in the Vercel project's environment variables (Production), then a redeploy; optional `LEAD_TO` (inbox, default Jean's iCloud) and `LEAD_FROM`. Until a domain is verified in Resend, the sender is `onboarding@resend.dev` and Resend only delivers to the email the Resend account was created with, so `LEAD_TO` must be that email. Locally, `node src/serve.mjs` runs the function with the variables in `.env.local` (`npx vercel env pull .env.local`); without a key the lead is only printed in the terminal. If sending fails, the chat offers WhatsApp and email instead, and Vercel's function logs keep the lead's text. `whatsapp` (digits only; empty = hidden), `email`.
- `quote` in `src/content.mjs`: the contact chat's price tiers (regular price and discount %): `new` (no website yet), `redo` (has a website), `complex` (has a website with integrations). The chat's wording is in `chat`, EN and PT.
- `founderPhoto` in `src/content.mjs`: path to Jean's photo (e.g. `/assets/jean.webp`). Empty = the cloud mark.
- `SITE` at the top of `src/build.mjs`: the public origin (e.g. `https://adscendo.com`). Once set and rebuilt, every page gets canonical and `hreflang` links between the English and Portuguese versions, `og:url` and `og:image`, and the build writes `sitemap.xml` (and points `robots.txt` at it). `robots.txt` and `llms.txt` are generated either way.
- `seoTitle` on each project in `src/content.mjs`: the story page's `<title>` (keep it under 60 characters). Without it the title is name, tagline and "| Adscendo".
- Share images: `assets/og/<slug>/<cover>.jpg`, a 1200px JPEG twin of each cover, used for `og:image` (the `.webp` cover is the fallback). After changing a cover, remake it: `sips -s format jpeg -s formatOptions 82 -Z 1200 assets/work/<slug>/<cover>.webp --out assets/og/<slug>/<cover>.jpg`.

## Hero demo

The home hero runs a small, self-contained Prospector demo (`assets/demo.js`): a MapLibre GL globe (loaded from unpkg, pinned to 5.24.0) on the free OpenFreeMap Positron style. It is not interactive: an "AI pilot" loops through the cities in `TOUR`, types the city and kind of business, dives in, drops sample businesses (generated in the page, never on water), highlights one, saves leads to the CRM and flies back out. It pauses while off screen and stays still with reduced motion. Nothing is sent anywhere. The phone beside it is Prospector's "What the AI learned" screen in HTML, with numbers from `aiDemo` in `src/content.mjs`. The static globe screenshot under the demo shows until the map is ready, and stays if WebGL is unavailable.

## Deploy (Vercel)

Static project, no build. On Vercel: Framework Preset "Other", Build Command empty, Output Directory `.`.

```bash
npx vercel --prod
```
