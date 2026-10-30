// Opening a project: its screenshot and name grow into the story page's own, and shrink back on the
// way home (cross-document view transitions; site.css has the timing). build.mjs inlines this file in
// <head>, because "pagereveal" has to be heard before the new page first paints.
// Names go only on the project involved, and only for the duration of the transition, since a name
// must be unique on the page and every card has the same parts.
(() => {
  if (!("onpagereveal" in window)) return;
  const slug = url => { try { return new URL(url, location.href).pathname.match(/\/work\/([^/]+)\/?$/)?.[1]; } catch { return; } };
  let picked; // the last link clicked, so a project linked twice morphs from the one actually used
  addEventListener("click", e => { picked = e.target.closest?.("a[href]"); }, true);

  // This page's screenshot and title for project `s`: the story's own head, or the card that opens it.
  // Arriving home, nothing was clicked here yet, so it is the project's card in "Our work" (on Back the
  // scroll is restored after this runs, so where things sit on screen can't decide it).
  const parts = s => {
    const head = document.querySelector(".case-head");
    if (head && slug(location.href) === s) return { shot: head.querySelector(".duo .browser"), name: head.querySelector("h1") };
    const boxes = [...document.querySelectorAll(".proj, .browser--link, .next")].filter(b => [...b.querySelectorAll("a[href]")].some(a => slug(a.href) === s));
    const box = boxes.find(b => b.contains(picked)) || boxes.find(b => b.matches(".proj")) || boxes[0];
    if (!box) return {};
    return { shot: box.matches(".browser--link") ? box : box.querySelector(".browser"), name: box.matches(".browser--link") ? null : box.querySelector("h2, h3") };
  };

  let named = [];
  const clear = () => { named.forEach(el => el.style.removeProperty("view-transition-name")); named = []; };
  const mark = (from, to) => {
    clear();
    const s = slug(to) || slug(from);
    if (!s) return;
    const p = parts(s);
    for (const k of ["shot", "name"]) if (p[k]) { p[k].style.viewTransitionName = `project-${k}`; named.push(p[k]); }
  };

  addEventListener("pageswap", e => { if (e.viewTransition && e.activation) mark(location.href, e.activation.entry.url); });
  addEventListener("pagereveal", e => {
    if (!e.viewTransition) return;
    mark(navigation.activation?.from?.url, location.href);
    // Leaving again before this ends finishes it early: keep the names the way out has set by then.
    const mine = named;
    e.viewTransition.finished.finally(() => { if (named === mine) clear(); });
  });
})();
