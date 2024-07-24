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
            slidesPerView: 1.590,
            scrollbar: {
                dragSize: 50
            }
        },
        768: {
            spaceBetween: 15,
            slidesPerView: 2,
            // scrollbar: {
            //     dragSize: 100
            // }
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
                dragSize: 200
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
      const maxTranslate = swiper.maxTranslate();
      const currentTranslate = Math.abs(swiper.translate);
      const progress = currentTranslate / maxTranslate;
      const dragWidth = parseInt(window.getComputedStyle(drag).width, 10);
      const scrollbarWidth = parseInt(window.getComputedStyle(scrollbar).width, 10);
      const maxDragLeft = dragWidth -scrollbarWidth ;
  
      // Ensure the drag element stops at the end of the scrollbar when the slide stops
      drag.style.transform = `translateX(${progress * maxDragLeft}px)`;
  
      // Log values for debugging
      console.log(`Progress: ${progress}, Max Drag Left: ${maxDragLeft}`);
    }
  
    // Initial update of scrollbar position
    updateScrollbarPosition();
  
    // Add event listeners to change arrow colors when clicked
    const prevArrow = document.querySelector('.main-slider_prev');
    const nextArrow = document.querySelector('.main-slider_back');
  
    prevArrow.addEventListener('click', function() {
      prevArrow.querySelector('svg').style.fill = '#182cc0';
      nextArrow.querySelector('svg').style.fill = '#a5aaac';
    });
  
    nextArrow.addEventListener('click', function() {
      nextArrow.querySelector('svg').style.fill = '#182cc0';
      prevArrow.querySelector('svg').style.fill = '#a5aaac';
    });
  });
  