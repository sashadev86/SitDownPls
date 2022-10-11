import { validateForms } from '../functions/validate-forms';

const rules = [
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
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

let feedbackForm = document.querySelector('.feedback__form');
if(feedbackForm) {
  validateForms('.feedback__form', rules, afterForm);
}

let buyForm = document.querySelector('.buy-form');
if(buyForm) {
  validateForms('.buy-form', rules1, afterForm);
}
