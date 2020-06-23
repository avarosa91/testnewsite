let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');
let dropdownIsOpen = false;
let mouseMoving = true;

function dropdownHandler(e) {
  let target = document.querySelector('#' + e.target.dataset.dropdown);

  if (e.type === 'mousemove') {
      mouseMoving = false;
  }

  if (e.type === 'mouseover' && mouseMoving === false) {

      if (target.classList.contains('show')) {
        setTimeout(() => {
          target.classList.remove('show');
          dropdownIsOpen = false;
        }, 500);
      } else {
          target.classList.add('show');
          dropdownIsOpen = true;
      }

  } else if (e.type === 'mouseout') {

    if (target.classList.contains('show')) {
      setTimeout(() => {
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
  dropdowns.forEach((dropdown) => {
    dropdown.onmouseover = dropdown.onmouseout = dropdown.onmousemove = dropdownHandler;
  });
}

// Handle closing dropdowns if a user clicked the body
window.addEventListener('click', (event) => {
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
let buttonToggler = document.querySelector('.navbar-header__navbar-toggler');
    buttonToggler.addEventListener('click', () => {
      navbarMenu.classList.toggle("nav-active");
    });
