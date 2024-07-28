document.addEventListener('DOMContentLoaded', () => {
    const dropdownBg = document.getElementById('dropdownBg');
    const dropdowns = {
      w_open1: document.getElementById('dropdown1'),
      w_open2: document.getElementById('dropdown2'),
      w_open3: document.getElementById('dropdown3')
    };

    let currentlyOpen = null;

    dropdownBg.classList.add('hidden');
    Object.values(dropdowns).forEach(dropdown => dropdown.classList.remove('show'));

    const toggleDropdown = (openClass) => {
      const toggleElement = document.querySelector(`.${openClass}`);
      const isSameDropdown = currentlyOpen === openClass;

      Object.values(dropdowns).forEach(dropdown => dropdown.classList.remove('show'));
      document.querySelectorAll('.header_dropdown_toggle').forEach(toggle => toggle.classList.remove('active'));
      dropdownBg.classList.add('hidden');

      if (!isSameDropdown) {
        dropdowns[openClass].classList.add('show');
        toggleElement.classList.add('active');
        dropdownBg.classList.remove('hidden');
        currentlyOpen = openClass;
      } else {
        currentlyOpen = null;
      }
    };

    ['w_open1', 'w_open2', 'w_open3'].forEach(openClass => {
      document.querySelector(`.${openClass}`).addEventListener('click', () => toggleDropdown(openClass));
    });
  });