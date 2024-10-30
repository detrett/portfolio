export class Dropdown {
  constructor() {
    this.initialize();
  }

  initialize() {
    document.addEventListener("click", (e) => {
      const dropdownAction = e.target.closest(".dropdown-action");
      if (dropdownAction) {
        this.toggleDropdown(dropdownAction);
      } else {
        this.hideAllDropdowns();
      }
    });
  }

  toggleDropdown(dropdownAction) {
    const dropdownMenu = dropdownAction.nextElementSibling;
    const isExpanded = dropdownMenu.getAttribute('aria-expanded') === 'true';
    dropdownMenu.setAttribute('aria-expanded', !isExpanded);

    if (dropdownMenu.classList.contains("active")) {
      this.hideAllDropdowns();
    } else {
      this.hideAllDropdowns();
      dropdownMenu.classList.add("active");
    }
  }

  hideAllDropdowns() {
    document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
      menu.classList.remove("active");
      menu.setAttribute('aria-expanded', false);
    });
  }
  
}

document.addEventListener("DOMContentLoaded", () => new Dropdown());
