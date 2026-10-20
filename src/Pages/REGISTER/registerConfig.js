


import { InputTypes } from "../../constants/enums";

export const getRegisterFields = (connectField, t) => [
  {
    type: InputTypes.TEXT,
    fieldLabel: t('registerFields.firstNameLabel', 'First Name'),
    placeholder: t('registerFields.firstNamePlaceholder', 'John'),
    halfWidth: true,
    ...connectField("firstName"),
  },
  {
    type: InputTypes.TEXT,
    fieldLabel: t('registerFields.lastNameLabel', 'Last Name'),
    placeholder: t('registerFields.lastNamePlaceholder', 'Doe'),
    halfWidth: true,
    ...connectField("lastName"),
  },
  {
    type: InputTypes.EMAIL,
    fieldLabel: t('registerFields.emailLabel', 'Email'),
    placeholder: t('registerFields.emailPlaceholder', 'you@example.com'),
    ...connectField("email"),
  },
  {
    type: InputTypes.PASSWORD,
    fieldLabel: t('registerFields.passwordLabel', 'Password'),
    placeholder: t('registerFields.passwordPlaceholder', 'Min. 6 characters'),
    showStrength: true,
    ...connectField("password"),
  },
  {
    type: InputTypes.PASSWORD,
    fieldLabel: t('registerFields.confirmPasswordLabel', 'Confirm password'),
    placeholder: t('registerFields.confirmPasswordPlaceholder', 'Repeat your password'),
    ...connectField("confirmPassword"),
  },
  {
    type: InputTypes.CHECKBOX,
    fieldLabel: t('registerFields.termsLabel', 'I agree to the Terms of Service and Privacy Policy'),
    ...connectField("terms"),
  },
];