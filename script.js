"use strict";

const checkbox = document.getElementById("check-hack");
const navbar = document.querySelector(".nav");

// SMOOTH SCROLLING
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

  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});

// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
