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
      <button type="button" class="chat-restart" hidden>${esc(T.restart)}</button>
      <button type="button" class="chat-close" aria-label="${esc(T.close)}" hidden><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></div>
    <div class="chat-log" role="log" aria-live="polite"></div>
    <div class="chat-input"></div>
    <input class="chat-keep" tabindex="-1" aria-hidden="true" autocomplete="off">`;
  const log = root.querySelector(".chat-log"), dock = root.querySelector(".chat-input"), restart = root.querySelector(".chat-restart"), close = root.querySelector(".chat-close"), keep = root.querySelector(".chat-keep");
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
  const ask = ({ type = "text", ph = "", check, optional, inputmode, autocomplete, multiline, domains }) => new Promise(done => {
    dock.innerHTML = `<form class="chat-form" novalidate>
      ${multiline ? `<textarea rows="2" maxlength="600" placeholder="${esc(ph)}"></textarea>` : `<input type="${type}" placeholder="${esc(ph)}" maxlength="120"${inputmode ? ` inputmode="${inputmode}"` : ""}${autocomplete ? ` autocomplete="${autocomplete}"` : ""}>`}
      ${optional ? `<button type="button" class="chip chat-skip">${esc(T.skip)}</button>` : ""}
      <button type="submit" class="chat-send" aria-label="${esc(T.send)}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13V3M4 7l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <p class="chat-err" role="alert"></p>${domains ? `<div class="chat-suggest"></div>` : ""}</form>`;
    const form = dock.querySelector("form"), field = form.querySelector("input, textarea"), err = form.querySelector(".chat-err");
    if (matchMedia("(hover: hover)").matches || root.contains(document.activeElement)) field.focus({ preventScroll: true });
    if (multiline) field.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
    const finish = value => { holdKeyboard(); dock.innerHTML = ""; if (value) bubble(esc(value), "me"); done(value); };
    // Email shortcuts: once something is typed, offer the common providers; a tap completes the address.
    const hint = form.querySelector(".chat-suggest");
    if (hint) {
      const paint = () => {
        const v = field.value.trim(), [local, dom = ""] = v.split("@");
        const list = !local || /\s/.test(v) || v.split("@").length > 2 ? [] : domains.filter(d => d.startsWith(dom.toLowerCase()) && d !== dom.toLowerCase());
        hint.innerHTML = list.map(d => `<button type="button" class="chip" data-d="${d}">@${d}</button>`).join("");
      };
      field.addEventListener("input", paint);
      hint.addEventListener("click", e => {
        const b = e.target.closest("button");
        if (!b) return;
        field.value = `${field.value.trim().split("@")[0]}@${b.dataset.d}`;
        hint.innerHTML = "";
        err.textContent = "";
        field.focus();
      });
    }
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
    dropKeyboard();
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
      <b class="est-price">${money(price(t))}</b>
      <span class="est-was"><s>${money(q.regular)}</s><span class="est-off">${esc(fill(T.off, { p: q.off }))}${t === "new" ? ` · ${esc(T.launch)}` : ""}</span></span>
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
    a.email = await ask({ type: "email", inputmode: "email", autocomplete: "email", ph: T.emailPh, domains: T.emailDomains, check: v => !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) && T.bad.email });
    await say(esc(T.askPhone));
    a.phone = await ask({ type: "tel", inputmode: "tel", autocomplete: "tel", ph: T.phonePh, optional: true, check: v => !/^\+?[\d\s().-]{8,20}$/.test(v) && T.bad.phone });
    await say(esc(T.askMore));
    a.notes = await ask({ multiline: true, ph: T.morePh, optional: true });
    await finish();
  }

  // One "Send" button: the summary goes to CONFIG.formEndpoint (/api/lead, which emails it to Jean).
  // Only if that fails does the chat offer WhatsApp or email instead.
  async function finish() {
    const first = a.name.split(" ")[0], text = summary(), subject = fill(T.subject, { name: a.name });
    const cfg = typeof CONFIG !== "undefined" ? CONFIG : {};
    await say(esc(fill(T.ready, { name: first })));
    dropKeyboard();
    dock.innerHTML = `<div class="chat-chips chat-final"><button type="button" class="btn">${esc(T.send)}</button></div>`;
    const btn = dock.querySelector("button");
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      btn.textContent = T.sending;
      let ok = false;
      if (cfg.formEndpoint) {
        try {
          const L = T.labels, t = tierOf();
          const res = await fetch(cfg.formEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            // Empty answers are left out, so the email only shows what the visitor actually said.
            body: JSON.stringify({
              subject, replyTo: a.email,
              fields: [
                [L.name, a.name], [L.email, a.email], [L.phone, a.phone || ""],
                [L.site, a.site === "no" ? L.none : a.link || T.yes],
                [L.tools, a.site === "yes" ? { yes: T.yes, no: T.no, unsure: T.notSure }[a.tools] : ""],
                [L.estimate, `${T.tiers[t]}: ${money(price(t))} (${fill(T.off, { p: Q[t].off })})`],
                [L.notes, a.notes || ""],
              ].filter(([, v]) => v),
            }),
          });
          ok = res.ok && (await res.json().catch(() => ({}))).success === true;
        } catch {}
      }
      dock.innerHTML = "";
      // Either way the last word is one WhatsApp button with the summary ready: on success it is the fast
      // lane for whoever is in a hurry; if sending failed it is how the message still reaches Jean.
      const wa = cfg.whatsapp ? `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${text}`)}` : "";
      const fallback = `mailto:${cfg.email || ""}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      if (ok) {
        bubble(esc(T.send), "me");
        await say(esc(fill(T.sent, { name: first })));
        if (!wa) return;
        await say(esc(T.hurry));
      } else {
        await say(esc(wa ? T.failed : T.failedMail));
      }
      dock.innerHTML = `<div class="chat-chips chat-final"><a class="btn" href="${wa || fallback}"${wa ? ` target="_blank" rel="noopener"` : ""}>${esc(wa ? T.sendWa : T.sendEmail)}</a></div>`;
    });
  }

  // Phones: the first tap on the chat's field turns it into a full-screen conversation that tracks the strip
  // of screen above the keyboard (the visual viewport), so only the chat shows until the visitor closes it.
  const vv = window.visualViewport, phone = matchMedia("(pointer: coarse) and (max-width: 560px)");
  let full = false, spacer = null, settle = 0;
  const fit = () => {
    const top = `${Math.round(vv ? vv.offsetTop : 0)}px`, height = `${Math.round(vv ? vv.height : innerHeight)}px`;
    if (root.style.top !== top) root.style.top = top;
    if (root.style.height !== height) root.style.height = height;
    log.scrollTop = log.scrollHeight;
  };
  // While the keyboard slides, iOS fires a burst of viewport events and pans the page itself; following each
  // one makes the chat jump. It waits for the viewport to stop moving, then fits once.
  const place = () => {
    if (!full) return;
    clearTimeout(settle);
    settle = setTimeout(() => requestAnimationFrame(() => full && fit()), 120);
  };
  // iOS only opens the keyboard from a tap, so a field that appears after the bot's reply could not raise it.
  // Between text questions an invisible field holds the focus, and the keyboard stays up for the next one.
  function holdKeyboard() {
    if (full && document.activeElement?.matches("input, textarea") && root.contains(document.activeElement)) keep.focus({ preventScroll: true });
  }
  function dropKeyboard() { if (document.activeElement === keep) keep.blur(); }
  const enter = () => {
    if (full || !phone.matches) return;
    full = true;
    // A spacer holds the chat's place in the page, so nothing underneath shifts while it is lifted out.
    spacer = Object.assign(document.createElement("div"), { style: `height:${root.offsetHeight}px` });
    root.before(spacer);
    root.classList.add("is-full");
    document.documentElement.classList.add("chat-open");
    close.hidden = false;
    fit();
  };
  const leave = () => {
    full = false;
    clearTimeout(settle);
    spacer?.remove();
    root.classList.remove("is-full");
    document.documentElement.classList.remove("chat-open");
    root.style.removeProperty("top");
    root.style.removeProperty("height");
    close.hidden = true;
    document.activeElement?.blur();
    root.scrollIntoView({ block: "center", behavior: "instant" });
  };
  root.addEventListener("focusin", e => { if (e.target.matches("input, textarea") && e.target !== keep) enter(); });
  vv?.addEventListener("resize", place);
  vv?.addEventListener("scroll", place);
  close.addEventListener("click", leave);

  restart.addEventListener("click", () => { dock.innerHTML = ""; run(); });
  // Start when the chat scrolls into view, so the conversation is fresh when someone gets there.
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); run(); } }, { threshold: .35 }).observe(root);
})();
