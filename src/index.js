import './styles.css';
import { Dropdown } from './dropdown';
import sunIcon from './icons/sun2.svg';
import moonIcon from './icons/moon1.svg';

const btnToggleTheme = document.querySelector('.btn-toggle-theme');
const themeIcon = document.querySelector('.theme-icon');

btnToggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const currentIcon = window.getComputedStyle(themeIcon).backgroundImage;
  
  themeIcon.classList.remove('enter');
  themeIcon.classList.add('leave');

  if(currentIcon.includes(sunIcon)) {
    setTimeout(() => {
      themeIcon.classList.remove('leave');
      themeIcon.classList.add('enter');
      themeIcon.style.backgroundImage = `url(${moonIcon})`;
    }, 500)
  } else {
    setTimeout(() => {
      themeIcon.classList.remove('leave');
      themeIcon.classList.add('enter');
      themeIcon.style.backgroundImage = `url(${sunIcon})`;
    }, 500)
  }
})

// Make the navigation list into a dropdown menu, only on smaller devices.
const navList = document.querySelector('.nav-list');
const mediaQuery = window.matchMedia('(max-width: 600px)')

const checkMediaForNav = function() {
  if(mediaQuery.matches) {
    navList.classList.add('dropdown-menu');
  } else {
    navList.classList.remove('dropdown-menu');
  }
}

checkMediaForNav();

mediaQuery.addEventListener('change', checkMediaForNav)