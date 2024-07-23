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
      on: {
        slideChangeTransitionEnd: updateScrollbarPosition,
        setTranslate: updateScrollbarPosition,
      },
    });
  
    function updateScrollbarPosition() {
      const scrollbar = document.querySelector('.swiper-scrollbar');
      const drag = document.querySelector('.swiper-scrollbar-drag');
      const maxTranslate = swiper.maxTranslate();
      const currentTranslate = Math.abs(swiper.translate);
      const progress = currentTranslate / maxTranslate;
      const dragWidth = parseInt(window.getComputedStyle(drag).width, 10);
      const scrollbarWidth = parseInt(window.getComputedStyle(scrollbar).width, 10);
      const maxDragLeft =dragWidth - scrollbarWidth ;
  
      // Ensure the drag element stops at the end of the scrollbar when the slide stops
      drag.style.transform = `translateX(${progress * maxDragLeft}px)`;
  
      // Log values for debugging
      console.log(`Progress: ${progress}, Max Drag Left: ${maxDragLeft}`);
    }
  
    // Initial update of scrollbar position
    updateScrollbarPosition();
  });
  