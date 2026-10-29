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
