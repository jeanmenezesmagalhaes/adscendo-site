const CONFIG = {
  // Where the contact chat sends its summary: api/lead.mjs, which emails it through Resend (needs
  // RESEND_API_KEY on Vercel). Empty = WhatsApp/email buttons.
  formEndpoint: "/api/lead",
  // WhatsApp number in international format, digits only, e.g. "5511999999999". Empty = hidden.
  whatsapp: "5551993271160",
  email: "jeanmenezesmagalhaes@icloud.com",
};

const PT = document.documentElement.lang.startsWith("pt");
const T = PT
  ? { wa: "Oi Jean, vi o portfólio da Adscendo e queria conversar sobre um projeto." }
  : { wa: "Hi Jean, I saw the Adscendo portfolio and I'd like to talk about a project." };

// Rise into place as sections enter the viewport.
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll("[data-rise]").forEach(sec => {
  [...sec.querySelectorAll(sec.dataset.rise || ":scope > *")].forEach((el, i) => {
    el.classList.add("rise"); el.style.setProperty("--i", i % 4); io.observe(el);
  });
});

// Launch offer strip: closing it hides it on every page from then on (the <head> script reads the flag).
document.querySelector(".offer-close")?.addEventListener("click", () => {
  document.documentElement.classList.add("offer-closed");
  try { localStorage.setItem("offer", "closed"); } catch {}
});

// Home hero: the Prospector demo is a video (src/record-demo.mjs) over its first frame. It loads only as
// the frame comes near the screen, in the cut the image picked (wide, or narrow on phones), AV1 where the
// browser plays it and H.264 elsewhere. With reduced motion, Save-Data or a 2G connection it stays a still.
const demo = document.querySelector("[data-demo]");
const conn = navigator.connection;
if (demo && !matchMedia("(prefers-reduced-motion: reduce)").matches && !conn?.saveData && !/2g/.test(conn?.effectiveType || "")) {
  new IntersectionObserver(([e], io) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    const video = demo.querySelector("video"), still = demo.querySelector("img");
    if (!video) return;
    const base = `/assets/demo/${demo.dataset.demo}-${(still.currentSrc || still.src).includes("narrow") ? "narrow" : "wide"}`;
    video.innerHTML = `<source src="${base}.webm" type='video/webm; codecs="av01.0.08M.08"'><source src="${base}.mp4" type="video/mp4">`;
    video.addEventListener("playing", () => demo.classList.add("playing"), { once: true });
    video.load();
    video.play().catch(() => {});
  }, { rootMargin: "200px" }).observe(demo);
}

// The nav turns dark over a black band. The switch is instant: with the usual transitions the nav and
// its buttons would show their old colors for a moment, a flash against the band on a fast scroll.
const nav = document.querySelector(".nav");
const darks = [...document.querySelectorAll(".band--black")];
if (nav && darks.length) {
  const theme = () => {
    const on = darks.some(d => { const b = d.getBoundingClientRect(); return b.top <= 52 && b.bottom > 26; });
    if (on === nav.classList.contains("nav--dark")) return;
    nav.classList.add("nav--snap");
    nav.classList.toggle("nav--dark", on);
    requestAnimationFrame(() => requestAnimationFrame(() => nav.classList.remove("nav--snap")));
  };
  addEventListener("scroll", theme, { passive: true });
  theme();
}

// Light or dark: follows the system until the visitor picks one. Picking the system's own scheme forgets
// the choice, so the page goes back to following the system.
const themeBtn = document.querySelector(".theme");
if (themeBtn) {
  const root = document.documentElement;
  const sys = matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => (root.dataset.theme || (sys.matches ? "dark" : "light")) === "dark";
  const sync = () => {
    themeBtn.setAttribute("aria-pressed", isDark());
    document.querySelectorAll('meta[name="theme-color"]').forEach(m => {
      m.content = root.dataset.theme ? (isDark() ? "#000000" : "#ffffff") : m.media.includes("dark") ? "#000000" : "#ffffff";
    });
  };
  themeBtn.hidden = false;
  themeBtn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    const follow = next === (sys.matches ? "dark" : "light");
    if (follow) delete root.dataset.theme; else root.dataset.theme = next;
    try { follow ? localStorage.removeItem("theme") : localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });
  sys.addEventListener("change", sync);
  sync();
}

const wa = document.getElementById("wa");
if (wa && CONFIG.whatsapp) {
  wa.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(T.wa);
  wa.hidden = false;
}

// How we work: no scrolling needed to see the steps. Each card lands as it comes into view, at least
// half a second after the one before, so on a wide screen the three follow each other on their own.
const proc = document.querySelector(".process");
if (proc && "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  proc.classList.add("staged");
  let next = 0;
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const now = performance.now(), at = Math.max(now, next);
    next = at + 500;
    setTimeout(() => e.target.classList.add("on"), at - now);
  }), { rootMargin: "0px 0px -15% 0px" });
  proc.querySelectorAll(".step").forEach(c => io.observe(c));
}

