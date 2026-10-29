// The contact chat: a short scripted conversation (no AI, nothing leaves the page until the visitor sends).
// Name, website (and its integrations), a first estimate, email, optional WhatsApp and notes; then the
// summary goes out on WhatsApp or by email, or to CONFIG.formEndpoint when one is set (site.js).
(() => {
  const root = document.querySelector("[data-chat]");
  const data = document.getElementById("chat-data");
  if (!root || !data) return;
  const { copy: T, quote: Q, locale } = JSON.parse(data.textContent);
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? "");
  const money = n => (locale.startsWith("pt") ? "US$ " : "$") + n.toLocaleString(locale);
  const sleep = ms => new Promise(r => setTimeout(r, REDUCED ? 0 : ms));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  root.innerHTML = `
    <div class="chat-head"><img src="/assets/jean.webp" alt="" width="36" height="36"><div><b>${esc(T.title)}</b><span>${esc(T.status)}</span></div>
      <button type="button" class="chat-restart" hidden>${esc(T.restart)}</button></div>
    <div class="chat-log" role="log" aria-live="polite"></div>
    <div class="chat-input"></div>`;
  const log = root.querySelector(".chat-log"), dock = root.querySelector(".chat-input"), restart = root.querySelector(".chat-restart");
  let a = {}, gen = 0;

  const scroll = () => log.scrollTo({ top: log.scrollHeight, behavior: REDUCED ? "auto" : "smooth" });
  const bubble = (html, who = "bot", cls = "") => {
    const el = document.createElement("div");
    el.className = `msg msg--${who} ${cls}`.trim();
    el.innerHTML = html;
    log.append(el);
    scroll();
    return el;
  };
  // A restart bumps `gen`; a conversation from before it simply stops at its next message.
  async function say(text, cls) {
    const g = gen;
    const dots = bubble("<i></i><i></i><i></i>", "bot", "typing");
    await sleep(500 + Math.min(700, text.length * 12));
    dots.remove();
    if (g !== gen) return new Promise(() => {});
    return bubble(text, "bot", cls);
  }

  // One input at a time: a text field, or a row of choices.
  const ask = ({ type = "text", ph = "", check, optional, inputmode, autocomplete, multiline }) => new Promise(done => {
    dock.innerHTML = `<form class="chat-form" novalidate>
      ${multiline ? `<textarea rows="2" maxlength="600" placeholder="${esc(ph)}"></textarea>` : `<input type="${type}" placeholder="${esc(ph)}" maxlength="120"${inputmode ? ` inputmode="${inputmode}"` : ""}${autocomplete ? ` autocomplete="${autocomplete}"` : ""}>`}
      ${optional ? `<button type="button" class="chip chat-skip">${esc(T.skip)}</button>` : ""}
      <button type="submit" class="chat-send" aria-label="${esc(T.send)}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <p class="chat-err" role="alert"></p></form>`;
    const form = dock.querySelector("form"), field = form.querySelector("input, textarea"), err = form.querySelector(".chat-err");
    if (matchMedia("(hover: hover)").matches || root.contains(document.activeElement)) field.focus({ preventScroll: true });
    if (multiline) field.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
    const finish = value => { dock.innerHTML = ""; if (value) bubble(esc(value), "me"); done(value); };
    form.querySelector(".chat-skip")?.addEventListener("click", () => finish(""));
    form.addEventListener("submit", e => {
      e.preventDefault();
      const v = field.value.trim();
      if (!v && optional) return finish("");
      const problem = check ? check(v) : !v;
      if (problem) { err.textContent = typeof problem === "string" ? problem : ""; field.focus(); return; }
      finish(v);
    });
  });
  const choose = options => new Promise(done => {
    dock.innerHTML = `<div class="chat-chips">${options.map(([v, label]) => `<button type="button" class="chip" data-v="${v}">${esc(label)}</button>`).join("")}</div>`;
    dock.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
      dock.innerHTML = "";
      bubble(esc(b.textContent), "me");
      done(b.dataset.v);
    }));
  });

  const tierOf = () => a.site === "no" ? "new" : a.tools === "yes" ? "complex" : "redo";
  const price = t => Math.round(Q[t].regular * (1 - Q[t].off / 100));
  function estimateCard() {
    const t = tierOf(), q = Q[t];
    return `<span class="est-kind">${esc(T.tiers[t])}</span>
      <span class="est-price"><s>${money(q.regular)}</s> <b>${money(price(t))}</b></span>
      <span class="est-off">${esc(fill(T.off, { p: q.off }))}${t === "new" ? ` · ${esc(T.launch)}` : ""}</span>
      ${a.tools === "unsure" ? `<span class="est-note">${esc(fill(T.maybeMore, { price: money(price("complex")) }))}</span>` : ""}
      <span class="est-note">${esc(T.fine)}</span>`;
  }
  function summary() {
    const L = T.labels, t = tierOf();
    return [
      [L.name, a.name],
      [L.site, a.site === "no" ? L.none : a.link || T.yes],
      a.site === "yes" ? [L.tools, { yes: T.yes, no: T.no, unsure: T.notSure }[a.tools]] : null,
      [L.estimate, `${T.tiers[t]}: ${money(price(t))} (${fill(T.off, { p: Q[t].off })})`],
      [L.email, a.email],
      a.phone ? [L.phone, a.phone] : null,
      a.notes ? [L.notes, a.notes] : null,
    ].filter(Boolean).map(([k, v]) => `${k}: ${v}`).join("\n");
  }

  async function run() {
    gen++;
    a = {};
    log.innerHTML = "";
    restart.hidden = true;
    await say(esc(T.greet));
    await say(esc(T.askName));
    a.name = await ask({ ph: T.namePh, autocomplete: "name", check: v => (!v || v.length > 60 || /[<>@\d]{2,}/.test(v)) && T.bad.name });
    restart.hidden = false;
    await say(esc(fill(T.askSite, { name: a.name.split(" ")[0] })));
    a.site = await choose([["yes", T.yes], ["no", T.no]]);
    if (a.site === "yes") {
      await say(esc(T.askLink));
      a.link = await ask({ type: "url", inputmode: "url", ph: T.linkPh, optional: true, check: v => !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(v) && T.bad.link });
      await say(esc(T.askTools));
      a.tools = await choose([["yes", T.yes], ["no", T.no], ["unsure", T.notSure]]);
    }
    await say(esc(T.estimate));
    await say(estimateCard(), "estimate");
    await say(esc(T.askEmail));
    a.email = await ask({ type: "email", inputmode: "email", autocomplete: "email", ph: T.emailPh, check: v => !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) && T.bad.email });
    await say(esc(T.askPhone));
    a.phone = await ask({ type: "tel", inputmode: "tel", autocomplete: "tel", ph: T.phonePh, optional: true, check: v => !/^\+?[\d\s().-]{8,20}$/.test(v) && T.bad.phone });
    await say(esc(T.askMore));
    a.notes = await ask({ multiline: true, ph: T.morePh, optional: true });
    await finish();
  }

  async function finish() {
    const text = summary(), subject = fill(T.subject, { name: a.name });
    if (typeof CONFIG !== "undefined" && CONFIG.formEndpoint) {
      try {
        const body = new FormData();
        body.append("_subject", subject);
        body.append("message", text);
        body.append("email", a.email);
        const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body });
        if (res.ok) { await say(esc(fill(T.sent, { name: a.name.split(" ")[0] }))); return; }
      } catch {}
    }
    await say(esc(fill(T.done, { name: a.name.split(" ")[0] })));
    const wa = typeof CONFIG !== "undefined" && CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${text}`)}` : "";
    const mail = `mailto:${typeof CONFIG !== "undefined" ? CONFIG.email : ""}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    dock.innerHTML = `<div class="chat-chips chat-final">${wa ? `<a class="btn" href="${wa}" target="_blank" rel="noopener">${esc(T.sendWa)}</a>` : ""}<a class="btn ${wa ? "btn--ghost" : ""}" href="${mail}">${esc(T.sendEmail)}</a></div>`;
  }

  restart.addEventListener("click", () => { dock.innerHTML = ""; run(); });
  // Start when the chat scrolls into view, so the conversation is fresh when someone gets there.
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); run(); } }, { threshold: .35 }).observe(root);
})();
