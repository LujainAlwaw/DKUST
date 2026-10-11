

import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px; 
  width: ${(props) => (props.halfWidth ? '48%' : '100%')};
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #333;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${(props) => (props.isError ? '#ff4d4f' : '#d9d9d9')};
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => (props.isError ? '#ff4d4f' : '#28a745')}
  }
`;

export const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const EyeIcon = styled.span`
  position: absolute;
  right: 12px;
  cursor: pointer;
  color: #888;
  display: flex;
  align-items: center;
`;