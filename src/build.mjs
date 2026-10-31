// Generates the static pages from src/content.mjs. No dependencies.
//   node src/build.mjs
// Output: index.html, work/<slug>/index.html, privacy/index.html, and their twins under pt/
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { contact, ui, home, timeline, projects, founderPhoto, aiDemo, chat, quote, sections, privacy } from "./content.mjs";

// Public origin, e.g. "https://adscendo.pro". When set, pages get canonical, hreflang, og:url and
// og:image, and the build also writes sitemap.xml (robots.txt and llms.txt are written either way).
const SITE = "https://adscendo.pro";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LANGS = ["en", "pt"];
const base = lang => (lang === "en" ? "" : "/pt");
const homePath = lang => base(lang) || "/";
const casePath = (lang, slug) => `${base(lang)}/work/${slug}`;
const sectionPath = (lang, id) => `${base(lang)}/${sections[id][lang]}`;
const privacyPath = lang => `${base(lang)}/${privacy[lang].slug}`;
// The section's own address and its twin in the other language, for site.js.
const sectionAttrs = (lang, id) => `id="${id}" data-path="${sectionPath(lang, id)}" data-alt="${sectionPath(other(lang), id)}"`;
const other = lang => (lang === "en" ? "pt" : "en");
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = s => s.replace(/<[^>]+>/g, "");
const abs = path => (SITE ? SITE + path : undefined);
const hreflang = lang => (lang === "en" ? "en" : "pt-BR");
// Share image for a cover: its JPEG twin in assets/og/ (made with sips, see README), else the cover itself.
const ogImage = im => {
  const jpg = im.src.replace("/assets/work/", "/assets/og/").replace(/\.webp$/, ".jpg");
  return existsSync(join(ROOT, jpg)) ? { src: jpg, w: 1200, h: Math.round(1200 * im.h / im.w) } : im;
};
// Inlined in <head>: it must run before the page first paints (see the file).
const transitions = readFileSync(join(ROOT, "assets/transitions.js"), "utf8").trim();

const icons = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="cloud" viewBox="0 0 48 32"><path d="M15 27H37a6.5 6.5 0 0 0 0-13a9.2 9.2 0 0 0-17.6 1.2A6.6 6.6 0 0 0 10 25" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="arrow" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="contrast" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 2a6 6 0 0 1 0 12z" fill="currentColor"/></symbol>
  <symbol id="out" viewBox="0 0 16 16"><path d="M5 11l6-6M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="flag-en" viewBox="0 0 30 20"><rect width="30" height="20" fill="#b22234"/><path d="M0 2.3h30M0 5.4h30M0 8.5h30M0 11.6h30M0 14.7h30M0 17.8h30" stroke="#fff" stroke-width="1.54"/><rect width="12" height="10.8" fill="#3c3b6e"/><g fill="#fff">${Array.from({ length: 12 }, (_, i) => `<circle cx="${1.6 + (i % 4) * 2.9}" cy="${1.8 + Math.floor(i / 4) * 3.5}" r=".55"/>`).join("")}</g></symbol>
  <symbol id="flag-pt" viewBox="0 0 30 20"><rect width="30" height="20" fill="#009b3a"/><path d="M15 2.4 27.2 10 15 17.6 2.8 10z" fill="#fedf00"/><circle cx="15" cy="10" r="4.6" fill="#002776"/><path d="M10.6 9.1c3-.9 6.2-.6 8.8.9" stroke="#fff" stroke-width=".7" fill="none"/></symbol>
  <symbol id="status" viewBox="0 0 68 12"><g fill="currentColor"><rect x="0" y="8" width="3" height="4" rx=".8"/><rect x="4.5" y="6" width="3" height="6" rx=".8"/><rect x="9" y="3.5" width="3" height="8.5" rx=".8"/><rect x="13.5" y="1" width="3" height="11" rx=".8"/><path d="M30 2.2a10.6 10.6 0 0 1 7.6 3.1l1.2-1.2A12.3 12.3 0 0 0 30 .5a12.3 12.3 0 0 0-8.8 3.6l1.2 1.2A10.6 10.6 0 0 1 30 2.2zm0 3.4a7.2 7.2 0 0 1 5.2 2.1l1.2-1.2A8.9 8.9 0 0 0 30 3.9a8.9 8.9 0 0 0-6.4 2.6l1.2 1.2A7.2 7.2 0 0 1 30 5.6zm0 3.4c1 0 1.9.4 2.6 1L30 12.6 27.4 10c.7-.6 1.6-1 2.6-1z"/><rect x="44" y=".75" width="21" height="10.5" rx="3" fill="none" stroke="currentColor" stroke-opacity=".4"/><rect x="45.75" y="2.5" width="17.5" height="7" rx="1.8"/><path d="M66.3 4.3c.7.3 1.2.9 1.2 1.7s-.5 1.4-1.2 1.7z" fill-opacity=".4"/></g></symbol>
