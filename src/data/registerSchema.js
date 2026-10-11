// import * as Yup from "yup";

// export const registerSchema = Yup.object({
//   firstName: Yup.string()
//     .trim()
//     .required("First name is required."),
//   lastName: Yup.string()
//     .trim()
//     .required("Last name is required."),
//   email: Yup.string()
//     .trim()
//     .required("Email is required.")
//     .email("Please enter a valid email address."),
//   password: Yup.string()
//     .min(6, "Min. 6 characters")
//     .required("Password is required."),
//   confirmPassword: Yup.string()
//     .required("Please confirm your password.")
//     .oneOf([Yup.ref("password")], "Passwords must match"),
//   terms: Yup.boolean()
//     .oneOf([true], "You must agree to the terms."),
// });

import * as Yup from "yup";

export const getRegisterSchema = (t) => {
  return Yup.object({
    firstName: Yup.string()
      .trim()
      .required(t('validation.firstNameRequired', 'First name is required.')),
    lastName: Yup.string()
      .trim()
      .required(t('validation.lastNameRequired', 'Last name is required.')),
    email: Yup.string()
      .trim()
      .required(t('validation.emailRequired', 'Email is required.'))
      .email(t('validation.invalidEmail', 'Please enter a valid email address.')),
    password: Yup.string()
      .min(6, t('validation.minPassword', 'Min. 6 characters'))
      .required(t('validation.passwordRequired', 'Password is required.')),
    confirmPassword: Yup.string()
      .required(t('validation.confirmPasswordRequired', 'Please confirm your password.'))
      .oneOf([Yup.ref("password")], t('validation.passwordsMatch', 'Passwords must match')),
    terms: Yup.boolean()
      .oneOf([true], t('validation.termsRequired', 'You must agree to the terms.')),
  });
};