import Swiper, { Pagination, Autoplay, Keyboard, A11y, Navigation, Grid, Thumbs } from 'swiper';
Swiper.use([Pagination, Autoplay, Keyboard, A11y, Navigation, Grid, Thumbs]);
import focusVisibleSlide from '../components/focus-visible-slide';

let productInfo = document.querySelector('.product');

if (productInfo) {
  let productCardLarge = productInfo.querySelector('.product-large',);
  let productCardSmall = productInfo.querySelector('.product-small',);

  const additionalSwiper = new Swiper(productCardSmall, {
    slidesPerView: 2.6,
    spaceBetween: 15,

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },

    breakpoints: {
      1071: {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 20,
      },

      993: {
        direction: 'horizontal',
        slidesPerView: 3.6,
        spaceBetween: 38,
      },

      577: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  const primarySwiper = new Swiper(productCardLarge, {
    watchSlidesProgress: true,

    slideVisibleClass: 'ui-slide-visible',

    thumbs: {
      swiper: additionalSwiper,
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
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


