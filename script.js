// const servicesSection = document.getElementById("services");
// const testimonialsSection = document.getElementById("testimonials");
// const contactSection = document.getElementById("contact");

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

console.log(progress);
