"use strict";

// changes the year to the current year.
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/* add the nav-open to the header class and the navigation bar is open from the hamburger icon when the user clickes.
 */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headEl.classList.toggle("nav-open");
});

/* smooth scrolling animation */
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headEl.classList.toggle("nav-open");
    }
  });
});

/* 
Stickey navigation
*/
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
