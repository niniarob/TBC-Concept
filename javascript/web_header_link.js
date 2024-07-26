document.addEventListener('DOMContentLoaded', () => {
    const dropdownBg = document.getElementById('dropdownBg');
    const dropdowns = {
      w_open1: document.getElementById('dropdown1'),
      w_open2: document.getElementById('dropdown2'),
      w_open3: document.getElementById('dropdown3')
    };

    let currentlyOpen = null;

    // Initially hide elements
    dropdownBg.classList.add('hidden');
    Object.values(dropdowns).forEach(dropdown => dropdown.classList.remove('show'));

    const toggleDropdown = (openClass) => {
      const toggleElement = document.querySelector(`.${openClass}`);

      if (currentlyOpen === openClass) {
        // Close the currently open dropdown
        dropdowns[openClass].classList.remove('show');
        dropdownBg.classList.add('hidden');
        toggleElement.classList.remove('active');
        currentlyOpen = null;
      } else {
        // Hide all dropdowns and remove active class
        Object.values(dropdowns).forEach(dropdown => dropdown.classList.remove('show'));
        document.querySelectorAll('.header_dropdown_toggle').forEach(toggle => toggle.classList.remove('active'));

        // Show the background
        dropdownBg.classList.remove('hidden');

        // Show the selected dropdown and add active class
        if (dropdowns[openClass]) {
          dropdowns[openClass].classList.add('show');
          toggleElement.classList.add('active');
          currentlyOpen = openClass;
        }
      }
    };

    // Add event listeners to toggle elements
    document.querySelector('.w_open1').addEventListener('click', () => toggleDropdown('w_open1'));
    document.querySelector('.w_open2').addEventListener('click', () => toggleDropdown('w_open2'));
    document.querySelector('.w_open3').addEventListener('click', () => toggleDropdown('w_open3'));
  });