// The live Prospector demo that the home hero's video is filmed from: a MapLibre map with sample businesses,
// a search circle and a results panel that behave like the real app. Pages don't load it any more: they
// play the video (assets/demo/). src/record-demo.mjs loads this into the home page and films one lap,
// which starts and ends on the same view of the whole country so the video loops without a seam.
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
    analyze: n => `Analisar e salvar no CRM (${n})`, saved: n => `A IA salvou ${n} leads no CRM`, inCrm: "já está no CRM",
    noSite: "sem site", tapHint: "O piloto de IA escolhe a cidade e o tipo de negócio, e busca sozinho.",
    pilot: "Piloto de IA", scanning: "Procurando a próxima cidade…", finding: (t, c) => `Buscando ${t} em ${c}`, saving: "Analisando e salvando os melhores leads…",
    empty: "Nenhuma empresa com esse filtro.",
  } : {
    where: "City (e.g. Austin, Miami, New York)", go: "Go", tabs: ["Map", "CRM", "AI"],
    looking: "What are you looking for?", term: "dentist", distance: "Distance from the center", search: "Search",
    searching: n => `Searching… ${n} businesses`, done: km => `Done · search up to ${km} km`, found: n => `${n} businesses`,
    filters: ["All", "With email", "No website"], selected: (n, s) => `${n} of ${n} · ${s} selected`,
    analyze: n => `Analyze and save to CRM (${n})`, saved: n => `The AI saved ${n} leads to the CRM`, inCrm: "already in CRM",
    noSite: "no website", tapHint: "The AI pilot picks a city and a kind of business, then searches on its own.",
    pilot: "AI pilot", scanning: "Looking for the next city…", finding: (t, c) => `Finding ${t} in ${c}`, saving: "Analyzing and saving the best leads…",
    empty: "No businesses with this filter.",
  };

  // Country names shown on the globe (ISO codes).
  const COUNTRIES = ["US", "CA", "MX", "BR", "AR", "GB", "PT", "ES", "FR", "DE", "IT"];
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
      <div class="dp-top"><b class="dp-brand"><svg viewBox="0 0 48 32" aria-hidden="true"><path d="M19.4 26H35A7 7 0 1 0 31.37 13.02A8.5 8.5 0 0 0 14.53 15.22A5.5 5.5 0 0 0 8.55 23.73" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14.2" cy="26" r="2.2" fill="currentColor"/></svg>Prospector</b>
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
    <p class="demo-ai"><i></i><b></b><span></span></p>
    <p class="demo-toast"></p>`;
  live.inert = true;
  live.setAttribute("aria-hidden", "true");
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
  function search(flight = 1600) {
    if (state.running) return Promise.resolve();
    let finish;
    const finished = new Promise(r => { finish = r; });
    state.running = true;
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
      finish();
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
    map.flyTo({ center: state.center, zoom: ZOOM[state.km], duration: REDUCED ? 0 : flight, essential: false });
    // Fallback only: normally "idle" (every tile loaded) starts it, so the water check sees the whole map.
    setTimeout(begin, flight + 8000);
    return finished;
  }

  function save() {
    const picked = state.list.filter(b => !b.crm && b.email);
    picked.forEach(b => { b.crm = true; });
    paintList();
    paintMap();
    toast(T.saved(picked.length));
  }

  // ---------- the AI pilot ----------
  // Nobody drives this demo: it loops through a few cities on its own, the way the real pilot works through
  // a market. Three inland US cities keep the flights short (few map tiles, cached after the first lap)
  // and the businesses on dry land; between them the map pulls back to the whole country, not the globe.
  const TOUR = PT
    ? [["Austin", -97.7431, 30.2672, "dentistas", 10], ["Atlanta", -84.388, 33.749, "clínicas de estética", 5], ["Denver", -104.9903, 39.7392, "telhados", 10]]
    : [["Austin", -97.7431, 30.2672, "dentists", 10], ["Atlanta", -84.388, 33.749, "med spas", 5], ["Denver", -104.9903, 39.7392, "roofing", 10]];
  const USA = [[-125, 24], [-66, 50]];
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(root);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const awake = () => new Promise(r => { const t = () => (visible && !document.hidden ? r() : setTimeout(t, 400)); t(); });
  const say = (text, busy = true) => { $(".demo-ai span").textContent = text; $(".demo-ai").classList.toggle("busy", busy); };
  async function type(el, text) {
    el.classList.add("typing");
    el.value = "";
    for (const ch of text) { el.value += ch; await sleep(55 + Math.random() * 50); }
    el.classList.remove("typing");
  }
  const moved = () => new Promise(r => map.once("moveend", r));
  let lap = 0;
  async function pilot() {
    $(".demo-ai b").textContent = T.pilot;
    say(T.scanning);
    await sleep(1200); await awake();
    for (let i = 0; ; i = (i + 1) % TOUR.length) {
      const [city, lng, lat, term, km] = TOUR[i];
      await type($(".demo-where input"), city);
      await sleep(300);
      await type($("#dp-term"), term);
      state.km = km;
      live.querySelectorAll(".dp-seg button").forEach(x => x.setAttribute("aria-pressed", +x.dataset.km === km));
      $(".dp-search").classList.add("press");
      setTimeout(() => $(".dp-search").classList.remove("press"), 300);
      say(T.finding(term, city));
      state.center = [lng, lat];
      await search(3200);
      await sleep(900); await awake();
      // On a narrow frame a popup would cover most of the map: the pins alone tell the story there.
      const best = $(".demo-map").clientWidth > 480 ? state.list.find(b => !b.crm && b.email) || state.list[0] : null;
      if (best) openBiz(best.id, false);
      await sleep(1800);
      say(T.saving);
      $(".dp-save").classList.add("press");
      await sleep(350);
      $(".dp-save").classList.remove("press");
      save();
      if (best) openBiz(best.id, false);
      await sleep(2600); await awake();
      popup?.remove();
      say(T.scanning);
      map.flyTo({ ...map.cameraForBounds(USA, { padding: 24 }), duration: 2400, essential: false });
      await moved();
      // Back on the whole country after the last city: one lap done (the recorder films lap 1 to 2).
      if (i === TOUR.length - 1) root.dataset.lap = ++lap;
      await sleep(1200); await awake();
    }
  }

  // ---------- the map ----------
  const load = (tag, attrs) => new Promise((ok, fail) => { const el = document.createElement(tag); Object.assign(el, attrs, { onload: ok, onerror: fail }); document.head.appendChild(el); });
  async function start() {
    const gl = document.createElement("canvas").getContext("webgl2") || document.createElement("canvas").getContext("webgl");
    if (!gl) return;
    try {
      await Promise.all([load("link", { rel: "stylesheet", href: `${MAPLIBRE}.css` }), load("script", { src: `${MAPLIBRE}.js` })]);
    } catch { return; }
    map = new maplibregl.Map({
      // It opens on the whole country, where every lap starts and ends. The map credits stay written out:
      // in a video they can't hide behind a button.
      container: $(".demo-map"), style: STYLE, bounds: USA, fitBoundsOptions: { padding: 24 }, maxZoom: 17,
      interactive: false, attributionControl: { compact: false },
    });
    map.on("style.load", () => {
      map.setProjection({ type: "globe" });
      // Few words on the map: only the largest countries on the globe, and the main city and town names
      // once it dives in. Oceans, states, roads and the rest stay quiet.
      const keep = { label_country_1: [0, 4.5], label_city: [8, 24], label_city_capital: [8, 24], label_town: [10.5, 24] };
      for (const l of map.getStyle().layers) {
        if (l.type !== "symbol") continue;
        if (keep[l.id]) map.setLayerZoomRange(l.id, ...keep[l.id]);
        else map.setLayoutProperty(l.id, "visibility", "none");
      }
      // And of those countries, only the main ones in the Americas and Europe.
      map.setFilter("label_country_1", ["all", map.getFilter("label_country_1"), ["in", ["get", "iso_a2"], ["literal", COUNTRIES]]]);
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
      root.map = map; // for the recorder
      root.classList.add("ready");
      if (!REDUCED) pilot();
    });
  }
  // Load after the page has settled, so the map never slows the first paint.
  const go = () => ("requestIdleCallback" in window ? requestIdleCallback(start, { timeout: 1500 }) : setTimeout(start, 300));
  document.readyState === "complete" ? go() : addEventListener("load", go, { once: true });
})();
