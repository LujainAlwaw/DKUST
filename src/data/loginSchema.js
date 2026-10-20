

import * as Yup from "yup";

export const getLoginSchema = (t) => {
  return Yup.object({
    email: Yup.string()
      .email(t('validation.invalidEmail', 'Invalid email address'))
      .required(t('validation.emailRequired', 'Email is required.')),
    password: Yup.string()
      .required(t('validation.passwordRequired', 'Password is required.')),
    rememberMe: Yup.boolean(),
  });
};