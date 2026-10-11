import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  width: ${(props) => (props.halfWidth ? '48%' : '100%')};
`;
export const Label = styled.label`
  display: block;
  font-size: 13px;
  font-weight: var(--fw-bold);
  color: var(--color-text-main);
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid ${(props) => (props.isError ? 'var(--color-error)' : 'var(--color-border)')};
  background-color: ${(props) => (props.isError ? 'var(--bg-error)' : 'var(--color-white)')};
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${(props) => (props.isError ? 'var(--color-error)' : 'var(--brand-green)')};
    box-shadow: 0 0 0 3px ${(props) => (props.isError ? 'rgba(231, 76, 60, 0.15)' : 'rgba(0, 176, 80, 0.15)')};
  }
`;

export const ErrorText = styled.div`
  color: var(--color-error);
  font-size: 11px;
  margin-top: 2px;
`;



export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const EyeIcon = styled.span`
  position: absolute;
  right: 12px;
  cursor: pointer;
  color: #888;
  font-size: 18px;
`;