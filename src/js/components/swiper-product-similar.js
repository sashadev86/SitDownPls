import Swiper, { Pagination, Autoplay, Keyboard, A11y, Navigation, Grid } from 'swiper';
Swiper.use([Pagination, Autoplay, Keyboard, A11y, Navigation, Grid]);
import focusVisibleSlide from '../components/focus-visible-slide';

let similarProductSection = document.querySelector('.similar-product-section');

if (similarProductSection) {
  similarProductSection = new Swiper('.similar-swiper', {
    spaceBetween: 16,
    slidesPerView: 2,
    slidesPerGroup: 2,
    watchSlidesProgress: true,

    slideVisibleClass: 'ui-slide-visible',

    navigation: {
      nextEl: '.similar__controls--next',
      prevEl: '.similar__controls--prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },

    breakpoints: {
      1071: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 32,
      },

      831: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },

      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
    },

    on: {
      init() {
        focusVisibleSlide(this.slides, 'ui-slide-visible');
      },

      slideChange() {
        focusVisibleSlide(this.slides, 'ui-slide-visible');
      },
    },
  });
}
