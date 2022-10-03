import GraphModal from 'graph-modal';
import primarySwiper from './swiper-product-modal';

const swiperLargeBtns = document.querySelectorAll('.product-button');

const productModalImage = new GraphModal({
	isOpen: (productModalImage) => {
		[...swiperLargeBtns].forEach((button, index) => {
      button.setAttribute('data-index', index);

      button.addEventListener('click', (e) => {
        const idx = e.currentTarget.dataset.index;
        primarySwiper.slideTo(idx);
      });
    });
	},
});

