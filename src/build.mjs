// Generates the static pages from src/content.mjs. No dependencies.
//   node src/build.mjs
// Output: index.html, work/<slug>/index.html, pt/index.html, pt/work/<slug>/index.html
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { contact, ui, home, timeline, projects } from "./content.mjs";

// Public origin, e.g. "https://adscendo.com". When set, pages get canonical and hreflang links.
const SITE = "";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LANGS = ["en", "pt"];
const base = lang => (lang === "en" ? "" : "/pt");
const homePath = lang => base(lang) || "/";
const casePath = (lang, slug) => `${base(lang)}/work/${slug}`;
const other = lang => (lang === "en" ? "pt" : "en");
const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|quot;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const strip = s => s.replace(/<[^>]+>/g, "");

const icons = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="cloud" viewBox="0 0 48 32"><path d="M15 27H37a6.5 6.5 0 0 0 0-13a9.2 9.2 0 0 0-17.6 1.2A6.6 6.6 0 0 0 10 25" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="arrow" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="out" viewBox="0 0 16 16"><path d="M5 11l6-6M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
</svg>`;
const icon = (id, cls = "") => `<svg${cls ? ` class="${cls}"` : ""} aria-hidden="true"><use href="#${id}"/></svg>`;

const head = ({ lang, title, description, path, altPath, ld }) => `<!doctype html>
<html lang="${lang === "en" ? "en" : "pt-BR"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="${lang === "en" ? "en_US" : "pt_BR"}">
<meta name="theme-color" content="#ffffff">
${SITE ? `<link rel="canonical" href="${SITE}${path}">
<link rel="alternate" hreflang="${lang === "en" ? "en" : "pt-BR"}" href="${SITE}${path}">
<link rel="alternate" hreflang="${lang === "en" ? "pt-BR" : "en"}" href="${SITE}${altPath}">
<link rel="alternate" hreflang="x-default" href="${SITE}${lang === "en" ? path : altPath}">
` : ""}<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">
<script>document.documentElement.classList.add("js")</script>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
${icons}`;

const nav = (lang, altPath, onHome) => {
  const t = ui[lang], h = onHome ? "" : homePath(lang);
  const cur = lang.toUpperCase(), alt = other(lang).toUpperCase();
  return `<a class="btn btn--sm skip" href="#main">${t.skip}</a>
<header class="nav">
  <div class="wrap">
    <a class="brand" href="${homePath(lang)}" aria-label="Adscendo">${icon("cloud")}Adscendo.</a>
    <ul>
      <li><a href="${h}#work">${t.nav.work}</a></li>
      <li><a href="${h}#story">${t.nav.story}</a></li>
      <li><a href="${h}#about">${t.nav.about}</a></li>
    </ul>
    <a class="lang" href="${altPath}" hreflang="${other(lang)}" lang="${other(lang)}" aria-label="${t.other}"><b>${cur}</b><span>${alt}</span></a>
    <a class="btn btn--sm" href="${h}#contact">${t.nav.cta}</a>
  </div>
</header>`;
};

const footer = (lang, altPath) => `<footer>
  <a class="wrap sign" href="${homePath(lang)}" aria-label="Adscendo">${icon("cloud")}<span>Adscendo.</span></a>
  <div class="wrap row">
    <span>${ui[lang].footer} &copy; 2026 Adscendo</span>
    <nav><a href="mailto:${contact.email}">Email</a><a href="${contact.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${altPath}" hreflang="${other(lang)}" lang="${other(lang)}">${ui[lang].other}</a></nav>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>
