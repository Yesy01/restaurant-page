export default function menuTab() {
  const wrap = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  const p = document.createElement("p");
  p.textContent = "Just good breakfast.";

  const sections = [
    {
      title: "Plates",
      items: [
        { name: "Honey Pancakes", desc: "Fluffy stacks, whipped cream, honey drizzle.", price: "£6.50", tag: "Popular" },
        { name: "Eggs & Toast", desc: "Two eggs any style, sourdough toast, butter.", price: "£5.00", tag: "Classic" },
        { name: "Granola Bowl", desc: "Yogurt, granola, berries, and just enough smugness.", price: "£4.75", tag: "Fresh" },
      ],
    },
    {
      title: "Drinks",
      items: [
        { name: "House Coffee", desc: "Strong enough to reboot your personality.", price: "£2.20", tag: "Hot" },
        { name: "Iced Latte", desc: "Cold, smooth, and dangerously drinkable.", price: "£3.20", tag: "Cold" },
        { name: "Bear-y Smoothie", desc: "Berries, yogurt, honey.", price: "£3.80", tag: "Fruit" },
      ],
    },
  ];

  wrap.append(h1, p);

  sections.forEach((sec) => {
    const panel = document.createElement("div");
    panel.className = "panel";
    panel.style.marginTop = "14px";

    const inner = document.createElement("div");
    inner.className = "panel__inner";

    const title = document.createElement("h2");
    title.textContent = sec.title;

    const grid = document.createElement("div");
    grid.className = "grid";
    grid.style.marginTop = "12px";

    sec.items.forEach((it) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <span class="badge">${it.tag}</span>
        <h3 style="margin:10px 0 6px;">${it.name}</h3>
        <p class="small" style="margin:0 0 10px;">${it.desc}</p>
        <div class="price">${it.price}</div>
      `;
      grid.appendChild(card);
    });

    inner.append(title, grid);
    panel.appendChild(inner);
    wrap.appendChild(panel);
  });

  return wrap;
}
