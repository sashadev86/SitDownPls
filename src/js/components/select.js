//Селект Москва
const choosingRegionFirst = document.querySelector('.choosing__region-wrap--first');

if (choosingRegionFirst) {
  const select = choosingRegionFirst.querySelector('.choosing__region-select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
}

//Селект Диваны
// const selector = document.querySelector(".header__сategories-select")

// const choices = new Choices(selector, {
//   searchEnabled: false,
//   classNames: {
//     containerOuter: 'choices header__сategories-form',
//   },
// });
