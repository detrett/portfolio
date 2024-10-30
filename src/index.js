import './styles.css';
import { Dropdown } from '@detrett/dropdown-menu';

const btnToggleTheme = document.querySelector('.btn-toggle-theme');

btnToggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
})