`;

const imgTag = (im, alt, eager) => `<img src="${im.src}" width="${im.w}" height="${im.h}" alt="${esc(alt)}"${eager ? ` fetchpriority="high"` : ` loading="lazy"`} decoding="async">`;
const browser = (im, host, alt, eager) => `<div class="browser"><div class="bar" aria-hidden="true"><i></i><i></i><i></i><span>${esc(host)}</span></div>${imgTag(im, alt, eager)}</div>`;
const phone = (im, alt, eager) => `<div class="phone">${imgTag(im, alt, eager)}</div>`;
const duo = (p, lang, eager) => {
  const d = p[lang];
  return `<div class="duo">${browser(p.cover, p.host, `${d.name}, ${lang === "en" ? "desktop" : "computador"}`, eager)}${phone(p.coverPhone, `${d.name}, ${lang === "en" ? "phone" : "celular"}`, eager)}</div>`;
};

const homePage = lang => {
  const t = ui[lang], c = home[lang], path = homePath(lang), altPath = homePath(other(lang));
  const lead = projects[0];
  const ld = {
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "Adscendo", description: c.description,
    email: contact.email, foundingDate: "2026-10-27",
    founder: { "@type": "Person", name: "Jean Menezes", sameAs: [contact.linkedin] },
    sameAs: [contact.instagram, contact.linkedin],
  };
  const projectsList = projects.map(p => {
    const d = p[lang];
    return `<li class="proj"><a href="${casePath(lang, p.slug)}">
        <div class="text"><p class="eyebrow">${d.kind}</p><h3>${d.name}</h3><p>${d.summary}</p><span class="link">${t.readStory}${icon("arrow")}</span></div>
        <div class="media">${browser(p.cover, p.host, d.name)}</div>
      </a></li>`;
  }).join("\n      ");
  const story = timeline.map(m => {
    const [when, what] = m[lang], p = projects.find(x => x.slug === m.slug);
    return `<li${m.now ? ` class="now"` : ""}><time>${when}</time><a href="${casePath(lang, m.slug)}">${what}</a><small>${p[lang].name}</small></li>`;
  }).join("\n        ");
  const tiles = c.tiles.map(x => `<article class="tile${x.dark ? " tile--dark" : ""}"><h3>${x.h}</h3><p>${x.p}</p><ul>${x.chips.map(ch => `<li>${ch}</li>`).join("")}</ul></article>`).join("\n        ");
  const f = c.form;
  return head({ lang, title: c.title, description: c.description, path, altPath, ld }) + nav(lang, altPath, true) + `
<main id="main">
  <section class="hero wrap">
    <h1>${c.h1[0]}<br><span>${c.h1[1]}</span></h1>
    <p class="sub">${c.sub}</p>
    <div class="actions-row"><a class="btn" href="#work">${c.ctaWork}</a><a class="btn btn--ghost" href="#contact">${c.ctaTalk}</a></div>
    ${duo(lead, lang, true)}
  </section>

  <section class="band band--gray" id="work">
    <div class="wrap" data-rise=".h2, .lede, .proj">
      <h2 class="h2">${c.workTitle}</h2>
      <p class="lede">${c.workLede}</p>
      <ul class="projects">
      ${projectsList}
      </ul>
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

  <section class="band" id="about">
    <div class="wrap founder" data-rise=".h2, .body, .sig">
      <div><h2 class="h2">${c.aboutTitle}</h2></div>
      <div class="body">${c.about.map(p => `<p>${p}</p>`).join("")}</div>
      <div class="sig"><div class="av">${icon("cloud")}</div><div><b>Jean Menezes</b><span>${c.sigRole}</span></div></div>
    </div>
  </section>

  <section class="band band--gray" id="build">
    <div class="wrap" data-rise=".h2, .lede, .tile">
      <h2 class="h2">${c.doTitle}</h2>
      <p class="lede">${c.doLede}</p>
      <div class="tiles">
        ${tiles}
      </div>
    </div>
  </section>

  <section class="band contact-light" id="contact">
    <div class="wrap contact" data-rise=".h2, .lede, .channels, .form">
      <div>
        <h2 class="h2">${c.contactTitle}</h2>
        <p class="lede">${c.contactLede}</p>
        <div class="channels">
          <a href="mailto:${contact.email}">Email<span>${contact.email}</span></a>
          <a id="wa" href="#" target="_blank" rel="noopener" hidden>WhatsApp<span>${contact.whatsappLabel}</span></a>
          <a href="${contact.linkedin}" target="_blank" rel="noopener">LinkedIn<span>Jean Menezes</span></a>
          <a href="${contact.instagram}" target="_blank" rel="noopener">Instagram<span>@adscendo.consult</span></a>
        </div>
      </div>
      <form class="form" id="contact-form" novalidate>
        <div class="field"><label for="f-name">${f.name}</label><input id="f-name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="f-email">${f.email}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="f-co">${f.company} <small>${f.optional}</small></label><input id="f-co" name="company" autocomplete="organization"></div>
        <div class="field"><label for="f-need">${f.need}</label><select id="f-need" name="need">${f.needs.map(n => `<option>${n}</option>`).join("")}</select></div>
        <div class="field full"><label for="f-msg">${f.msg}</label><textarea id="f-msg" name="message" placeholder="${esc(f.msgPh)}" required></textarea></div>
        <div class="actions"><button class="btn" type="submit">${f.send}</button><p class="status" id="form-status" role="status"></p></div>
      </form>
    </div>
  </section>
