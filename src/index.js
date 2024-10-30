import './styles.css';
import { Dropdown } from './dropdown';

const btnToggleTheme = document.querySelector('.btn-toggle-theme');
const themeIcon = document.querySelector('.theme-icon');

btnToggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeIcon.classList.toggle('dark-theme');
})

