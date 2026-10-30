// Pointer, iPadOS style. One shape follows the mouse and changes with what is under it: a dot; a soft disc
// over links; a ring (or highlight) that takes the shape of the button, which leans toward the pointer; a
// "View project" disc in the client's own color over their work ([data-cursor] set in build.mjs). Text
// fields hand back the system cursor. Mouse and trackpad only: touch never sees any of this.
(() => {
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pt = document.documentElement.lang.startsWith("pt");
  const words = { view: pt ? "Ver projeto" : "View project", next: pt ? "Próximo" : "Next", drag: pt ? "Arrastar" : "Drag" };
  const arrow = `<svg aria-hidden="true"><use href="#arrow"/></svg>`;
  const TEXT = 'input:not([type="checkbox"], [type="radio"], [type="range"], [type="button"], [type="submit"]), textarea, select, [contenteditable]';
  const RING = ".btn, .chip, .theme, .lang, .chat-send, .chat-restart"; // shapes of their own: outline them
  const FILL = ".brand, .nav ul a"; // bare text: lay a highlight under it
  const LINK = "a[href], button, [role=button], label, summary";
  const SIZE = { dot: 10, link: 36, view: 96, next: 96, drag: 64 };

  const root = document.documentElement;
  const el = document.createElement("div");
  el.className = "cursor";
  el.setAttribute("aria-hidden", "true");
  const label = document.createElement("span");
  label.className = "cursor-label";
  el.append(label);
  document.body.append(el);
  root.classList.add("has-cursor");

  const p = { x: 0, y: 0 };
  const s = { x: 0, y: 0, w: 10, h: 10, r: 5, k: 1, press: 1 };
  let mode = "dot", target = null, node = null, radius = 0, pressed = false, shown = false, placed = false, raf = 0, last = 0;
  const pulls = new Map(); // buttons leaning toward the pointer: element -> { x, y }

  const resolve = at => {
    node = at;
    let m = "dot", t = null;
    if (!(at instanceof Element)) at = null;
    else if (at.closest(TEXT)) m = "native";
    else if ((t = at.closest(RING))) m = "ring";
    else if ((t = at.closest(FILL))) m = "fill";
    else if ((t = at.closest("[data-cursor]"))) m = t.dataset.cursor;
    else if (at.closest(LINK)) m = "link";
    if (m === "drag" && still) { m = "dot"; t = null; } // the footer rubber is off with reduced motion
    if (at) el.style.colorScheme = getComputedStyle(at).colorScheme;
    if (t !== target) {
      target = t;
      if (t && m === "ring") radius = parseFloat(getComputedStyle(t).borderTopLeftRadius) || 0;
      if (t && (m === "view" || m === "next")) {
        el.style.setProperty("--cur", t.dataset.cursorColor || "");
        el.style.setProperty("--cur-ink", t.dataset.cursorInk || "");
      }
    }
    if (m !== mode) {
      mode = m;
      el.dataset.mode = m;
      label.innerHTML = words[m] ? words[m] + (m === "drag" ? "" : arrow) : "";
    }
    wake();
  };

  const tick = now => {
    const dt = Math.min(64, now - (last || now));
    last = now;
    const f = k => (still ? 1 : 1 - Math.pow(1 - k, dt / 16.7));
    let tx = p.x, ty = p.y, tw, th, tr;
    const snapped = target && (mode === "ring" || mode === "fill");
    if (snapped) {
      const b = target.getBoundingClientRect(), pull = pulls.get(target) || { x: 0, y: 0 };
      const cx = b.left + b.width / 2 - pull.x, cy = b.top + b.height / 2 - pull.y;
      if (!still) {
        pull.tx = Math.max(-6, Math.min(6, (p.x - cx) * .15));
        pull.ty = Math.max(-4, Math.min(4, (p.y - cy) * .15));
        pulls.set(target, pull);
      }
      const px = mode === "fill" ? 10 : 5, py = mode === "fill" ? 6 : 5;
      tw = b.width + px * 2; th = b.height + py * 2;
      tr = mode === "fill" ? th / 2 : Math.min(radius + px, th / 2);
      tx = cx + pull.x + (p.x - cx) * .06; ty = cy + pull.y + (p.y - cy) * .06;
      s.k = .22;
    } else {
      tw = th = SIZE[mode] || SIZE.dot; tr = tw / 2;
      s.k = Math.min(1, s.k + dt / 160); // glides off a button, then sticks to the pointer exactly
    }
    let energy = 0;
    const ease = (key, to, k) => { const d = to - s[key]; s[key] += d * f(k); energy += Math.abs(d); };
    ease("x", tx, s.k); ease("y", ty, s.k);
    ease("w", tw, .24); ease("h", th, .24); ease("r", tr, .24);
    ease("press", pressed ? .86 : 1, .3);
    pulls.forEach((q, b) => {
      const tx = b === target && snapped ? q.tx : 0, ty = b === target && snapped ? q.ty : 0;
      q.x += (tx - q.x) * f(.2); q.y += (ty - q.y) * f(.2);
      energy += Math.abs(tx - q.x) + Math.abs(ty - q.y);
      if (b !== target && Math.abs(q.x) + Math.abs(q.y) < .05) { b.style.translate = ""; pulls.delete(b); }
      else b.style.translate = `${q.x.toFixed(2)}px ${q.y.toFixed(2)}px`;
    });
    el.style.width = `${s.w}px`;
    el.style.height = `${s.h}px`;
    el.style.borderRadius = `${s.r}px`;
    el.style.transform = `translate3d(${s.x - s.w / 2}px, ${s.y - s.h / 2}px, 0) scale(${s.press})`;
    raf = energy > .05 ? requestAnimationFrame(tick) : 0;
    if (!raf) last = 0;
  };
  const wake = () => { if (!raf) raf = requestAnimationFrame(tick); };

  const hide = () => { shown = false; el.classList.remove("is-on"); };
  addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") { hide(); root.classList.remove("has-cursor"); return; }
    p.x = e.clientX; p.y = e.clientY;
    if (!shown) {
      shown = true;
      root.classList.add("has-cursor");
      el.classList.add("is-on");
      if (!placed) { placed = true; s.x = p.x; s.y = p.y; }
    }
    if (e.target !== node) resolve(e.target);
    wake();
  }, { passive: true });
  addEventListener("pointerdown", e => { if (e.pointerType === "mouse") { pressed = true; wake(); } }, { passive: true });
  addEventListener("pointerup", () => { pressed = false; wake(); }, { passive: true });
  addEventListener("pointercancel", () => { pressed = false; wake(); }, { passive: true });
  document.addEventListener("mouseout", e => { if (!e.relatedTarget) hide(); });
  // Scrolling moves the page under a still pointer: find what is under it now.
  addEventListener("scroll", () => {
    if (!shown) return;
    const at = document.elementFromPoint(p.x, p.y);
    if (at !== node) resolve(at); else wake();
  }, { passive: true, capture: true });
})();
