const highRatingSection = document.querySelector('.rating');

const firstBreakpoint = '(min-width: 100px)';
const secondBreakpoint = '(min-width: 993px)';
const thirdBreakpoint = '(min-width: 1201px)';

function showingCardsByClick(showOnLoad = 8, showMore = 4) {
  const SHOW_ON_LOAD = showOnLoad;
  const SHOW_MORE = showMore;

  const cardItems = [...highRatingSection.querySelectorAll('.rating-card')];
  const showMoreButton = highRatingSection.querySelector('.js-show-btn');

  function showItems(count) {
    cardItems.forEach((el) => {
      el.classList.remove('product-card-active');
    });

    cardItems.splice(0, count).forEach((el) => {
      el.classList.add('product-card-active');
    });

    showMoreButton.classList.remove('show-more-hidden');

    if (!cardItems.length) {
      showMoreButton.classList.add('show-more-hidden');
    }
  }

  showItems(SHOW_ON_LOAD);

  showMoreButton.addEventListener('click', () => {
    showItems(SHOW_MORE);
  });
}

function changingValuesOnBreakpoints() {
  if (window.matchMedia(thirdBreakpoint).matches) {
    showingCardsByClick();
  } else if (window.matchMedia(secondBreakpoint).matches) {
    showingCardsByClick(6, 3);
  } else if (window.matchMedia(firstBreakpoint).matches) {
    showingCardsByClick(6, 2);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  changingValuesOnBreakpoints();
});

window.addEventListener('resize', () => {
  changingValuesOnBreakpoints();
});