</svg>`;
// Over a project the pointer becomes a "View project" disc in the client's own color (assets/cursor.js).
const cursorTo = (p, kind = "view") => ` data-cursor="${kind}"${p.cursor ? ` data-cursor-color="${p.cursor[0]}" data-cursor-ink="${p.cursor[1]}"` : ""}`;
const icon = (id, cls = "") => `<svg${cls ? ` class="${cls}"` : ""} aria-hidden="true"><use href="#${id}"/></svg>`;

const head = ({ lang, title, description, path, altPath, ld, image, imageAlt }) => `<!doctype html>
<html lang="${hreflang(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:site_name" content="Adscendo">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="${lang === "en" ? "en_US" : "pt_BR"}">
<meta property="og:locale:alternate" content="${lang === "en" ? "pt_BR" : "en_US"}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
${SITE ? `<meta property="og:url" content="${SITE}${path}">
<meta property="og:image" content="${SITE}${image.src}">
<meta property="og:image:width" content="${image.w}">
<meta property="og:image:height" content="${image.h}">
<meta property="og:image:alt" content="${esc(imageAlt)}">
<link rel="canonical" href="${SITE}${path}">
<link rel="alternate" hreflang="${hreflang(lang)}" href="${SITE}${path}">
<link rel="alternate" hreflang="${hreflang(other(lang))}" href="${SITE}${altPath}">
<link rel="alternate" hreflang="x-default" href="${SITE}${lang === "en" ? path : altPath}">
` : ""}<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">
<link rel="stylesheet" href="/assets/cursor.css">
<script>document.documentElement.classList.add("js");try{const t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;if(localStorage.getItem("offer")==="closed")document.documentElement.classList.add("offer-closed")}catch(e){}</script>
<script>${transitions}</script>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
${icons}`;

const bestOff = Math.max(...Object.values(quote).map(q => q.off));
const nav = (lang, altPath) => {
  const t = ui[lang];
  return `<a class="btn btn--sm skip" href="#main">${t.skip}</a>
<div class="offer" role="region" aria-label="${t.offer.label}">
  <p><b>${t.offer.label}.</b> ${t.offer.text.replace("{p}", bestOff)} <a href="${sectionPath(lang, "contact")}">${t.offer.cta}${icon("arrow")}</a></p>
  <button class="offer-close" type="button" aria-label="${t.offer.close}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
</div>
<header class="nav" id="top">
  <div class="wrap">
    <a class="brand" href="${homePath(lang)}" aria-label="Adscendo">${icon("cloud")}Adscendo.</a>
    <ul>
      <li><a href="${sectionPath(lang, "build")}">${t.nav.services}</a></li>
      <li><a href="${sectionPath(lang, "work")}">${t.nav.work}</a></li>
      <li><a href="${sectionPath(lang, "process")}">${t.nav.process}</a></li>
      <li><a href="${sectionPath(lang, "about")}">${t.nav.about}</a></li>
    </ul>
    <a class="lang" href="${altPath}" hreflang="${other(lang)}" lang="${other(lang)}" aria-label="${t.switchTo}" title="${t.switchTo}"><svg aria-hidden="true"><use href="#flag-${lang}"/></svg>${lang.toUpperCase()}</a>
    <button class="theme" type="button" aria-pressed="false" aria-label="${t.darkMode}" title="${t.darkMode}" hidden>${icon("contrast")}</button>
    <a class="btn btn--sm" href="${sectionPath(lang, "contact")}">${t.nav.cta}</a>
  </div>
</header>`;
};

// The footer fills the screen: as it comes into view the wordmark grows on its own from small to the
// full width, and the tagline, contact buttons and "back to top" fade in underneath (site.js).
const footer = (lang, altPath) => {
  const t = ui[lang];
  return `<a class="btn float-cta" href="${sectionPath(lang, "contact")}" hidden>${t.nav.cta}</a>
