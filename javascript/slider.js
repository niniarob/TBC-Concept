document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper_container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.main-slider_back',
      prevEl: '.main-slider_prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1.213, spaceBetween: 15, scrollbar: { dragSize: 200 } },
      480: { slidesPerView: 1.2, spaceBetween: 15, scrollbar: { dragSize: 100 } },
      500: { slidesPerView: 1.49, spaceBetween: 15 },
      600: { slidesPerView: 1.7, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      991: { slidesPerView: 3, spaceBetween: 30, scrollbar: { dragSize: 200 } },
      1024: { slidesPerView: 3, spaceBetween: 30, scrollbar: { dragSize: 300 } },
    },
  });


  function handleArrowClick(clickedArrow, otherArrow) {
    const clickedSvg = clickedArrow.querySelector('svg');
    const otherSvg = otherArrow.querySelector('svg');
    if (clickedSvg && otherSvg) {
      clickedSvg.style.fill = '#182cc0';
      otherSvg.style.fill = '#a5aaac';
    }
  }

  const prevArrows = document.querySelectorAll('.main-slider_prev');
  const nextArrows = document.querySelectorAll('.main-slider_back');

  prevArrows.forEach((prevArrow) => {
    prevArrow.addEventListener('click', () => {
      nextArrows.forEach((nextArrow) => {
        handleArrowClick(prevArrow, nextArrow);
      });
    });
  });

  nextArrows.forEach((nextArrow) => {
    nextArrow.addEventListener('click', () => {
      prevArrows.forEach((prevArrow) => {
        handleArrowClick(nextArrow, prevArrow);
      });
    });
  });
});
