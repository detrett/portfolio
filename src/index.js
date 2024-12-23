import "./styles.css";
import { Dropdown } from "./dropdown";
import sunIcon from "./icons/sun2.svg";
import moonIcon from "./icons/moon1.svg";

const btnToggleTheme = document.querySelector(".btn-toggle-theme");
const themeIcon = document.querySelector(".theme-icon");
const langIcon = document.querySelector(".lang-icon");
const highlight = document.querySelector(".highlight");

// Spinning icons
let lastMouseX = 0;
let lastMouseY = 0;
let lastMouseTime = 0;
const spinningIcons = document.querySelectorAll(".spinning-icon");

spinningIcons.forEach(element => {
  element.addEventListener("mouseenter", (e) => {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    lastMouseTime = Date.now();
  });

  element.addEventListener('mouseleave', (e) => {
    const deltaX = e.clientX - lastMouseX;
    const deltaY = e.clientY - lastMouseY;
    const deltaTime = Date.now() - lastMouseTime;
  
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const velocity = distance / deltaTime;
  
    const duration = Math.max(0.2, Math.min(1.75, 1 / velocity));
    const iterations = Math.max(1, Math.min(6, Math.ceil(velocity * 1.5)));
  
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = `flip ${duration}s ${iterations} ease-in-out`;
  })
});

// Dark Theme
btnToggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeIcon.classList.toggle("dark-theme");
  langIcon.classList.toggle("dark-theme");
  highlight.classList.toggle("dark-theme");

  const currentIcon = window.getComputedStyle(themeIcon).backgroundImage;

  themeIcon.classList.remove("enter");
  themeIcon.classList.add("leave");

  if (currentIcon.includes(sunIcon)) {
    setTimeout(() => {
      themeIcon.classList.remove("leave");
      themeIcon.classList.add("enter");
      themeIcon.style.backgroundImage = `url(${moonIcon})`;
    }, 500);
  } else {
    setTimeout(() => {
      themeIcon.classList.remove("leave");
      themeIcon.classList.add("enter");
      themeIcon.style.backgroundImage = `url(${sunIcon})`;
    }, 500);
  }
});

// Make the navigation list into a dropdown menu, only on smaller devices.
const navList = document.querySelector(".nav-list");
const mediaQuery = window.matchMedia("(max-width: 1000px)");

const checkMediaForNav = function () {
  if (mediaQuery.matches) {
    navList.classList.add("dropdown-menu");
  } else {
    navList.classList.remove("dropdown-menu");
  }
};

checkMediaForNav();

mediaQuery.addEventListener("change", checkMediaForNav);