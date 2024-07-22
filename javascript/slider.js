document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper_container', {
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
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });