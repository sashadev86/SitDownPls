//*1.Селект(Выбор) в codepen-е. Здесь два селекта объединиkb в один код с помощью переменных(const)*//
//Селект Москва
const citySelect = () => {
  const element = document.querySelector('.header__city-select');
  const choices = new Choices(element, {
    searchEnabled: false,//убирает Ентер*/
    /*работает если отключить searchEnabled: false. будет поиск по селекту*/
    noResultsText: 'Ничего не найдено'
  });
};

citySelect();

//Селект Диваны
// const сategoriesSelect = () => {
//   const element = document.querySelector('.header__сategoriesSelect');
//     const choices = new Choices(element, {
//       searchEnabled: false,//убирает Ентер*/
//       /*работает если отключить searchEnabled: false. будет поиск по селекту*/
//       noResultsText: 'Ничего не найдено'
//     });
// };

// сategoriesSelect();

//Селект Диваны
const selector = document.querySelector(".header__сategories-select")

const choices = new Choices(selector, {
  searchEnabled: false,
  classNames: {
    containerOuter: 'choices header__сategories-form',
  },
});