<footer class="outro">
  <div class="outro-pin">
    <p class="outro-sign" data-cursor="drag" role="img" aria-label="Adscendo">${icon("cloud")}<span>Adscendo.</span></p>
    <div class="outro-meta wrap">
      <p class="outro-line">${t.footer}</p>
      <nav class="outro-links">
        <a class="btn btn--sm" href="${sectionPath(lang, "contact")}">${t.nav.cta}</a>
        <a class="btn btn--sm btn--ghost" href="mailto:${contact.email}">Email</a>
        <a class="btn btn--sm btn--ghost" data-wa href="#" target="_blank" rel="noopener" hidden>WhatsApp</a>
        <a class="btn btn--sm btn--ghost" href="${contact.instagram}" target="_blank" rel="noopener">Instagram</a>
        <a class="btn btn--sm btn--ghost" href="${contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      </nav>
      <div class="outro-row">
        <span>&copy; 2026 Adscendo</span>
        <a href="${privacyPath(lang)}">${t.privacy}</a>
        <a href="${altPath}" hreflang="${other(lang)}" lang="${other(lang)}">${t.other}</a>
        <a class="to-top" href="#top">${t.backTop}<svg aria-hidden="true"><use href="#arrow"/></svg></a>
      </div>
    </div>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
<script src="/assets/cursor.js" defer></script>
</body>
</html>
`;
};

const imgTag = (im, alt, eager) => `<img src="${im.src}" width="${im.w}" height="${im.h}" alt="${esc(alt)}"${eager ? ` fetchpriority="high"` : ` loading="lazy"`} decoding="async">`;
const browser = (im, host, alt, eager) => `<div class="browser"><div class="bar" aria-hidden="true"><i></i><i></i><i></i><span>${esc(host)}</span></div>${imgTag(im, alt, eager)}</div>`;
// An iPhone: titanium edge, side buttons, Dynamic Island and a status bar tinted to match the screen.
const phoneShell = (inner, bar = "#fff") => {
  const dark = /^#(0|1|2)/.test(bar);
  return `<div class="phone"><div class="frame"><div class="screen"><div class="status${dark ? " status--dark" : ""}" style="background:${bar}" aria-hidden="true"><span>9:41</span><i class="island"></i><svg><use href="#status"/></svg></div>${inner}</div></div></div>`;
};
const phone = (im, alt, eager, bar) => phoneShell(imgTag(im, alt, eager), bar);

// Prospector's "What the AI learned" screen, drawn in HTML so it stays sharp. It doesn't scroll: the phone
// shows its top, like a screenshot.
const aiScreen = lang => {
  const a = aiDemo[lang];
  const bars = (rows, unit) => rows.map(([k, v], i) => `<div class="ai-bar${i ? "" : " best"}"><span>${k}</span><i><b style="--w:${v / rows[0][1] * 100}%"></b></i><em>${v}${unit}</em></div>`).join("");
  return `<div class="ai-screen" aria-label="${a.title}">
    <div class="ai-top"><svg viewBox="0 0 48 32" aria-hidden="true"><path d="M19.4 26H35A7 7 0 1 0 31.37 13.02A8.5 8.5 0 0 0 14.53 15.22A5.5 5.5 0 0 0 8.55 23.73" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14.2" cy="26" r="2.2" fill="currentColor"/></svg><span class="ai-tabs">${a.tabs.map((t, i) => `<i${i === 2 ? ` class="on"` : ""}>${t}</i>`).join("")}</span></div>
    <h3>${a.title}</h3><p class="ai-sub">${a.sub}</p>
    <div class="ai-kpis">${a.kpis.map(([k, v, s]) => `<div><span>${k}</span><b>${v}</b><small>${s}</small></div>`).join("")}</div>
    <div class="ai-card"><h4>${a.worksTitle}</h4>${a.works.map(([k, v, s]) => `<div class="ai-row"><span>${k}</span><b>${v}</b><small>${s}</small></div>`).join("")}</div>
    <div class="ai-card"><h4>${a.whenTitle}</h4>${bars(a.when, "%")}</div>
    <div class="ai-card"><h4>${a.whoTitle}</h4>${bars(a.who, "%")}</div>
    <p class="ai-note">${a.note}</p>
  </div>`;
};
const heroDemo = (p, lang) => {
  const d = p[lang];
  // The demo is a video of the live app (src/record-demo.mjs): its first frame shows at once, as an image
  // (the narrow cut on phones), and site.js plays the video over it. A link laid over the whole browser
  // opens Prospector's story.
  const still = `/assets/demo/${lang}-`, alt = lang === "en" ? "Prospector's AI pilot finding businesses on a map" : "O piloto de IA do Prospector achando empresas no mapa";
  return `<div class="duo duo--demo"><div class="browser browser--link"${cursorTo(p)}><div class="bar" aria-hidden="true"><i></i><i></i><i></i><span>${esc(d.name)}</span></div><div class="demo" data-demo="${lang}"><picture><source media="(max-width: 600px)" srcset="${still}narrow.webp" width="1040" height="650"><img src="${still}wide.webp" width="1600" height="1000" alt="${alt}" fetchpriority="high" decoding="async"></picture><video muted loop playsinline preload="none" aria-hidden="true"></video></div><a class="demo-hit" href="${casePath(lang, p.slug)}" aria-label="${esc(`${d.name}: ${d.tagline}`)}"></a></div>${phoneShell(aiScreen(lang), "#fff")}</div>`;
};
const cover = (p, lang) => (lang === "pt" && p.coverPt) || p.cover;
const coverPhone = (p, lang) => (lang === "pt" && p.coverPhonePt) || p.coverPhone;
const duo = (p, lang, eager) => {
  const d = p[lang];
  return `<div class="duo">${browser(cover(p, lang), p.host, `${d.name}, ${lang === "en" ? "desktop" : "computador"}`, eager)}${phone(coverPhone(p, lang), `${d.name}, ${lang === "en" ? "phone" : "celular"}`, eager, p.phoneBar)}</div>`;
};

const homePage = lang => {
  const t = ui[lang], c = home[lang], path = homePath(lang), altPath = homePath(other(lang));
  const lead = projects[0];
  const image = ogImage(cover(lead, lang));
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": abs("/#website"), url: abs(path), name: "Adscendo", inLanguage: ["en", "pt-BR"], publisher: { "@type": "Organization", name: "Adscendo", "@id": abs("/#org") } },
      {
        "@type": "ProfessionalService", "@id": abs("/#org"), name: "Adscendo", url: abs("/"), description: c.description,
        logo: abs("/favicon.svg"), image: abs(image.src),
        email: contact.email, foundingDate: "2026-10-27",
        areaServed: [{ "@type": "Country", name: "United States" }, { "@type": "Country", name: "Brazil" }],
        knowsLanguage: ["en", "pt-BR"],
        founder: { "@type": "Person", name: "Jean Menezes", image: founderPhoto ? abs(founderPhoto) : undefined, sameAs: [contact.linkedin] },
        sameAs: [contact.instagram, contact.linkedin],
      },
    ],
  };
  // The whole card opens the story (the story link stretches over it); the CTA button sits above that layer.
  const projectsList = projects.filter(p => p.inWork !== false).map(p => {
    const d = p[lang];
    const cta = p.cta ? `<a class="btn btn--sm cta" href="${p.ctaUrl || p.url}" target="_blank" rel="noopener">${t[p.cta]}${icon("out")}</a>` : "";
    return `<li class="proj"${p.tint ? ` style="--tint:${p.tint}"` : ""}${cursorTo(p)}>
        <div class="text"><p class="eyebrow">${d.kind}</p><h3>${d.name}</h3><p>${d.summary}</p><div class="proj-actions"><a class="link stretch" href="${casePath(lang, p.slug)}">${t.readStory}${icon("arrow")}</a>${cta}</div></div>
        <div class="media">${browser(cover(p, lang), p.host, d.name)}</div>
      </li>`;
  }).join("\n      ");
  const steps = c.steps.map(([h, s], n) => `<li class="step"><p class="num">${String(n + 1).padStart(2, "0")}</p><h3>${h}</h3><p>${s}</p></li>`).join("\n        ");
  const story = timeline.map(m => {
    const [when, what] = m[lang];
    return `<li${m.now ? ` class="now"` : ""}><time>${when}</time><a href="${casePath(lang, m.slug)}">${what}</a></li>`;
  }).join("\n        ");
  const tiles = c.tiles.map(x => `<article class="tile${x.dark ? " tile--dark" : ""}"><h3>${x.h}</h3><p>${x.p}</p><ul>${x.chips.map(ch => `<li>${ch}</li>`).join("")}</ul></article>`).join("\n        ");
  return head({ lang, title: c.title, description: c.description, path, altPath, ld, image, imageAlt: `${lead[lang].name}: ${lead[lang].tagline}` }) + nav(lang, altPath) + `
