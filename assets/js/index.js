let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');
let dropdownIsOpen = false;

// Handle dropdown menu
if (dropdowns.length) {
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      let target = document.querySelector('#' + event.target.dataset.dropdown);

      if (target) {
        if (target.classList.contains('show')) {
          target.classList.remove('show');
          dropdownIsOpen = false;
        } else {
          target.classList.add('show');
          dropdownIsOpen = true;
        }
      }
    })
  })
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', (event) => {
  if (dropdownIsOpen) {
    dropdowns.forEach((dropdownButton) => {
      let dropdown = document.querySelector('#' + dropdownButton.dataset.dropdown);
      let targetIsDropdown = dropdown === event.target;

      if (dropdownButton === event.target) {
        return;
      }

      if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
        dropdown.classList.remove('show');
      }
    });
  }
});

let navbarMenu = document.querySelector('.navbar-menu');
let buttonToggler = document.querySelector('.navbar-toggler');
    buttonToggler.addEventListener('click', () => {
      navbarMenu.classList.toggle("nav-active");
    });
