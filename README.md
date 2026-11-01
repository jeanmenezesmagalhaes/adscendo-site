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
ai/, pt/ia/                                AI optimization page: new website + GEO, prices, free AI check (generated from `aiPage` in src/content.mjs; linked from the home SEO section)
websites/, apps/, pt/sites/, pt/apps/     Service pages: what's included, how we work, work, prices, questions (generated from `servicePages` in src/content.mjs; linked from the Services menu and the home tiles)
privacy/, pt/privacidade/                  Privacy policy (generated from `privacy` in src/content.mjs; linked in the footer and on Google's sign-in screen)
src/content.mjs                            All copy, EN and PT
src/build.mjs                              Page templates and generator
src/serve.mjs                              Local server with the production URL rules
assets/site.css, assets/site.js            Shared styles and script
assets/demo/                               Home hero video of the Prospector demo: <lang>-<wide|narrow>.webm (AV1), .mp4 (H.264), .webp (first frame)
assets/demo.js                             The live Prospector demo the video is filmed from (sample data only; pages don't load it)
src/record-demo.mjs                        Films assets/demo.js into assets/demo/ (see below)
assets/chat.js                             Contact chat: scripted questions, first estimate, a call (/api/meeting) or one Send (/api/lead)
api/lead.mjs                               Vercel function: emails the chat's summary to Jean through Resend
api/meeting.mjs                            Vercel function: free times on Jean's Google Calendar, and booking a call
assets/work/                               Project screenshots (.webp)
favicon.svg
vercel.json                                Clean URLs, section rewrites (written by the build), screenshot cache, basic headers
PRODUCT.md, DESIGN.md                      Audience and visual system
```

## Re-film the home demo

The home hero plays a video of the Prospector demo instead of running the live map, so it stays light on slow connections and old phones. After changing `assets/demo.js` (cities, wording) or the demo's styles, film it again:

```bash
npm i --no-save playwright && npx playwright install chromium
node src/record-demo.mjs
```

It needs `ffmpeg` with `libsvtav1` and `libx264` (`brew install ffmpeg`). Four cuts (English and Portuguese, wide and narrow) take a while, since every frame waits for its map tiles. `ONLY=en-wide node src/record-demo.mjs` films one.

## Configuration

- `CONFIG` at the top of `assets/site.js`: `formEndpoint` (`/api/lead`) is where the contact chat's single "Send" posts its summary. `api/lead.mjs` emails it through [Resend](https://resend.com), with the visitor's email as Reply-To. It needs `RESEND_API_KEY` in the Vercel project's environment variables (Production), then a redeploy; optional `LEAD_TO` (inbox, default `jean@adscendo.pro`) and `LEAD_FROM` (default `site@adscendo.pro`; the sender must be on adscendo.pro, the domain verified in Resend, whose DNS records live in Vercel DNS). Locally, `node src/serve.mjs` runs the function with the variables in `.env.local` (`npx vercel env pull .env.local`); without a key the lead is only printed in the terminal. If sending fails, the chat offers WhatsApp and email instead, and Vercel's function logs keep the lead's text. `whatsapp` (digits only; empty = hidden), `email`.
- `meetingEndpoint` (`/api/meeting`): after the last question the chat offers a 15-minute video call, on free times from Jean's Google Calendar (Monday to Friday, 8:00 to 18:00 São Paulo time, at least 3 hours ahead, next 5 working days; constants at the top of `api/meeting.mjs`). The visitor picks a day, then a time, shown in their own time zone. Booking creates the event with a Google Meet link and the visitor as guest (Google emails the invite), and also sends the summary through `/api/lead`. One upcoming call per email, and at most 10 upcoming calls from the site. Setup: a Google Cloud project with the Calendar API enabled, an OAuth consent screen published as "In production" (in "Testing" the token expires after 7 days), and an OAuth client of type "Desktop app"; `node src/google-auth.mjs` with its `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` prints `GOOGLE_REFRESH_TOKEN`. Set the three on Vercel. Optional `GOOGLE_CALENDARS` (comma-separated, default `primary`) lists the calendars checked for conflicts; the call goes on the first. Without the variables the chat doesn't offer a call.
- `sections` in `src/content.mjs`: the clean address of each home section (`/services`, `/portfolio`, `/how-we-work`, `/about`, `/contact`, and `/pt/servicos`… in Portuguese). Every link to a section uses it; the build writes the matching rewrites into `vercel.json`, so the home page is served there, and `site.js` scrolls to the section. Old `/#process`-style links still work and switch to the clean address.
- `quote` in `src/content.mjs`: the contact chat's price tiers (regular price and discount %): `new` (no website yet), `redo` (has a website), `complex` (has a website with integrations). The chat's wording is in `chat`, EN and PT.
- `founderPhoto` in `src/content.mjs`: path to Jean's photo (e.g. `/assets/jean.webp`). Empty = the cloud mark.
- `SITE` at the top of `src/build.mjs`: the public origin (e.g. `https://adscendo.pro`). Once set and rebuilt, every page gets canonical and `hreflang` links between the English and Portuguese versions, `og:url` and `og:image`, and the build writes `sitemap.xml` (and points `robots.txt` at it). `robots.txt` and `llms.txt` are generated either way.
- `seoTitle` on each project in `src/content.mjs`: the story page's `<title>` (keep it under 60 characters). Without it the title is name, tagline and "| Adscendo".
- Share images: `assets/og/<slug>/<cover>.jpg`, a 1200px JPEG twin of each cover, used for `og:image` (the `.webp` cover is the fallback). After changing a cover, remake it: `sips -s format jpeg -s formatOptions 82 -Z 1200 assets/work/<slug>/<cover>.webp --out assets/og/<slug>/<cover>.jpg`.

## Hero demo

The home hero runs a small, self-contained Prospector demo (`assets/demo.js`): a MapLibre GL globe (loaded from unpkg, pinned to 5.24.0) on the free OpenFreeMap Positron style. It is not interactive: an "AI pilot" loops through the cities in `TOUR`, types the city and kind of business, dives in, drops sample businesses (generated in the page, never on water), highlights one, saves leads to the CRM and flies back out. It pauses while off screen and stays still with reduced motion. Nothing is sent anywhere. The phone beside it is Prospector's "What the AI learned" screen in HTML, with numbers from `aiDemo` in `src/content.mjs`. The static globe screenshot under the demo shows until the map is ready, and stays if WebGL is unavailable.

## Deploy (Vercel)

Static project, no build. On Vercel: Framework Preset "Other", Build Command empty, Output Directory `.`.

```bash
npx vercel --prod
```