<main id="main">
  <section class="hero wrap">
    <h1>${c.h1[0]}<br><span>${c.h1[1]}</span></h1>
    <p class="sub">${c.sub}</p>
    <div class="actions-row"><a class="btn" href="${sectionPath(lang, "work")}">${c.ctaWork}</a><a class="btn btn--ghost" href="${sectionPath(lang, "contact")}">${c.ctaTalk}</a></div>
    <div class="demo-intro"><span class="demo-label"><i></i>${c.demoLabel}</span><p>${c.demoText}</p></div>
    ${heroDemo(lead, lang)}
  </section>

  <section class="band band--gray process" ${sectionAttrs(lang, "process")}>
    <div class="process-pin">
      <div class="wrap" data-rise=".h2, .lede">
        <h2 class="h2">${c.processTitle}</h2>
        <p class="lede">${c.processLede}</p>
        <ol class="steps">
        ${steps}
        </ol>
        <p class="section-cta"><a class="btn" href="${sectionPath(lang, "contact")}">${c.processCta}</a></p>
      </div>
    </div>
  </section>

  <section class="band" ${sectionAttrs(lang, "work")}>
    <div class="wrap" data-rise=".h2, .lede, .proj">
      <h2 class="h2">${c.workTitle}</h2>
      <p class="lede">${c.workLede}</p>
      <ul class="projects">
      ${projectsList}
      </ul>
      <div class="cta-line"><p>${c.workCta[0]}</p><a class="btn" href="${sectionPath(lang, "contact")}">${c.workCta[1]}</a></div>
    </div>
  </section>

  <section class="band band--gray warmth">
    <div class="wrap center" data-rise=".h2, .lede">
      <h2 class="h2">${c.warmthTitle}</h2>
      <p class="lede">${c.warmthLede}</p>
    </div>
  </section>

  <section class="band band--black" id="story">
    <div class="wrap" data-rise=".h2, .lede, .timeline li">
      <h2 class="h2">${c.storyTitle}</h2>
      <p class="lede">${c.storyLede}</p>
      <ol class="timeline">
        ${story}
      </ol>
    </div>
  </section>

  <section class="band" ${sectionAttrs(lang, "about")}>
    <div class="wrap founder" data-rise=".portrait, .h2, .body">
      ${founderPhoto ? `<figure class="portrait"><img src="${founderPhoto}" alt="Jean Menezes" width="840" height="1050" loading="lazy"><figcaption><b>Jean Menezes</b><span>${c.sigRole}</span></figcaption></figure>` : ""}
      <h2 class="h2">${c.aboutTitle.replace(". ", ".<br>")}</h2>
      <div class="body">${c.about.map(p => `<p>${p}</p>`).join("")}<p class="actions-row"><a class="btn" href="${sectionPath(lang, "contact")}">${c.aboutCta}</a><a class="link" href="${casePath(lang, "adscendo")}">${t.studioStory}${icon("arrow")}</a></p></div>
    </div>
  </section>

  <section class="band band--gray" ${sectionAttrs(lang, "build")}>
    <div class="wrap" data-rise=".h2, .lede, .tile">
      <h2 class="h2">${c.doTitle}</h2>
      <p class="lede">${c.doLede}</p>
      <div class="tiles tiles--${c.tiles.length}">
        ${tiles}
      </div>
      <p class="section-cta"><a class="btn" href="${sectionPath(lang, "contact")}">${c.buildCta}</a></p>
    </div>
  </section>

  <section class="band contact-light" ${sectionAttrs(lang, "contact")}>
    <div class="wrap" data-rise=".h2, .lede, .channels, .form">
      <h2 class="h2">${c.contactTitle.replace(". ", ".<br>")}</h2>
      <p class="lede">${c.contactLede}</p>
      <div class="contact">
        <div class="channels">
          <a href="mailto:${contact.email}">Email<span>${contact.email}</span></a>
          <a id="wa" href="#" target="_blank" rel="noopener" hidden>WhatsApp<span>${contact.whatsappLabel}</span></a>
          <a href="${contact.linkedin}" target="_blank" rel="noopener">LinkedIn<span>Jean Menezes</span></a>
          <a href="${contact.instagram}" target="_blank" rel="noopener">Instagram<span>@adscendo.pro</span></a>
        </div>
      <div class="chat" data-chat><noscript><p class="chat-noscript">${contact.email}</p></noscript></div>
      <script type="application/json" id="chat-data">${JSON.stringify({ copy: chat[lang], quote, locale: lang === "en" ? "en-US" : "pt-BR" }).replace(/</g, "\\u003c")}</script>
      </div>
    </div>
  </section>
