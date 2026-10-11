import styled from 'styled-components';

export const CheckboxStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  .form-check-input {
    cursor: pointer;
  }

  .form-check-label {
    cursor: pointer;
    font-size: 14px;
  }

  .field-error {
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 0;
  }
`;