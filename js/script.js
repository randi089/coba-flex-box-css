// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {
  // ambil objeck href
  const target = document.querySelector('a[href^="#"]');

  target.addEventListener("click", function (event) {
    event.preventDefault();

    const t = target.getAttribute("href").substring(1);
    smoothScroll(t);
  });
});

// function Smooth Scrolling
function smoothScroll(t) {
  const element = document.getElementById(t);

  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
}
