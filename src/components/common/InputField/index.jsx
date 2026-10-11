
// import { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { InputGroup, Label, StyledInput, ErrorText, PasswordWrapper, EyeIcon } from './styles';
// import PasswordStrength from '../PasswordStrength';
// export default function InputField(props) {
//   const data = props.itemObject || props;

//   const {
//     type = 'text',
//     name,
//     fieldLabel,
//     label,
//     placeholder,
//     fieldValue,
//     value, 
//     onChangeFunction,
//     onChange,
//     onBlurFunction,
//     onBlur,
//     errorMessage,
//      showStrength,
//     halfWidth,
//   } = data;

//   const [showPassword, setShowPassword] = useState(false);
//   const isPasswordType = type === 'password';
//   const inputType = isPasswordType ? (showPassword ? 'text' : 'password') : type;

//   const currentLabel = fieldLabel || label;
//   const currentValue = fieldValue !== undefined ? fieldValue : (value || '');
  
//   const handleInputChange = (e) => {
//     if (onChangeFunction) {
//       onChangeFunction(e.target.value);
//     } else if (onChange) {
//       onChange(e);
//     }
//   };

//   const handleInputBlur = (e) => {
//     if (onBlurFunction) {
//       onBlurFunction();
//     } else if (onBlur) {
//       onBlur(e);
//     }
//   };

//   return (
//     <InputGroup halfWidth={halfWidth}>
//       {currentLabel && <Label>{currentLabel}</Label>}
      
//       <PasswordWrapper>
//         <StyledInput
//           type={inputType}
//           name={name}
//           placeholder={placeholder}
//           value={currentValue}
//           onChange={handleInputChange}
//           onBlur={handleInputBlur}
//           isError={Boolean(errorMessage)}
//         />
        
//         {isPasswordType && (
//           <EyeIcon onClick={() => setShowPassword(!showPassword)}>
//             {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//           </EyeIcon>
//         )}
//       </PasswordWrapper>
// {showStrength && <PasswordStrength password={currentValue} />}
//       {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
//     </InputGroup>
//   );
// }

import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // 1. استيراد خطاف الترجمة
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { InputGroup, Label, StyledInput, ErrorText, PasswordWrapper, EyeIcon } from './styles';
import PasswordStrength from '../PasswordStrength';

export default function InputField(props) {
  const { t } = useTranslation(); // 2. تفعيل دالة الترجمة
  const data = props.itemObject || props;

  const {
    type = 'text',
    name,
    fieldLabel,
    label,
    placeholder,
    fieldValue,
    value, 
    onChangeFunction,
    onChange,
    onBlurFunction,
    onBlur,
    errorMessage,
    showStrength,
    halfWidth,
  } = data;

  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';
  const inputType = isPasswordType ? (showPassword ? 'text' : 'password') : type;

  const currentLabel = fieldLabel || label;
  const currentValue = fieldValue !== undefined ? fieldValue : (value || '');
  
  const handleInputChange = (e) => {
    if (onChangeFunction) {
      onChangeFunction(e.target.value);
    } else if (onChange) {
      onChange(e);
    }
  };

  const handleInputBlur = (e) => {
    if (onBlurFunction) {
      onBlurFunction();
    } else if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <InputGroup halfWidth={halfWidth}>
      {/* 3. ترجمة العنوان إن وجد */}
      {currentLabel && <Label>{t(currentLabel)}</Label>}
      
      <PasswordWrapper>
        <StyledInput
          type={inputType}
          name={name}
          // 4. ترجمة الـ placeholder إن وجد
          placeholder={placeholder ? t(placeholder) : ''}
          value={currentValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          isError={Boolean(errorMessage)}
        />
        
        {isPasswordType && (
          <EyeIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </EyeIcon>
        )}
      </PasswordWrapper>

      {showStrength && <PasswordStrength password={currentValue} />}
      
      {/* 5. ترجمة رسالة الخطأ إن وجدت */}
      {errorMessage && <ErrorText>{t(errorMessage)}</ErrorText>}
    </InputGroup>
  );
}