// WhatsApp links elsewhere on the page (footer) follow the same CONFIG.
document.querySelectorAll("[data-wa]").forEach(a => {
  if (!CONFIG.whatsapp) return;
  a.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(T.wa);
  a.hidden = false;
});

// Footer: once it comes into view the wordmark grows on its own to span the screen and the rest fades
// in (CSS transitions on .in). A little scroll into it is enough: when scrolling down stops with the
// footer partly on screen, the page glides the rest of the way so the whole footer shows.
const outro = document.querySelector(".outro");
if (outro) {
  const sign = outro.querySelector(".outro-sign");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Full size: the screen's width less a small margin, but never taller than 40% of the screen.
  const fit = () => sign.style.setProperty("--s", Math.min((innerWidth - 40) / sign.offsetWidth, innerHeight * .4 / sign.offsetHeight).toFixed(4));
  addEventListener("resize", fit);
  fit();
  if (still) outro.classList.add("in");
  else {
    new IntersectionObserver(([e], io) => {
      if (e.isIntersecting) { outro.classList.add("in"); io.disconnect(); }
    }, { threshold: .2 }).observe(outro);
    let lastY = scrollY, down = false, rest = 0, glided = false;
    addEventListener("scroll", () => {
      down = scrollY > lastY;
      lastY = scrollY;
      const top = outro.getBoundingClientRect().top;
      if (top > innerHeight) glided = false;
      clearTimeout(rest);
      rest = setTimeout(() => {
        const t = outro.getBoundingClientRect().top;
        if (!down || glided || t <= 1 || t > innerHeight * .8) return;
        glided = true;
        scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      }, 140);
    }, { passive: true });
  }
}

// The floating "Get in touch" shows once the hero is behind, and steps aside near the contact form and footer.
const floatCta = document.querySelector(".float-cta");
if (floatCta) {
  floatCta.hidden = false;
  const near = new Set();
  // It steps out of the way while you read (scrolling down) and comes back when you stop or scroll up.
  // Direction only counts after ~24px of travel the same way, so tiny or zero scroll steps (trackpad
  // momentum) don't make it blink.
  let lastY = scrollY, travel = 0, away = false, idle = 0;
  const show = () => {
    const d = scrollY - lastY;
    lastY = scrollY;
    if (d) travel = Math.sign(d) === Math.sign(travel) ? travel + d : d;
    if (travel > 24) away = true;
    else if (travel < -24) away = false;
    floatCta.classList.toggle("on", scrollY > innerHeight * .9 && !near.size);
    floatCta.classList.toggle("away", away);
    if (!d) return;
    clearTimeout(idle);
    idle = setTimeout(() => { away = false; travel = 0; floatCta.classList.remove("away"); }, 1200);
  };
  const watch = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? near.add(e.target) : near.delete(e.target)); show(); });
  document.querySelectorAll("#contact, .outro").forEach(el => watch.observe(el));
  addEventListener("scroll", show, { passive: true });
  show();
}

// Home sections have clean addresses (/how-we-work, /pt/como-trabalhamos…) that serve the home page.
// On the home page, links to them scroll there without a reload and the address follows; arriving at
// one scrolls to its section, and the language switch points at the same section in the other language.
const sections = new Map([...document.querySelectorAll("section[data-path]")].map(s => [s.dataset.path, s]));
const langLink = document.querySelector(".nav .lang"), altHome = langLink?.getAttribute("href");
const motion = () => matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
// "Get in touch" lands on the project chat itself, centered on screen, not on the contact heading.
const goTo = (path, behavior) => {
  const s = sections.get(path), chatBox = s?.querySelector("[data-chat]");
  if (langLink) langLink.href = s ? s.dataset.alt : altHome;
  if (chatBox) chatBox.scrollIntoView({ behavior, block: "center" });
  else if (s) s.scrollIntoView({ behavior });
  else scrollTo({ top: 0, behavior });
};
const here = path => path.replace(/\/$/, "") || "/";
// This page's own path, also when the home page is showing at a section's address.
const page = () => sections.has(location.pathname) ? here(new URL(document.querySelector(".brand").href).pathname) : here(location.pathname);
if (sections.has(location.pathname)) {
  goTo(location.pathname, "instant");
  addEventListener("load", () => setTimeout(() => goTo(location.pathname, "instant"), 50), { once: true });
} else if (location.hash) {
  // Old links such as /#process: same section, clean address.
  const s = document.getElementById(location.hash.slice(1));
  if (s?.dataset.path) { history.replaceState(null, "", s.dataset.path); if (langLink) langLink.href = s.dataset.alt; }
}
// Back and Forward between sections scroll to the section of the address shown.
addEventListener("popstate", () => { if (!location.hash && (sections.has(location.pathname) || here(location.pathname) === page())) goTo(location.pathname, motion()); });