</main>
<script src="/assets/chat.js" defer></script>
` + footer(lang, altPath);
};

const figure = (fig, p, lang) => {
  const cap = fig.cap ? `<figcaption>${fig.cap}</figcaption>` : "";
  const alt = strip(fig.cap || p[lang].name);
  if (fig.kind === "browser") return `<figure class="shot">${browser(fig.img, p.host, alt)}${cap}</figure>`;
  if (fig.kind === "canvas") return `<figure class="shot"><div class="canvas-band">${imgTag(fig.img, alt).replace("<img", `<img style="width:100%;height:auto;border-radius:12px"`)}</div>${cap}</figure>`;
  if (fig.kind === "phones") return `<figure class="shot"><div class="canvas-band phones">${fig.imgs.map(im => phone(im, alt, false, p.phoneBar)).join("")}</div>${cap}</figure>`;
  if (fig.kind === "pair") return `<figure class="shot"><div class="pair pair--bp">${fig.items.map(it => it.kind === "phone" ? phone(it.img, alt, false, it.bar || p.phoneBar) : browser(it.img, it.host || p.host, alt)).join("")}</div>${cap}</figure>`;
  return "";
};

const casePage = (lang, i) => {
  const p = projects[i], d = p[lang], t = ui[lang];
  const path = casePath(lang, p.slug), altPath = casePath(other(lang), p.slug);
  const next = projects[(i + 1) % projects.length];
  const image = ogImage(cover(p, lang));
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CreativeWork", name: d.name, headline: d.tagline, description: d.description, inLanguage: hreflang(lang), image: abs(image.src), creator: { "@type": "Organization", name: "Adscendo", "@id": abs("/#org") }, ...(p.url ? { url: p.url } : {}) },
      ...(SITE ? [{ "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Adscendo", item: abs(homePath(lang)) },
        { "@type": "ListItem", position: 2, name: d.name, item: abs(path) },
      ] }] : []),
    ],
  };
  const actions = [
    p.url ? `<a class="btn" href="${p.url}" target="_blank" rel="noopener">${p.cta === "trial" ? t.trial : t.visit}${icon("out")}</a>` : "",
    ...(p.links || []).map(l => `<a class="btn btn--ghost" href="${l.href}" target="_blank" rel="noopener">${l[lang]}${icon("out")}</a>`),
  ].filter(Boolean).join("");
  // Title and text share a row of their own; the figure sits below it, so the sticky title can only
  // travel alongside its own text and never across the image.
  const chapters = d.chapters.map((ch, n) => `<article class="chapter">
        <div class="chapter-row">
          <header><p class="num">${String(n + 1).padStart(2, "0")}</p><h2>${ch.h}</h2></header>
          <div class="text">${ch.p.map(x => `<p>${x}</p>`).join("")}${ch.list ? `<ul>${ch.list.map(([b, s]) => `<li><b>${b}</b>${s}</li>`).join("")}</ul>` : ""}</div>
        </div>
        ${ch.fig ? figure(ch.fig, p, lang) : ""}
      </article>`).join("\n      ");
  return head({ lang, title: d.seoTitle || `${d.name}. ${d.tagline} | Adscendo`, description: d.description, path, altPath, ld, image, imageAlt: `${d.name}: ${d.tagline}` }) + nav(lang, altPath) + `
