export default function contactTab() {
  const wrap = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact";

  const layout = document.createElement("div");
  layout.className = "grid";
  layout.style.gridTemplateColumns = "repeat(2, 1fr)";
  layout.style.gap = "14px";

  const info = document.createElement("div");
  info.className = "panel";
  info.innerHTML = `
    <div class="panel__inner">
      <h2>Get in touch</h2>
      <div class="sep"></div>
      <p><strong>Phone:</strong> <span class="small">+44 0000 000000</span></p>
      <p><strong>Email:</strong> <span class="small">hello@bearysbreakfast.fake</span></p>
      <p><strong>Address:</strong> <span class="small">1 Honeycomb Lane, Breakfast City</span></p>
    </div>
  `;

  const hours = document.createElement("div");
  hours.className = "panel";
  hours.innerHTML = `
    <div class="panel__inner">
      <h2>Hours</h2>
      <div class="sep"></div>
      <p class="small" style="margin:0;">Mon–Fri: 7:00am – 2:00pm</p>
      <p class="small" style="margin:8px 0 0;">Sat–Sun: 8:00am – 3:00pm</p>
      <div class="sep"></div>
      <a class="btn" href="#" data-cta="reserve">Reserve a table</a>
    </div>
  `;

  layout.append(info, hours);

  // Responsive: 1 column on small screens
  layout.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";

  wrap.append(h1, layout);
  return wrap;
}
