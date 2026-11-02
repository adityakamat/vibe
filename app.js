(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel) => document.querySelector(sel);
  const fill = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
  // Render a list into `sel`, or hide its whole section when the list is empty.
  const list = (sel, items, render) => {
    const el = $(sel);
    if (!el) return;
    if (items?.length) el.innerHTML = items.map(render).join("");
    else el.hidden = true;
  };
  const hideSectionIfEmpty = (sel) => {
    const sec = $(sel)?.closest("section");
    if (sec && [...sec.querySelectorAll("[id]")].every((el) => el.hidden)) sec.hidden = true;
  };
  const link = (url, inner, cls = "") =>
    url ? `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="${cls}">${inner}</div>`;

  // Shared header and footer
  const nav = [["index.html", "Home", "home"], ["brands.html", "For Brands", "brands"], ["community.html", "Community", "community"]];
  fill("#header", `
    ${S.draft ? `<div class="draft">Sample content — edit <code>config.js</code> and set <code>draft: false</code></div>` : ""}
    <nav class="nav wrap">
      <a class="logo" href="index.html">${esc(S.handle)}<span>·</span></a>
      <div class="nav-links">
        ${nav.map(([href, label, id]) => `<a href="${href}" ${id === page ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        <button type="button" class="theme-toggle" id="theme-toggle"></button>
      </div>
    </nav>`);

  // Night mode: follows the system until the visitor picks a side; the choice is
  // saved and re-applied by the inline script in each page's <head> to avoid a flash.
  const root = document.documentElement;
  const isDark = () => root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const syncToggle = () => {
    const dark = isDark();
    const btn = $("#theme-toggle");
    btn.textContent = dark ? "☀︎" : "☾";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to night mode");
  };
  $("#theme-toggle").addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncToggle();
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncToggle);
  syncToggle();
  fill("#footer", `
    <div class="wrap footer-row">
      <span>© ${new Date().getFullYear()} ${esc(S.name)} · ${esc(S.tagline)}</span>
      <span><a href="${esc(S.instagram)}" target="_blank" rel="noopener">Instagram</a>${S.email ? ` · ${esc(S.email)}` : ""}</span>
    </div>`);
  document.title = `${({ home: "", brands: "For Brands · ", community: "Community · " })[page]}${S.handle} — ${S.tagline}`;

  document.querySelectorAll("[data-text]").forEach((el) => { el.textContent = S[el.dataset.text]; });
  document.querySelectorAll("[data-href]").forEach((el) => { el.href = S[el.dataset.href]; });
  fill("#eyebrow", [`@${esc(S.handle)}`, esc(S.location)].filter(Boolean).join(" · "));

  if (page === "brands") {
    list("#stats", S.stats, (s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`);
    fill("#stats-updated", S.stats.length
      ? (S.statsUpdated ? `Updated ${esc(S.statsUpdated)}` : "")
      : `Full stats and audience insights are shared on request.`);

    const bars = (title, rows) => rows.length ? `
      <div class="card">
        <h3>${title}</h3>
        ${rows.map((r) => `
          <div class="bar"><span>${esc(r.label)}</span><i><em style="width:${Number(r.pct) || 0}%"></em></i><b>${esc(r.pct)}%</b></div>`).join("")}
      </div>` : "";
    const audience = bars("Age", S.audience.age) + bars("Top locations", S.audience.locations) + bars("Gender", S.audience.split);
    list("#audience", audience ? [audience] : [], (html) => html);

    list("#pillars", S.pillars, (p, i) => `<div class="card pillar"><span class="num">0${i + 1}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`);

    list("#packages", S.packages, (p) => `
      <div class="card package ${p.featured ? "featured" : ""}">
        ${p.featured ? `<span class="tag">Most booked</span>` : ""}
        <h3>${esc(p.name)}</h3>
        <p class="price">${esc(p.price)}</p>
        <ul>${p.includes.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`);

    list("#collabs", S.collaborations, (c) =>
      link(c.url, `<h3>${esc(c.brand)}</h3><p>${esc(c.summary)}</p>`, "card collab"));

    list("#testimonials", S.testimonials, (t) => `<blockquote class="card"><p>“${esc(t.quote)}”</p><cite>— ${esc(t.by)}</cite></blockquote>`);

    ["#audience", "#pillars", "#packages", "#collabs"].forEach(hideSectionIfEmpty);

    // Static site: the form composes an email in the visitor's mail app.
    // Without an email address, brands are pointed to Instagram DMs instead.
    const form = $("#inquiry");
    if (!S.email) {
      form.hidden = true;
      $("#dm").hidden = false;
      $("#dm a").href = `https://ig.me/m/${encodeURIComponent(S.handle)}`;
      return;
    }
    fill("#inquiry-email", esc(S.email));
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      const body = `Name: ${d.name}\nBrand: ${d.brand}\nEmail: ${d.email}\nBudget: ${d.budget}\n\n${d.message}`;
      window.location.href = `mailto:${S.email}?subject=${encodeURIComponent(`Collab inquiry — ${d.brand}`)}&body=${encodeURIComponent(body)}`;
      $("#inquiry-note").hidden = false;
    });
  }

  if (page === "community") {
    list("#links", S.links, (l) => link(l.url, `<b>${esc(l.label)}</b><span>${esc(l.note)}</span>`, "pill-link"));

    list("#featured", S.featured, (f, i) =>
      link(f.url, `<div class="thumb t${i % 3}"></div><h3>${esc(f.title)}</h3><p>${esc(f.caption)}</p>`, "card post"));

    list("#faq", S.faq, (f) => `<details class="card"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`);
    ["#links", "#featured", "#faq"].forEach(hideSectionIfEmpty);

    if (!S.favorites.length) { $("#favorites").closest("section").hidden = true; return; }
    const cats = ["All", ...new Set(S.favorites.map((f) => f.category))];
    const renderFavs = (cat) => fill("#favorites", S.favorites
      .filter((f) => cat === "All" || f.category === cat)
      .map((f) => link(f.url, `<span class="tag">${esc(f.category)}</span><h3>${esc(f.name)}</h3><p>${esc(f.note)}</p>`, "card fav")).join(""));
    fill("#fav-filters", cats.map((c, i) => `<button type="button" data-cat="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join(""));
    $("#fav-filters").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      document.querySelectorAll("#fav-filters button").forEach((b) => b.setAttribute("aria-pressed", b === btn));
      renderFavs(btn.dataset.cat);
    });
    renderFavs("All");
  }
})();
