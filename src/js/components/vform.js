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

const rulesContactForm = [
  {
    ruleSelector: '.contact__form-name',
    rules: [
      {
        rule: 'minLength',
        value: 2,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!'
      }
    ]
  },
  {
    ruleSelector: '.contact__form-email',
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
  alert('Вы подписались на рассылку. Отписаться можно в любой момент.')
};

const afterContactForm = () => {
  alert('Вы оставили заявку. ожидайте сообщения на почту.')
};

validateForms('.about__grid-form', rulesAboutForm, afterAboutForm);
validateForms('.contact__form', rulesContactForm, afterContactForm);
