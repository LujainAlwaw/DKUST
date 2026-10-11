import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: var(   --bg-card);
  width: 100%;
  max-width: 650px;
  padding: 25px 30px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  margin-bottom: 20px;
  text-align: left;
`;

export const QuestionTitle = styled.h4`
  font-family: var(--font-family);
  font-weight: var(--fw-bold);
  color: var(--color-text-main);
  font-size: 16px;
  margin-bottom: 18px;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  font-family: var(--font-family);
  color: var(--color-text-main);
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: var(--main-blue);
  }

  ${({ selected, isSubmitted }) => 
    selected && !isSubmitted && `
      background-color: var(--bg-success-light);
      border-color: var(--color-success);
      color: var(--color-success);
      font-weight: var(--fw-bold);
    `}

  &.correct {
    background-color: var(--bg-success-light);
    border-color: var(--color-success);
    color: var(--color-success);
    font-weight: var(--fw-bold);

    .feedback-text {
      position: absolute;
      right: 15px;
      color: var(--color-success);
      font-size: 13px;
    }
  }

  &.incorrect {
    background-color: var(--bg-error);
    border-color: var(--color-error);
    color: var(--color-error);
  }
`;

export const OptionInput = styled.input`
  margin-right: 10px;
  accent-color: var(--brand-green);
  cursor: pointer;
`;