const nav = document.querySelector("nav");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navToggle.classList.toggle("color-change");
});

console.log(nav);

const h = document.documentElement;
const b = document.body;
const st = "scrollTop";
const sh = "scrollHeight";
// const scroll;
const progress = document.querySelector(".progress");

document.addEventListener("scroll", function () {
  scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  progress.style.setProperty("--scroll", scroll + "%");
});