</main>
` + footer(lang, altPath);
};

const figure = (fig, p, lang) => {
  const cap = fig.cap ? `<figcaption>${fig.cap}</figcaption>` : "";
  const alt = strip(fig.cap || p[lang].name);
  if (fig.kind === "browser") return `<figure class="shot">${browser(fig.img, p.host, alt)}${cap}</figure>`;
  if (fig.kind === "canvas") return `<figure class="shot"><div class="canvas-band">${imgTag(fig.img, alt).replace("<img", `<img style="width:100%;height:auto;border-radius:12px"`)}</div>${cap}</figure>`;
  if (fig.kind === "phones") return `<figure class="shot"><div class="canvas-band phones">${fig.imgs.map(im => phone(im, alt)).join("")}</div>${cap}</figure>`;
  if (fig.kind === "pair") return `<figure class="shot"><div class="pair pair--bp">${fig.items.map(it => it.kind === "phone" ? phone(it.img, alt) : browser(it.img, p.host, alt)).join("")}</div>${cap}</figure>`;
  return "";
};

const casePage = (lang, i) => {
  const p = projects[i], d = p[lang], t = ui[lang];
  const path = casePath(lang, p.slug), altPath = casePath(other(lang), p.slug);
  const next = projects[(i + 1) % projects.length];
  const ld = { "@context": "https://schema.org", "@type": "CreativeWork", name: d.name, description: d.description, inLanguage: lang === "en" ? "en" : "pt-BR", creator: { "@type": "Organization", name: "Adscendo" }, ...(p.url ? { url: p.url } : {}) };
  const actions = [
    p.url ? `<a class="btn" href="${p.url}" target="_blank" rel="noopener">${t.visit}${icon("out")}</a>` : "",
    ...(p.links || []).map(l => `<a class="btn btn--ghost" href="${l.href}" target="_blank" rel="noopener">${l[lang]}${icon("out")}</a>`),
  ].filter(Boolean).join("");
  const chapters = d.chapters.map((ch, n) => `<article class="chapter">
        <header><p class="num">${String(n + 1).padStart(2, "0")}</p><h2>${ch.h}</h2></header>
        <div class="text">${ch.p.map(x => `<p>${x}</p>`).join("")}${ch.list ? `<ul>${ch.list.map(([b, s]) => `<li><b>${b}</b>${s}</li>`).join("")}</ul>` : ""}</div>
        ${ch.fig ? figure(ch.fig, p, lang) : ""}
      </article>`).join("\n      ");
  return head({ lang, title: `${d.name}. ${d.tagline} | Adscendo`, description: d.description, path, altPath, ld }) + nav(lang, altPath, false) + `
<main id="main">
  <section class="case-head wrap">
    <a class="back" href="${homePath(lang)}#work">${icon("arrow")}${t.back}</a>
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
      <a class="next" href="${casePath(lang, next.slug)}">
        <p class="eyebrow">${t.next}</p>
        <h2>${next[lang].name}${icon("arrow")}</h2>
        <p>${next[lang].summary}</p>
      </a>
      <a class="btn btn--light" href="${homePath(lang)}#contact">${t.nav.cta}</a>
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
}
