import './styles.css';
import { Dropdown } from './dropdown';

const btnToggleTheme = document.querySelector('.btn-toggle-theme');
const themeIcon = document.querySelector('.theme-icon');

btnToggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeIcon.classList.toggle('dark-theme');
})

// Make the navigation list into a dropdown menu, only on smaller devices.
const navList = document.querySelector('.nav-list');
const mediaQuery = window.matchMedia('(max-width: 600px)')

mediaQuery.addEventListener('change', () => {
  if(mediaQuery.matches) {
    navList.classList.add('dropdown-menu');
  } else {
    navList.classList.remove('dropdown-menu');
  }
})