// "Back to top": the #top anchor is the sticky nav, which never looks far away to the browser,
// so scroll to the real top of the page instead.
// Links back to the page you are already on (the logo on the home page, the footer wordmark) do the
// same: no reload, just a scroll to the top.
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
  const url = new URL(a.href, location.href);
  const top = a.getAttribute("href") === "#top";
  const path = here(url.pathname);
  if (!top && (url.origin !== location.origin || url.hash || (!sections.has(path) && path !== page()))) return;
  e.preventDefault();
  const to = top ? page() : path;
  if (to !== here(location.pathname)) history.pushState(null, "", to);
  goTo(to, motion());
  if (!sections.has(to)) document.querySelector(".brand")?.focus({ preventScroll: true });
});

// Footer rubber: grab the wordmark and drag; the letters near your hand stretch along,
// then spring back with a wobble when you let go. Hovering nudges the nearest letters toward the pointer.
function rubber(box, items) {
  const n = items.length;
  const pos = items.map(() => ({ x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0 }));
  let centers = [], drag = null, hover = null, raf = 0, moved = false;
  const scale = () => box.getBoundingClientRect().width / box.offsetWidth || 1;
  const measure = () => {
    centers = items.map((el, i) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + r.width / 2 - pos[i].x * scale(), y: r.top + r.height / 2 - pos[i].y * scale() };
    });
  };
  const nearest = x => centers.reduce((best, c, i) => Math.abs(c.x - x) < Math.abs(centers[best].x - x) ? i : best, 0);
  const aim = () => {
    const s = scale();
    pos.forEach((p, i) => {
      if (drag) {
        const f = Math.exp(-((i - drag.i) ** 2) / (2 * Math.max(1.6, n / 6) ** 2));
        let dx = (drag.x - drag.x0) / s * f, dy = (drag.y - drag.y0) / s * f;
        const len = Math.hypot(dx, dy), max = 140 / s;
        if (len > max) { dx *= max / len; dy *= max / len; }
        p.tx = dx; p.ty = dy;
      } else if (hover) {
        const c = centers[i], d = Math.hypot(hover.x - c.x, hover.y - c.y), f = Math.max(0, 1 - d / (120 * s ** .3));
        p.tx = (hover.x - c.x) / s * .12 * f; p.ty = (hover.y - c.y) / s * .12 * f;
      } else { p.tx = 0; p.ty = 0; }
    });
  };
  const tick = () => {
    let energy = 0;
    const k = drag ? .22 : .07, damp = drag ? .7 : .86;
    pos.forEach((p, i) => {
      p.vx = (p.vx + (p.tx - p.x) * k) * damp;
      p.vy = (p.vy + (p.ty - p.y) * k) * damp;
      p.x += p.vx; p.y += p.vy;
      energy += Math.abs(p.vx) + Math.abs(p.vy) + Math.abs(p.tx - p.x) + Math.abs(p.ty - p.y);
      items[i].style.transform = `translate(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px) rotate(${(p.vx * 1.4).toFixed(2)}deg)`;
    });
    raf = energy > .05 || drag || hover ? requestAnimationFrame(tick) : 0;
  };
  const run = () => { aim(); if (!raf) raf = requestAnimationFrame(tick); };
  box.addEventListener("pointerenter", () => measure());
  box.addEventListener("pointermove", e => {
    if (drag) { drag.x = e.clientX; drag.y = e.clientY; if (Math.hypot(drag.x - drag.x0, drag.y - drag.y0) > 6) moved = true; }
    else { if (!centers.length) measure(); hover = { x: e.clientX, y: e.clientY }; }
    run();
  });
  box.addEventListener("pointerleave", () => { if (!drag) { hover = null; run(); } });
  box.addEventListener("pointerdown", e => {
    if (e.button) return;
    measure();
    moved = false;
    drag = { x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, i: nearest(e.clientX) };
    box.setPointerCapture(e.pointerId);
    box.classList.add("grabbing");
    run();
  });
  const release = () => { if (!drag) return; drag = null; hover = null; box.classList.remove("grabbing"); run(); };
  box.addEventListener("pointerup", release);
  box.addEventListener("pointercancel", release);
  // A drag on the wordmark is play, not a click on its link.
  box.addEventListener("click", e => { if (moved) { e.preventDefault(); moved = false; } }, true);
  box.addEventListener("dragstart", e => e.preventDefault());
}
// Wrap each letter in its own span (words kept together so lines still wrap between words).
function letters(el) {
  const text = el.textContent;
  el.textContent = "";
  const out = [];
  text.split(/(\s+)/).forEach(part => {
    if (/^\s+$/.test(part)) { el.append(part); return; }
    const word = document.createElement("span");
    word.className = "rb-word";
    for (const ch of part) {
      const s = document.createElement("span");
      s.className = "rb";
      s.textContent = ch;
      word.append(s);
      out.push(s);
    }
    el.append(word);
  });
  return out;
}
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const sign = document.querySelector(".outro-sign");
  if (sign) {
    const word = sign.querySelector("span");
    const chars = letters(word);
    sign.querySelector("svg").classList.add("rb");
    rubber(sign, [sign.querySelector("svg"), ...chars]);
  }
}
