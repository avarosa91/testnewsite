'use strict';

var dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');
var dropdownIsOpen = false;

// Handle dropdown menu
if (dropdowns.length) {
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
      var target = document.querySelector('#' + event.target.dataset.dropdown);

      if (target) {
        if (target.classList.contains('show')) {
          target.classList.remove('show');
          dropdownIsOpen = false;
        } else {
          target.classList.add('show');
          dropdownIsOpen = true;
        }
      }
    });
  });
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('mouseup', function (event) {
  if (dropdownIsOpen) {
    dropdowns.forEach(function (dropdownButton) {
      var dropdown = document.querySelector('#' + dropdownButton.dataset.dropdown);
      var targetIsDropdown = dropdown === event.target;

      if (dropdownButton === event.target) {
        return;
      }

      if (!targetIsDropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
      }
    });
  }
});

var navbarMenu = document.querySelector('.navbar-menu');
var buttonToggler = document.querySelector('.navbar-toggler');
buttonToggler.addEventListener('click', function () {
  navbarMenu.classList.toggle("nav-active");
});