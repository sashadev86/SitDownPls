import Swiper, { Pagination, Autoplay, Keyboard, A11y } from 'swiper';
Swiper.use([Pagination, Autoplay, Keyboard, A11y]);

let swiperHero = document.querySelector('.hero__swiper');
if (swiperHero) {
  swiperHero = new Swiper('.hero__swiper', {
    watchOverflow: true,
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000
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
  });
}