<main id="main">
  <section class="case-head wrap">
    <a class="back" href="${sectionPath(lang, "work")}">${icon("arrow")}${t.back}</a>
    <h1>${d.name}</h1>
    <p class="lede">${d.tagline}</p>
    ${actions ? `<div class="actions-row">${actions}</div>` : ""}
    <dl class="facts">${d.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
    ${duo(p, lang, true)}
  </section>

  <section class="band">
    <div class="wrap chapters" data-rise=".chapter header, .chapter .text, .chapter figure">
      ${chapters}
    </div>
  </section>

  <section class="band band--black">
    <div class="wrap cta-strip" data-rise>
      <a class="next" href="${casePath(lang, next.slug)}"${cursorTo(next, "next")}>
        <p class="eyebrow">${t.next}</p>
        <h2>${next[lang].name}${icon("arrow")}</h2>
        <p>${next[lang].summary}</p>
      </a>
      <a class="btn btn--light" href="${sectionPath(lang, "contact")}">${t.nav.cta}</a>
    </div>
  </section>
</main>
` + footer(lang, altPath);
};

const privacyPage = lang => {
  const d = privacy[lang], path = privacyPath(lang), altPath = privacyPath(other(lang));
  const ld = { "@context": "https://schema.org", "@type": "WebPage", name: d.title, inLanguage: hreflang(lang), url: abs(path), publisher: { "@type": "Organization", name: "Adscendo", "@id": abs("/#org") } };
  return head({ lang, title: `${d.title} | Adscendo`, description: d.lede, path, altPath, ld, image: ogImage(cover(projects[0], lang)), imageAlt: "Adscendo" }) + nav(lang, altPath) + `
<main id="main">
  <section class="case-head wrap">
    <h1>${d.title}</h1>
    <p class="lede">${d.lede}</p>
    <p class="legal-date">${d.updated}</p>
  </section>
  <section class="band">
    <div class="wrap legal">
      ${d.sections.map(x => `<article><h2>${x.h}</h2><div>${x.p.map(t => `<p>${t}</p>`).join("")}</div></article>`).join("\n      ")}
    </div>
  </section>
</main>
` + footer(lang, altPath);
};

const write = (rel, html) => {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log("wrote", rel);
};

for (const lang of LANGS) {
  const prefix = lang === "en" ? "" : "pt/";
  write(`${prefix}index.html`, homePage(lang));
  projects.forEach((p, i) => write(`${prefix}work/${p.slug}/index.html`, casePage(lang, i)));
  write(`${prefix}${privacy[lang].slug}/index.html`, privacyPage(lang));
}

// vercel.json: serve the home page at each section's clean address (serve.mjs does the same locally).
const vercelFile = join(ROOT, "vercel.json");
const vercel = JSON.parse(readFileSync(vercelFile, "utf8"));
vercel.rewrites = LANGS.map(lang => ({
  source: `${base(lang)}/(${[...new Set(Object.values(sections).map(s => s[lang]))].join("|")})`,
  destination: homePath(lang),
}));
write("vercel.json", JSON.stringify(vercel, null, 2) + "\n");

// Every page as [en path, pt path], for the sitemap and llms.txt.
const pairs = [["/", "/pt"], ...projects.map(p => [casePath("en", p.slug), casePath("pt", p.slug)])];

write("robots.txt", `User-agent: *\nAllow: /\n${SITE ? `\nSitemap: ${SITE}/sitemap.xml\n` : ""}`);

if (SITE) {
  const alts = ([en, pt]) => `<xhtml:link rel="alternate" hreflang="en" href="${SITE}${en}"/><xhtml:link rel="alternate" hreflang="pt-BR" href="${SITE}${pt}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${en}"/>`;
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...pairs, [privacyPath("en"), privacyPath("pt")]].flatMap(pair => pair.map(loc => `  <url><loc>${SITE}${loc}</loc>${alts(pair)}</url>`)).join("\n")}
</urlset>
`);
}

// A plain summary for AI assistants and search agents (llmstxt.org).
write("llms.txt", `# Adscendo

> ${strip(home.en.description)}

Adscendo is the web design and development studio of Jean Menezes. English at /, Portuguese at /pt.

## Pages

${pairs.map(([en], i) => i ? `- [${projects[i - 1].en.name}](${SITE}${en}): ${projects[i - 1].en.description}` : `- [Home](${SITE}${en}): ${strip(home.en.description)}`).join("\n")}

## Contact

- Email: ${contact.email}
- LinkedIn: ${contact.linkedin}
- Instagram: ${contact.instagram}
`);
