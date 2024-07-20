document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger_menu');
  
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('open');
    });
  });
  