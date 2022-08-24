import Swiper, { Pagination, Autoplay, Keyboard, A11y } from 'swiper';
Swiper.use([Pagination, Autoplay, Keyboard, A11y]);
// const swiper = new Swiper('.hero__swiper', {
//   slidesPerView: 1,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   // allowTouchMove: false,
//   loop: true,
//   // autoplay: {
//   //   delay: 5000
//   // },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   a11y: {
//     prevSlideMessage: 'Previous slide',
//     nextSlideMessage: 'Next slide',
//   },
// });


  let swiper01 = document.querySelector('.hero__swiper');
  if (swiper01) {
    swiper01 = new Swiper('.hero__swiper', {
      watchOverflow: true,
      loop: true,
      autoplay: true,
      speed: 800,
      effect: 'fade',
      slidesPerView: 1,
      spaceBetween: 10,
      lazy: false,
      pagination: {
        el: '.hero__pagination',
        type: 'bullets',
        renderBullet(index, className) {
          return `
            <span class=${className}>
            <svg class="circular-pagination__svg" width="24" height="24" viewBox="0 0 24 24">
              <circle class="circular-pagination__bg" r="10" cx="12" cy="12" fill="none" stroke-width="2"></circle>
              <circle class="circular-pagination__progress" r="10" cx="12" cy="12" fill="none" stroke-width="3"></circle>
            </svg>
            </span>
          `;
        },
      },
    });
  }

