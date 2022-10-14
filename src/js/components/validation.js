import { validateForms } from '../functions/validate-forms';
import GraphModal from 'graph-modal';

const rules = [
  {
    ruleSelector: '.input-search',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимальное количество символов 3'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите название продукта!'
      }
    ]
  },
];
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимальное количество символов 3'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный email!'
      }
    ]
  },
  {
    ruleSelector: '.input-checkbox',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
    ]
  },
];
const rules2 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимальное количество символов 3'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-checkbox',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
    ]
  },
];

const afterForm = () => {
  let buyOneClickModal = document.querySelector('[data-graph-target="buyOneClick"]')
  let buyOneClickModalClose = buyOneClickModal.querySelector('.js-modal-close')

  buyOneClickModalClose.click()

  new GraphModal().open('success');
  // console.log(buyOneClickModal);
  // console.log('Произошла отправка, тут можно писать любые действия');
};

let formSearch = document.querySelector('.form-header');
if(formSearch) {
  validateForms('.form-header', rules, afterForm);
}

let feedbackForm = document.querySelector('.feedback__form');
if(feedbackForm) {
  validateForms('.feedback__form', rules1, afterForm);
}

let buyForm = document.querySelector('.buy-form');
if(buyForm) {
  validateForms('.buy-form', rules2, afterForm);
}
