const CONFIG = {
  // Where the contact chat sends its summary. FormSubmit (free, no account) delivers it to the email in the
  // URL; the very first submission sends an activation link to that inbox. Empty = WhatsApp/email buttons.
  formEndpoint: "https://formsubmit.co/ajax/jeanmenezesmagalhaes@icloud.com",
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

// The nav turns dark over the black band.
const nav = document.querySelector(".nav");
const dark = document.querySelector(".band--black");
if (nav && dark) {
  const theme = () => {
    const b = dark.getBoundingClientRect();
    nav.classList.toggle("nav--dark", b.top <= 52 && b.bottom > 26);
  };
  addEventListener("scroll", theme, { passive: true });
  theme();
}

const wa = document.getElementById("wa");
if (wa && CONFIG.whatsapp) {
  wa.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(T.wa);
  wa.hidden = false;
}

// How we work: the section pins and each card snaps in as the visitor scrolls further.
const proc = document.querySelector(".process");
if (proc && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  proc.classList.add("pinned");
  const cards = [...proc.querySelectorAll(".step")];
  const update = () => {
    const r = proc.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
    const shown = r.top > innerHeight * .4 ? 0 : p < .3 ? 1 : p < .62 ? 2 : 3;
    cards.forEach((c, i) => {
      c.classList.toggle("on", i < shown);
      c.classList.toggle("past", i < shown - 1);
      c.style.setProperty("--back", shown - 1 - i);
    });
  };
  addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);
  update();
  // "How we work" in the nav lands where all three steps are already on screen, not at the empty start
  // of the pinned stretch. Same when arriving from another page with #process in the address.
  const allSteps = () => proc.offsetTop + (proc.offsetHeight - innerHeight) * .72;
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href$="#process"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button || new URL(a.href, location.href).pathname.replace(/\/$/, "") !== location.pathname.replace(/\/$/, "")) return;
    e.preventDefault();
    history.pushState(null, "", "#process");
    scrollTo({ top: allSteps(), behavior: "smooth" });
  });
  if (location.hash === "#process") addEventListener("load", () => setTimeout(() => scrollTo({ top: allSteps() }), 50), { once: true });
}

// WhatsApp links elsewhere on the page (footer) follow the same CONFIG.
document.querySelectorAll("[data-wa]").forEach(a => {
  if (!CONFIG.whatsapp) return;
  a.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(T.wa);
  a.hidden = false;
});

// Footer: the wordmark grows with the scroll until it spans the screen, then the rest fades in.
const outro = document.querySelector(".outro");
if (outro) {
  const sign = outro.querySelector(".outro-sign"), meta = outro.querySelector(".outro-meta");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = v => Math.min(1, Math.max(0, v));
  const ease = v => 1 - Math.pow(1 - v, 3);
  const frame = () => {
    // Full size: the screen's width less a small margin, but never taller than 40% of the screen.
    const fit = Math.min((innerWidth - 40) / sign.offsetWidth, innerHeight * .4 / sign.offsetHeight);
    if (still) { sign.style.setProperty("--s", fit.toFixed(4)); return; }
    // Progress runs from when the footer reaches mid-screen until the page ends.
    const r = outro.getBoundingClientRect();
    const p = clamp((innerHeight * .5 - r.top) / (r.height - innerHeight * .5));
    sign.style.setProperty("--s", (fit * (.16 + .84 * ease(clamp(p / .62)))).toFixed(4));
    meta.style.setProperty("--m", clamp((p - .58) / .32).toFixed(3));
  };
  addEventListener("scroll", frame, { passive: true });
  addEventListener("resize", frame);
  frame();
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

// "Back to top": the #top anchor is the sticky nav, which never looks far away to the browser,
// so scroll to the real top of the page instead.
// Links back to the page you are already on (the logo on the home page, the footer wordmark) do the
// same: no reload, just a scroll to the top.
const here = path => path.replace(/\/$/, "") || "/";
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
  const url = new URL(a.href, location.href);
  const top = a.getAttribute("href") === "#top";
  if (!top && (url.origin !== location.origin || here(url.pathname) !== here(location.pathname) || url.hash)) return;
  e.preventDefault();
  scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  document.querySelector(".brand")?.focus({ preventScroll: true });
});

// Footer rubber: grab the tagline or the wordmark and drag; the letters near your hand stretch along,
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
  const line = document.querySelector(".outro-line");
  if (line) {
    line.setAttribute("aria-label", line.textContent);
    rubber(line, letters(line));
  }
  const sign = document.querySelector(".outro-sign");
  if (sign) {
    const word = sign.querySelector("span");
    const chars = letters(word);
    sign.querySelector("svg").classList.add("rb");
    rubber(sign, [sign.querySelector("svg"), ...chars]);
  }
}

// What we build: the featured tile (wide, inverted) trades places every few seconds. It holds still while
// the pointer is over it, while it is off screen, and for visitors who prefer less motion.
const pair = document.querySelector(".tiles--2");
if (pair && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let seen = false, held = false;
  new IntersectionObserver(([e]) => { seen = e.isIntersecting; }, { threshold: .4 }).observe(pair);
  pair.addEventListener("pointerenter", () => { held = true; });
  pair.addEventListener("pointerleave", () => { held = false; });
  setInterval(() => {
    if (!seen || held || document.hidden) return;
    pair.classList.toggle("flip");
    [...pair.children].forEach(t => { t.classList.toggle("tile--dark"); t.classList.toggle("is-featured"); });
  }, 4500);
}
