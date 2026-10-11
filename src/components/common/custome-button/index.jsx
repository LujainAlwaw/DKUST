


import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { InputGroup, Label, StyledInput, ErrorText, PasswordWrapper, EyeIcon } from './styles';
import { useTranslation } from 'react-i18next';

export default function InputField({ itemObject, ...flatProps }) {
  const {
    type = 'text',
    name,
    fieldLabel,
    placeholder,
    fieldValue,
    onChangeFunction,
    onBlurFunction,
    errorMessage,
    halfWidth,
  } = itemObject ?? flatProps;
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';
  const inputType = isPasswordType ? (showPassword ? 'text' : 'password') : type;

  return (
    <InputGroup halfWidth={halfWidth}>
      {fieldLabel && <Label>{t(fieldLabel)}</Label>}
      
      <PasswordWrapper>
        <StyledInput
          type={inputType}
          name={name}
          placeholder={t(placeholder)}
          value={fieldValue || ''}
          onChange={(e) => onChangeFunction?.(e.target.value)}
          onBlur={() => onBlurFunction?.()}
          isError={Boolean(errorMessage)}
        />
        
        {isPasswordType && (
          <EyeIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </EyeIcon>
        )}
      </PasswordWrapper>

      {errorMessage && <ErrorText>{t(errorMessage)}</ErrorText>}
    </InputGroup>
  );
}