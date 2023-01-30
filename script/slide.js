// slider one

const swiperOne = new Swiper('.slider', {
  spaceBetween: 30,
  slidersPerView: 4,

    navigation: {
      nextEl: '.swiper-button-nexts',
      prevEl: '.swiper-button-prevs',
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

});

// slider two

const breakpoint = window.matchMedia( '(min-width: 1000px)' );

let swiperTwo;

const breakpointChecker = function() {

   if (breakpoint.matches === true ) {

      if (swiperTwo !== undefined ) swiperTwo.destroy( true, true );

      return;

   } else if (breakpoint.matches === false ) {

      return enableSwiper();
   }
};

const enableSwiper = function() {
  swiperTwo = new Swiper('.luxury__luxury-slider', {

    spaceBetween: 17,
    slidersPerView: 5,
  
    navigation: {
      nextEl: '.luxury__right',
      prevEl: '.luxury__left',
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });
};

breakpoint.addEventListener('change', breakpointChecker);

breakpointChecker()
// slider three

const swiperThree = new Swiper('.review-blocks', {
    spaceBetween: 94,
    slidersPerView: 6,

    navigation: {
      nextEl: '.review__right',
      prevEl: '.review__left',
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
