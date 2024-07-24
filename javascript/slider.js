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
        0: {
          spaceBetween: 15,
          slidesPerView: 1.213,
          scrollbar: {
            dragSize: 200
          }
        },
        480: {
          spaceBetween: 15,
          slidesPerView: 1.2,
          scrollbar: {
            dragSize: 100
          }
        },
        500: {
          spaceBetween: 15,
          slidesPerView: 1.490,
        },
        600: {
          spaceBetween: 15,
          slidesPerView: 1.7,
        },
        768: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 30,
          scrollbar: {
            dragSize: 200
          }
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          scrollbar: {
            dragSize: 300
          }
        }
      },
      on: {
        slideChangeTransitionEnd: updateScrollbarPosition,
        setTranslate: updateScrollbarPosition,
      },
    });

    function updateScrollbarPosition() {
      const scrollbar = document.querySelector('.swiper-scrollbar');
      const drag = document.querySelector('.swiper-scrollbar-drag');
      if (typeof swiper.maxTranslate === 'function') {
        const maxTranslate = swiper.maxTranslate();
        const currentTranslate = Math.abs(swiper.translate);
        const progress = currentTranslate / maxTranslate;
        const dragWidth = parseInt(window.getComputedStyle(drag).width, 10);
        const scrollbarWidth = parseInt(window.getComputedStyle(scrollbar).width, 10);
        const maxDragLeft = scrollbarWidth - dragWidth;

        // Ensure the drag element stops at the end of the scrollbar when the slide stops
        drag.style.transform = `translateX(${progress * maxDragLeft}px)`;

        // Log values for debugging
        console.log(`Progress: ${progress}, Max Drag Left: ${maxDragLeft}`);
      } else {
        console.error('maxTranslate is not a function on swiper instance');
      }
    }

    // Initial update of scrollbar position
    updateScrollbarPosition();

    // Add event listeners to change arrow colors when clicked
    const prevArrow = document.querySelector('.main-slider_prev');
    const nextArrow = document.querySelector('.main-slider_back');

    prevArrow.addEventListener('click', function() {
      const prevSvg = prevArrow.querySelector('svg');
      const nextSvg = nextArrow.querySelector('svg');

      if (prevSvg && nextSvg) {
        prevSvg.style.fill = '#182cc0';
        nextSvg.style.fill = '#a5aaac';
      }
    });

    nextArrow.addEventListener('click', function() {
      const prevSvg = prevArrow.querySelector('svg');
      const nextSvg = nextArrow.querySelector('svg');

      if (prevSvg && nextSvg) {
        nextSvg.style.fill = '#182cc0';
        prevSvg.style.fill = '#a5aaac';
      }
    });
  });