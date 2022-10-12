import Swiper, { Pagination, Autoplay, Keyboard, A11y, Navigation, Grid, Thumbs } from 'swiper';
Swiper.use([Pagination, Autoplay, Keyboard, A11y, Navigation, Grid, Thumbs]);

let swiperModalLarge = document.querySelector('.product-large-modal');
let swiperModaleSmall = document.querySelector('.product-small-modal');

let additionalSwiper = new Swiper(swiperModaleSmall, {
  spaceBetween: 10,

  navigation: {
    nextEl: '.product-modal-small-next',
    prevEl: '.product-modal-small-prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {
    1071: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 78,
    },

    831: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 78,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 78,
    },
  },
});

let primarySwiper = new Swiper(swiperModalLarge, {
  thumbs: {
    swiper: additionalSwiper,
  },

  spaceBetween: 30,

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
  },
});

export default primarySwiper;
