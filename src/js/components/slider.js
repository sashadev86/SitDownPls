import Swiper, { Pagination, Autoplay, Keyboard, A11y, Navigation, Grid } from 'swiper';
Swiper.use([Pagination, Autoplay, Keyboard, A11y, Navigation, Grid]);
import focusVisibleSlide from '../components/focus-visible-slide';

let swiperHero = document.querySelector('.hero__swiper');
if (swiperHero) {
  swiperHero = new Swiper('.hero__swiper', {
    watchOverflow: true,
    watchSlidesProgress: true,
    slideVisibleClass: 'ui-slide-visible',
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}"><svg width="24" height="24" class="circ">
        <circle class="circ-bg" r="10" cx="12" cy="12" fill="none" stroke-width="2.3"/>
        <circle class="circ1" r="10" cx="12" cy="12" stroke="var(--secondary-color)" stroke-width="2.3" fill="none"/>
        </svg></span>`;
      }
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

let swiperSpecial = document.querySelector('.special__swiper');
if (swiperSpecial) {
  swiperSpecial = new Swiper('.special__swiper', {
    slidesPerView: "auto",
    direction: "horizontal",
    spaceBetween: 12,
    navigation: {
      nextEl: '.special__controls--next',
      prevEl: '.special__controls--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    breakpoints: {
      576: {
        slidesPerGroup: 2,
        spaceBetween: 32,
      },

      992: {
        slidesPerGroup: 3,
        spaceBetween: 32,
      },

      1440: {
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
    },
  });
}

let swiperUseful = document.querySelector('.useful__swiper');
if (swiperUseful) {
  swiperUseful = new Swiper('.useful__swiper', {
    slidesPerView: "auto",
    spaceBetween: 32,
    navigation: {
      nextEl: '.useful__controls--next',
      prevEl: '.useful__controls--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1025: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    }
  });
}

let swiperCatalog = document.querySelector('.catalog__swiper');
if (swiperCatalog) {
  swiperCatalog = new Swiper('.catalog__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 32,
    watchSlidesProgress: true,
    slideVisibleClass: 'ui-slide-visible',
    grid: {
      fill: 'row',
      rows: 3,
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    pagination: {
      el: '.catalog__swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `
          <span
            class="${className}"
            role="button"
            aria-label="Перейти к слайду ${index + 1}"
          >
            ${index + 1}
          </span>
        `;
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

