// The home hero's live Prospector demo: a MapLibre globe with sample businesses, a search circle and a
// results panel that behave like the real app. Nothing leaves the page; every business is generated here.
// The static screenshot under it stays visible until the map is ready, and remains if WebGL is missing.
(() => {
  const root = document.querySelector("[data-demo]");
  if (!root) return;
  const PT = document.documentElement.lang.startsWith("pt");
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MAPLIBRE = "https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl";
  const STYLE = "https://tiles.openfreemap.org/styles/positron";

  const T = PT ? {
    where: "Cidade (ex.: Austin, Miami, São Paulo)", go: "Ir", tabs: ["Mapa", "CRM", "IA"],
    looking: "O que você procura?", term: "dentista", distance: "Distância do centro", search: "Buscar",
    searching: n => `Buscando… ${n} empresas`, done: km => `Pronto · busca até ${km} km`, found: n => `${n} empresas`,
    filters: ["Todas", "Com email", "Sem site"], selected: (n, s) => `${n} de ${n} · ${s} selecionadas`,
    analyze: n => `Analisar e salvar no CRM (${n})`, saved: n => `${n} leads salvos no CRM`, inCrm: "já está no CRM",
    noSite: "sem site", tapHint: "Toque no mapa para mover o centro do círculo.", unknown: "Tente Austin, Miami, Nova York ou São Paulo.",
    empty: "Nenhuma empresa com esse filtro.",
  } : {
    where: "City (e.g. Austin, Miami, New York)", go: "Go", tabs: ["Map", "CRM", "AI"],
    looking: "What are you looking for?", term: "dentist", distance: "Distance from the center", search: "Search",
    searching: n => `Searching… ${n} businesses`, done: km => `Done · search up to ${km} km`, found: n => `${n} businesses`,
    filters: ["All", "With email", "No website"], selected: (n, s) => `${n} of ${n} · ${s} selected`,
    analyze: n => `Analyze and save to CRM (${n})`, saved: n => `${n} leads saved to CRM`, inCrm: "already in CRM",
    noSite: "no website", tapHint: "Tap the map to move the circle's center.", unknown: "Try Austin, Miami, New York or São Paulo.",
    empty: "No businesses with this filter.",
  };

  const CITIES = [
    ["austin", -97.7431, 30.2672], ["miami", -80.1918, 25.7617], ["new york", -73.9857, 40.7484], ["nova york", -73.9857, 40.7484],
    ["chicago", -87.6298, 41.8781], ["los angeles", -118.2437, 34.0522], ["denver", -104.9903, 39.7392], ["seattle", -122.3321, 47.6062],
    ["boston", -71.0589, 42.3601], ["atlanta", -84.388, 33.749], ["phoenix", -112.074, 33.4484], ["dallas", -96.797, 32.7767],
    ["houston", -95.3698, 29.7604], ["san diego", -117.1611, 32.7157], ["orlando", -81.3792, 28.5383], ["tampa", -82.4572, 27.9506],
    ["são paulo", -46.6333, -23.5505], ["sao paulo", -46.6333, -23.5505], ["rio de janeiro", -43.1729, -22.9068], ["porto alegre", -51.2177, -30.0346],
    ["lisboa", -9.1393, 38.7223], ["lisbon", -9.1393, 38.7223], ["london", -0.1276, 51.5072], ["londres", -0.1276, 51.5072], ["toronto", -79.3832, 43.6532],
  ];
  const KINDS = [
    { en: "Dentist", pt: "Dentista", words: ["dent", "odont", "orto"], names: ["Dental", "Smiles", "Family Dentistry", "Dental Studio", "Dental Care"] },
    { en: "Med spa", pt: "Clínica de estética", words: ["spa", "estét", "estet", "aesth", "skin", "pele"], names: ["Med Spa", "Skin Studio", "Aesthetics", "Skin & Laser"] },
    { en: "Chiropractor", pt: "Quiropraxia", words: ["chiro", "quiro"], names: ["Chiropractic", "Spine & Wellness"] },
    { en: "Roofing", pt: "Telhados", words: ["roof", "telh"], names: ["Roofing", "Roof & Gutter"] },
    { en: "Plumber", pt: "Encanador", words: ["plumb", "encan"], names: ["Plumbing", "Plumbing & Drain"] },
    { en: "Restaurant", pt: "Restaurante", words: ["rest", "food", "comida", "pizza", "taco", "café", "cafe"], names: ["Kitchen", "Taqueria", "Bistro", "Pizzeria"] },
  ];
  const PLACES = ["Maple Grove", "Riverside", "Cedar Park", "Hyde Park", "Oak Hill", "Lakeside", "Northgate", "Willow Creek", "Sunset", "Harbor",
    "Pine Street", "Bluebird", "Westview", "Brookside", "Summit", "Granite", "Juniper", "Meadow", "Copper Leaf", "Silver Lake", "Main Street",
    "Parkside", "Highland", "Bayview", "Fox Run", "Stonebridge", "Golden Hour", "Redwood", "Clearwater", "Elm & Oak"];
  const KM = [2, 5, 10, 25];
  const ZOOM = { 2: 12.6, 5: 11.3, 10: 10.3, 25: 9 };

  // Same spot, same businesses: the generator is seeded by the circle's center.
  const rng = seed => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const slug = s => s.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "");
  const kindFor = term => KINDS.find(k => k.words.some(w => term.toLowerCase().includes(w))) || null;
  function generate(center, km, term, mult = 1) {
    const r = rng(Math.abs(Math.round(center[0] * 1000) * 7919 + Math.round(center[1] * 1000) * 104729 + km) % 2147483646 + 1);
    const only = kindFor(term);
    const n = { 2: 6, 5: 9, 10: 12, 25: 16 }[km] * mult;
    const used = new Set(), out = [];
    while (out.length < n) {
      const kind = only || KINDS[Math.floor(r() * KINDS.length)];
      const name = `${PLACES[Math.floor(r() * PLACES.length)]} ${kind.names[Math.floor(r() * kind.names.length)]}`;
      if (used.has(name)) continue;
      used.add(name);
      const a = r() * Math.PI * 2, d = Math.sqrt(r()) * km * .92;
      const lat = center[1] + d / 111 * Math.sin(a), lng = center[0] + d / (111 * Math.cos(center[1] * Math.PI / 180)) * Math.cos(a);
      const site = r() > .15;
      out.push({ id: out.length, name, kind, lng, lat, rating: (3.8 + r() * 1.1).toFixed(1), reviews: 12 + Math.floor(r() * 230),
        site: site ? `${slug(name)}.example` : null, email: site && r() > .25, phone: `(555) 01${String(10 + Math.floor(r() * 89))}`, crm: false });
    }
    return out;
  }
  const circle = (c, km) => ({ type: "Feature", geometry: { type: "Polygon", coordinates: [Array.from({ length: 65 }, (_, i) => {
    const a = i / 64 * Math.PI * 2;
    return [c[0] + km / (111 * Math.cos(c[1] * Math.PI / 180)) * Math.cos(a), c[1] + km / 111 * Math.sin(a)];
  })] } });
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

  const state = { center: [-97.7431, 30.2672], km: 10, term: T.term, list: [], shown: [], filter: 0, picked: new Set(), running: false };
  state.list = generate(state.center, state.km, state.term).slice(0, 9);
  state.list.slice(0, 4).forEach(b => { b.crm = true; });
  state.shown = state.list;

  // ---------- markup ----------
  const live = document.createElement("div");
  live.className = "demo-live";
  live.innerHTML = `
    <div class="demo-map"></div>
    <form class="demo-where" novalidate><input aria-label="${esc(T.where)}" placeholder="${esc(T.where)}" autocomplete="off"><button type="submit">${T.go}</button></form>
    <aside class="demo-panel">
      <div class="dp-top"><b class="dp-brand"><svg viewBox="0 0 48 32" aria-hidden="true"><path d="M15 27H37a6.5 6.5 0 0 0 0-13a9.2 9.2 0 0 0-17.6 1.2A6.6 6.6 0 0 0 10 25" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>Prospector</b>
        <span class="dp-tabs" aria-hidden="true">${T.tabs.map((t, i) => `<i${i ? "" : ` class="on"`}>${t}</i>`).join("")}</span></div>
      <label class="dp-label" for="dp-term">${T.looking}</label>
      <input class="dp-input" id="dp-term" value="${esc(T.term)}" autocomplete="off">
      <p class="dp-label">${T.distance}</p>
      <div class="dp-seg" role="group" aria-label="${esc(T.distance)}">${KM.map(k => `<button type="button" data-km="${k}" aria-pressed="${k === state.km}">${k} km</button>`).join("")}</div>
      <button type="button" class="dp-search">${T.search}</button>
      <div class="dp-status"><span></span><em></em><i><b></b></i></div>
      <p class="dp-hint">${T.tapHint}</p>
      <div class="dp-list-head"><span class="dp-count"></span><span class="dp-chips">${T.filters.map((f, i) => `<button type="button" data-f="${i}" aria-pressed="${i === 0}">${f}</button>`).join("")}</span></div>
      <ul class="dp-list"></ul>
      <div class="dp-foot"><button type="button" class="dp-save"></button></div>
    </aside>
    <p class="demo-toast" role="status"></p>`;
  root.appendChild(live);
  const $ = s => live.querySelector(s);

  function paintList() {
    const f = state.filter;
    state.shown = state.list.filter(b => f === 0 || (f === 1 ? b.email : !b.site));
    const sel = state.list.filter(b => state.picked.has(b.id)).length;
    $(".dp-count").textContent = T.selected(state.shown.length, sel);
    $(".dp-list").innerHTML = state.shown.length ? state.shown.map(b => `<li data-id="${b.id}">
      <input type="checkbox" aria-label="${esc(b.name)}" ${state.picked.has(b.id) ? "checked" : ""}>
      <button type="button" class="dp-biz"><b>${esc(b.name)}</b><span>${PT ? b.kind.pt : b.kind.en} · ${b.rating}★ (${b.reviews})${b.site ? ` · <u>${b.site}</u>` : ` · ${T.noSite}`} · ${b.phone}</span>${b.crm ? `<em>${T.inCrm}</em>` : ""}</button></li>`).join("")
      : `<li class="dp-empty">${T.empty}</li>`;
    const toSave = state.list.filter(b => !b.crm && (state.picked.size ? state.picked.has(b.id) : b.email)).length;
    $(".dp-save").textContent = T.analyze(toSave);
    $(".dp-save").disabled = !toSave || state.running;
  }
  function paintStatus(n, doneNow) {
    $(".dp-status span").textContent = doneNow ? T.done(state.km) : T.searching(n);
    $(".dp-status em").textContent = T.found(n);
    $(".dp-status b").style.width = `${doneNow ? 100 : Math.round(n / Math.max(1, state.list.length) * 100)}%`;
  }
  paintList();
  paintStatus(state.list.length, true);

  let map, popup;
  const bizData = () => ({ type: "FeatureCollection", features: state.list.slice(0, state.revealed ?? state.list.length).map(b => ({
    type: "Feature", id: b.id, properties: { id: b.id, crm: b.crm }, geometry: { type: "Point", coordinates: [b.lng, b.lat] } })) });
  const paintMap = () => {
    if (!map?.getSource("biz")) return;
    map.getSource("biz").setData(bizData());
    map.getSource("area").setData(circle(state.center, state.km));
    map.getSource("center").setData({ type: "Feature", geometry: { type: "Point", coordinates: state.center } });
  };

  function toast(msg) {
    const el = $(".demo-toast");
    el.textContent = msg;
    el.classList.add("on");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove("on"), 2600);
  }
  function openBiz(id, fly) {
    const b = state.list.find(x => x.id === id);
    if (!b || !map) return;
    if (fly) map.flyTo({ center: [b.lng, b.lat], zoom: Math.max(map.getZoom(), 12.5), duration: REDUCED ? 0 : 1200, essential: false });
    popup?.remove();
    popup = new maplibregl.Popup({ closeButton: false, offset: 10, className: "demo-pop", maxWidth: "240px" })
      .setLngLat([b.lng, b.lat])
      .setHTML(`<b>${esc(b.name)}</b><span>${PT ? b.kind.pt : b.kind.en} · ${b.rating}★ (${b.reviews})</span><span>${b.site ? esc(b.site) : T.noSite} · ${b.phone}</span>${b.crm ? `<em>${T.inCrm}</em>` : ""}`)
      .addTo(map);
    live.querySelectorAll(".dp-list li").forEach(li => li.classList.toggle("on", +li.dataset.id === id));
  }

  // The search: fly to the circle, then the businesses drop in one by one while the circle pulses.
  function search() {
    if (state.running) return;
    state.running = true;
    stopSpin();
    popup?.remove();
    state.term = $("#dp-term").value.trim() || T.term;
    // Three times the candidates; once the map has settled, the ones that fall on water are dropped.
    const want = { 2: 6, 5: 9, 10: 12, 25: 16 }[state.km];
    const cands = generate(state.center, state.km, state.term, 3);
    state.list = [];
    state.picked.clear();
    state.filter = 0;
    live.querySelectorAll(".dp-chips button").forEach(b => b.setAttribute("aria-pressed", b.dataset.f === "0"));
    state.revealed = 0;
    paintMap();
    paintStatus(0, false);
    $(".dp-list").innerHTML = "";
    $(".dp-save").disabled = true;
    $(".dp-count").textContent = "";
    let pulse = 0;
    const beat = setInterval(() => { pulse++; map.setPaintProperty("area-fill", "fill-opacity", pulse % 2 ? .14 : .05); }, 280);
    const step = () => {
      state.revealed++;
      paintMap();
      paintStatus(state.revealed, false);
      if (state.revealed < state.list.length) return setTimeout(step, REDUCED ? 0 : 140);
      clearInterval(beat);
      map.setPaintProperty("area-fill", "fill-opacity", .06);
      state.revealed = null;
      state.running = false;
      paintStatus(state.list.length, true);
      paintList();
    };
    const wet = b => map.queryRenderedFeatures(map.project([b.lng, b.lat])).some(f => /water|ocean|river|lake/i.test(`${f.layer.id} ${f.sourceLayer || ""}`));
    let begun = false;
    const begin = () => {
      if (begun) return;
      begun = true;
      const dry = cands.filter(b => !wet(b));
      state.list = (dry.length >= want / 2 ? dry : cands).slice(0, want).map((b, i) => ({ ...b, id: i }));
      step();
    };
    map.once("moveend", () => map.once("idle", begin));
    map.flyTo({ center: state.center, zoom: ZOOM[state.km], duration: REDUCED ? 0 : 1600, essential: false });
    setTimeout(begin, 4500);
  }

  // ---------- wiring ----------
  $(".demo-where").addEventListener("submit", e => {
    e.preventDefault();
    const q = $(".demo-where input").value.trim().toLowerCase().normalize("NFC");
    const hit = q && CITIES.find(([n]) => n.startsWith(q) || q.startsWith(n));
    if (!hit) { toast(T.unknown); return; }
    state.center = [hit[1], hit[2]];
    if (map) search();
  });
  live.querySelectorAll(".dp-seg button").forEach(b => b.addEventListener("click", () => {
    state.km = +b.dataset.km;
    live.querySelectorAll(".dp-seg button").forEach(x => x.setAttribute("aria-pressed", x === b));
    paintMap();
  }));
  $(".dp-search").addEventListener("click", () => map && search());
  $("#dp-term").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); map && search(); } });
  $(".dp-chips").addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    state.filter = +b.dataset.f;
    live.querySelectorAll(".dp-chips button").forEach(x => x.setAttribute("aria-pressed", x === b));
    paintList();
  });
  $(".dp-list").addEventListener("click", e => {
    const li = e.target.closest("li[data-id]");
    if (!li) return;
    const id = +li.dataset.id;
    if (e.target.matches("input")) { e.target.checked ? state.picked.add(id) : state.picked.delete(id); paintList(); return; }
    openBiz(id, true);
  });
  $(".dp-save").addEventListener("click", () => {
    const save = state.list.filter(b => !b.crm && (state.picked.size ? state.picked.has(b.id) : b.email));
    save.forEach(b => { b.crm = true; });
    state.picked.clear();
    paintList();
    paintMap();
    toast(T.saved(save.length));
  });

  // ---------- the map ----------
  let spinning = !REDUCED, raf = 0;
  const stopSpin = () => { spinning = false; cancelAnimationFrame(raf); };
  const spin = () => {
    if (!spinning || !map) return;
    if (map.getZoom() < 3.5) { const c = map.getCenter(); map.jumpTo({ center: [c.lng - .08, c.lat] }); }
    raf = requestAnimationFrame(spin);
  };

  const load = (tag, attrs) => new Promise((ok, fail) => { const el = document.createElement(tag); Object.assign(el, attrs, { onload: ok, onerror: fail }); document.head.appendChild(el); });
  async function start() {
    const gl = document.createElement("canvas").getContext("webgl2") || document.createElement("canvas").getContext("webgl");
    if (!gl) return;
    try {
      await Promise.all([load("link", { rel: "stylesheet", href: `${MAPLIBRE}.css` }), load("script", { src: `${MAPLIBRE}.js` })]);
    } catch { return; }
    map = new maplibregl.Map({
      // The globe keeps the same size relative to the frame, however wide the frame is.
      container: $(".demo-map"), style: STYLE, center: [-68, 14], zoom: Math.max(0, 1.9 + Math.log2(Math.min($(".demo-map").clientWidth, $(".demo-map").clientHeight) / 600)), maxZoom: 17,
      cooperativeGestures: true, attributionControl: { compact: true }, pitchWithRotate: false, dragRotate: false,
    });
    map.touchZoomRotate.disableRotation();
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    map.on("style.load", () => {
      map.setProjection({ type: "globe" });
      map.setSky({ "sky-color": "#f5f5f7", "horizon-color": "#ffffff", "fog-color": "#ffffff", "atmosphere-blend": ["interpolate", ["linear"], ["zoom"], 0, 1, 5, 1, 7, 0] });
    });
    map.on("load", () => {
      map.addSource("area", { type: "geojson", data: circle(state.center, state.km) });
      map.addSource("center", { type: "geojson", data: { type: "Feature", geometry: { type: "Point", coordinates: state.center } } });
      map.addSource("biz", { type: "geojson", data: bizData() });
      map.addLayer({ id: "area-fill", type: "fill", source: "area", paint: { "fill-color": "#1d1d1f", "fill-opacity": .06 } });
      map.addLayer({ id: "area-line", type: "line", source: "area", paint: { "line-color": "#1d1d1f", "line-width": 1.4, "line-dasharray": [3, 3] } });
      map.addLayer({ id: "center", type: "circle", source: "center", paint: { "circle-radius": 4, "circle-color": "#1d1d1f", "circle-stroke-color": "#fff", "circle-stroke-width": 2 } });
      map.addLayer({ id: "biz", type: "circle", source: "biz", paint: {
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 2, 3, 8, 5, 13, 8],
        "circle-color": ["case", ["get", "crm"], "#a1a1a6", "#1d1d1f"],
        "circle-stroke-color": "#fff", "circle-stroke-width": 1.6 } });
      map.on("mouseenter", "biz", () => { map.getCanvas().style.cursor = "pointer"; });
      map.on("mouseleave", "biz", () => { map.getCanvas().style.cursor = ""; });
      map.on("click", e => {
        stopSpin();
        const hit = map.queryRenderedFeatures(e.point, { layers: ["biz"] })[0];
        if (hit) { openBiz(hit.properties.id, false); return; }
        if (state.running) return;
        state.center = [e.lngLat.lng, e.lngLat.lat];
        paintMap();
        if (map.getZoom() < 6) map.flyTo({ center: state.center, zoom: ZOOM[state.km], duration: REDUCED ? 0 : 1800, essential: false });
      });
      ["dragstart", "zoomstart"].forEach(ev => map.on(ev, e => { if (e.originalEvent) stopSpin(); }));
      // Credits fold into the "i" button, as in the real app.
      live.querySelector(".maplibregl-ctrl-attrib")?.classList.remove("maplibregl-compact-show");
      live.querySelector(".maplibregl-ctrl-attrib")?.removeAttribute("open");
      root.classList.add("ready");
      spin();
    });
  }
  // Load after the page has settled, so the map never slows the first paint.
  const go = () => ("requestIdleCallback" in window ? requestIdleCallback(start, { timeout: 1500 }) : setTimeout(start, 300));
  document.readyState === "complete" ? go() : addEventListener("load", go, { once: true });
})();
