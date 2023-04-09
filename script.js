"use strict";

const checkbox = document.getElementById("check-hack");
const navbar = document.querySelector(".nav");

navbar.addEventListener("click", function (e) {
  if (!e.target.classList.contains("nav__link")) return;
  e.preventDefault();

  const link = e.target;
  checkbox.checked = false;
  const href = link.getAttribute("href");

  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (href !== "#") {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});
