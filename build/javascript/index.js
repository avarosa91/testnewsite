'use strict';

var dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');
var dropdownIsOpen = false;
var mouseMoving = true;

function dropdownHandler(e) {
  var target = document.querySelector('#' + e.target.dataset.dropdown);

  if (e.type === 'mousemove') {
    mouseMoving = false;
  }

  if (e.type === 'mouseover' && mouseMoving === false) {

    if (target.classList.contains('show')) {
      setTimeout(function () {
        target.classList.remove('show');
        dropdownIsOpen = false;
      }, 500);
    } else {
      target.classList.add('show');
      dropdownIsOpen = true;
    }
  } else if (e.type === 'mouseout') {

    if (target.classList.contains('show')) {
      setTimeout(function () {
        target.classList.remove('show');
        dropdownIsOpen = false;
      }, 500);
    } else {
      target.classList.add('show');
      dropdownIsOpen = true;
    }
  }
}

// Handle dropdown menu
if (dropdowns.length) {
  dropdowns.forEach(function (dropdown) {
    dropdown.onmouseover = dropdown.onmouseout = dropdown.onmousemove = dropdownHandler;
  });
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('click', function (event) {
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
var buttonToggler = document.querySelector('.navbar-header__navbar-toggler');
buttonToggler.addEventListener('click', function () {
  navbarMenu.classList.toggle("nav-active");
});