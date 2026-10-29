const CONFIG = {
  // Formspree (or similar) endpoint. Empty = the form opens the visitor's email app instead.
  formEndpoint: "",
  // WhatsApp number in international format, digits only, e.g. "5511999999999". Empty = hidden.
  whatsapp: "5551993271160",
  email: "jeanmenezesmagalhaes@icloud.com",
};

const PT = document.documentElement.lang.startsWith("pt");
const T = PT ? {
  wa: "Oi Jean, vi o portfólio da Adscendo e queria conversar sobre um projeto.",
  missing: f => `Preencha ${f}.`,
  sending: "Enviando…",
  send: "Enviar",
  sent: "Obrigado. O Jean responde pessoalmente.",
  mailto: "Seu app de email deve abrir com a mensagem pronta para enviar.",
  failed: `Não deu certo. Escreva para ${CONFIG.email}.`,
  subject: n => `Novo projeto: ${n}`,
} : {
  wa: "Hi Jean, I saw the Adscendo portfolio and I'd like to talk about a project.",
  missing: f => `Please fill in ${f}.`,
  sending: "Sending…",
  send: "Send",
  sent: "Thanks. Jean will get back to you personally.",
  mailto: "Your email app should open with your message ready to send.",
  failed: `That didn't go through. Email ${CONFIG.email} instead.`,
  subject: n => `New project: ${n}`,
};

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

// Contact form: post to the endpoint when configured, otherwise open a pre-filled email.
const form = document.getElementById("contact-form");
if (form) {
  const status = document.getElementById("form-status");
  const send = async data => {
    if (CONFIG.formEndpoint) {
      const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (!res.ok) throw new Error("send failed");
      return "sent";
    }
    const body = [...data.entries()].filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(T.subject(data.get("name")))}&body=${encodeURIComponent(body)}`;
    return "mailto";
  };
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const bad = [...form.querySelectorAll("[required]")].find(f => !f.value.trim() || !f.checkValidity());
    if (bad) {
      status.textContent = T.missing(bad.labels[0].textContent.trim().toLowerCase());
      status.className = "status err";
      bad.focus();
      return;
    }
    const btn = form.querySelector("button");
    btn.disabled = true; btn.textContent = T.sending;
    try {
      const how = await send(new FormData(form));
      status.textContent = how === "sent" ? T.sent : T.mailto;
      status.className = "status ok";
      if (how === "sent") form.reset();
    } catch {
      status.textContent = T.failed;
      status.className = "status err";
    } finally { btn.disabled = false; btn.textContent = T.send; }
  });
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
  const show = () => floatCta.classList.toggle("on", scrollY > innerHeight * .9 && !near.size);
  const watch = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? near.add(e.target) : near.delete(e.target)); show(); });
  document.querySelectorAll("#contact, .outro").forEach(el => watch.observe(el));
  addEventListener("scroll", show, { passive: true });
  show();
}
