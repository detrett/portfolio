import './styles.css';
import { Dropdown } from '@detrett/dropdown-menu';

const btnToggleTheme = document.querySelector('.btn-toggle-theme');
const themeIcon = document.querySelector('.theme-icon');

btnToggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeIcon.classList.toggle('dark-theme');
})

