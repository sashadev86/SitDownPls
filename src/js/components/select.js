//Селект Москва
const choosingRegionFirst = document.querySelector('.choosing-region-wrap-first');

if (choosingRegionFirst) {
  const select = choosingRegionFirst.querySelector('.choosing__region-select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
}

const choosingRegionSecond = document.querySelector('.choosing-region-wrap-second');

if (choosingRegionSecond) {
  const select = choosingRegionSecond.querySelector('.choosing__region-select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
}

//Селект Диваны
const choosingCategory = document.querySelector('.choosing-category');

if (choosingCategory) {
  const select = choosingCategory.querySelector('.form__search-сategories-select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      flippedState: 'is-flip',
    },
  });
}
