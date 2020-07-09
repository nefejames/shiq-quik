const nav = document.querySelector("nav");
const navToggle = document.querySelector(".toggle-nav");
const navLinks = document.querySelectorAll("li");

const h = document.documentElement;
const b = document.body;
const st = "scrollTop";
const sh = "scrollHeight";
const progress = document.querySelector(".progress");

[...navLinks].forEach((navLink) => {
  navLink.addEventListener("click", () => {
    nav.classList.toggle("opened");
  });
});

navToggle.addEventListener("click", () => {
  nav.classList.toggle("opened");
});

document.addEventListener("scroll", function () {
  scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  progress.style.setProperty("--scroll", scroll + "%");
});
