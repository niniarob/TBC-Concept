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
      const isSameDropdown = currentlyOpen === openClass;

      // Close all dropdowns and remove active class
      Object.values(dropdowns).forEach(dropdown => dropdown.classList.remove('show'));
      document.querySelectorAll('.header_dropdown_toggle').forEach(toggle => toggle.classList.remove('active'));
      dropdownBg.classList.add('hidden');

      if (!isSameDropdown) {
        // Open the selected dropdown and add active class
        dropdowns[openClass].classList.add('show');
        toggleElement.classList.add('active');
        dropdownBg.classList.remove('hidden');
        currentlyOpen = openClass;
      } else {
        currentlyOpen = null;
      }
    };

    // Add event listeners to toggle elements
    ['w_open1', 'w_open2', 'w_open3'].forEach(openClass => {
      document.querySelector(`.${openClass}`).addEventListener('click', () => toggleDropdown(openClass));
    });
  });