export default function homeTab() {
  const wrap = document.createElement("div");

  const hero = document.createElement("section");
  hero.className = "hero";

  const left = document.createElement("div");
  left.className = "panel";
  left.innerHTML = `
    <div class="panel__inner">
      <div class="kicker">🍯 Breakfast, but make it legendary</div>
      <h1>Breakfast all day. Coffee always. Regrets never.</h1>
      <p>
        Beary’s is a tiny breakfast bar with big “main character energy”.
        Warm plates, cold juice, and pancakes that will absolutely ruin other pancakes for you.
      </p>
      <div class="sep"></div>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a class="btn" href="#" data-cta="menu">View Menu</a>
        <span class="small">Open daily • 7:00am–2:00pm</span>
      </div>
    </div>
  `;

  const right = document.createElement("div");
  right.className = "panel";
  right.innerHTML = `
    <div class="panel__inner">
      <h2>Today’s Special</h2>
      <div class="card">
        <span class="badge">Limited</span>
        <h3 style="margin:10px 0 6px;">Honey-drizzled Pancakes</h3>
        <p class="small" style="margin:0 0 10px;">Fluffy stacks, whipped cream, and a dangerously good drizzle.</p>
        <div class="price">£6.50</div>
      </div>
      <div class="sep"></div>
      <p class="small">Tip: click Menu for the full list.</p>
    </div>
  `;

  hero.append(left, right);

  const below = document.createElement("section");
  below.className = "grid";
  below.style.marginTop = "18px";
  below.innerHTML = `
    <div class="card">
      <h3 style="margin:0 0 6px;">Fast & Friendly</h3>
      <p class="small" style="margin:0;">No 45-minute “artisan wait time”. You eat, you smile, you leave.</p>
    </div>
    <div class="card">
      <h3 style="margin:0 0 6px;">Simple Ingredients</h3>
      <p class="small" style="margin:0;">Good butter, fresh fruit, and coffee that has an actual plan.</p>
    </div>
    <div class="card">
      <h3 style="margin:0 0 6px;">Cozy Vibes</h3>
      <p class="small" style="margin:0;">Soft lighting, warm plates, and no loud motivational quotes.</p>
    </div>
  `;

  wrap.append(hero, below);
  return wrap;
}
