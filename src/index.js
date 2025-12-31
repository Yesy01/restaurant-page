import "./style.css";

import homeTab from "./tabs/home";
import menuTab from "./tabs/menu";
import contactTab from "./tabs/contact";

const content = document.getElementById("content");
const buttons = Array.from(document.querySelectorAll(".nav__btn"));

const routes = {
  home: homeTab,
  menu: menuTab,
  contact: contactTab,
};

function setActive(tab) {
  buttons.forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
}

function render(tab) {
  content.textContent = "";               // wipe existing DOM
  const node = routes[tab]();             // create DOM for tab
  content.appendChild(node);              // mount it
  content.querySelectorAll("[data-cta='menu']").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      render("menu");
    });
  });
  setActive(tab);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => render(btn.dataset.tab));
});

// initial load
render("home");
