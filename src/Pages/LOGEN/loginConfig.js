// import { InputTypes } from "../../constants/enums";

// export const getLoginFields = (connectField) => [
//   {
//     name: "email",
//     fieldLabel: "Email Address",
//     type: InputTypes.EMAIL,
//     placeholder: "you@example.com",
//     ...connectField("email"),
//   },
//   {
//     name: "password",
//     fieldLabel: "Password",
//     type: InputTypes.PASSWORD,
//     placeholder: "Enter your password",
//     showPasswordToggle: true, 
//     forgotPasswordLink: true,  
//     ...connectField("password"),
//   },
//   {
//     type: InputTypes.CHECKBOX,
//     fieldLabel: "Remember me",
//     ...connectField("rememberMe"),
//   },
// ];

import { InputTypes } from "../../constants/enums";

export const getLoginFields = (connectField, t) => [
  {
    name: "email",
    fieldLabel: t('loginFields.emailLabel', 'Email Address'),
    type: InputTypes.EMAIL,
    placeholder: t('loginFields.emailPlaceholder', 'you@example.com'),
    ...connectField("email"),
  },
  {
    name: "password",
    fieldLabel: t('loginFields.passwordLabel', 'Password'),
    type: InputTypes.PASSWORD,
    placeholder: t('loginFields.passwordPlaceholder', 'Enter your password'),
    showPasswordToggle: true,
    forgotPasswordLink: true,
    ...connectField("password"),
  },
  {
    type: InputTypes.CHECKBOX,
    fieldLabel: t('loginFields.rememberMe', 'Remember me'),
    ...connectField("rememberMe"),
  },
];