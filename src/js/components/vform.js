import { validateForms } from '../functions/validate-forms';
const rulesAboutForm = [
  {
    ruleSelector: '.about__grid-form-input',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите Email'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Недопустимый формат'
      },

    ]
  },
];

const afterAboutForm = () => {
  alert('Вы подписались на рассылку. Отписаться можно в любой момент')
};

validateForms('.about__grid-form', rulesAboutForm, afterAboutForm);
