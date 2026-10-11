import styled from 'styled-components';

export const QuizContainer = styled.div`
  background-color: var(--bg-color);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  @media (max-width: 1024px) {
    max-width: 440px;
    padding: 40px 30px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 30px 20px;
    margin: 30px auto;
  }

  @media (max-width: 375px) {
    max-width: 95%;
    padding: 20px 15px;
    margin: 20px auto;
  }

`;

export const HeroSection = styled.div`
  background-color: var( --main-blue);
  width: 100%;
  padding: 40px 20px 60px 20px;
  text-align: center;
  color: var(--color-white);
  margin-bottom: 40px;

  h2 {
    font-family: var(--font-family);
    font-weight: var(--fw-bold);
    font-size: 28px;
    margin-bottom: 8px;
  }

  p {
    font-family: var(--font-family);
    font-weight: var(--fw-medium);
    color: var(--text-muted);
    font-size: 14px;
    margin-bottom: 15px;
  }

  .badge {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 20px;
    font-weight: var(--fw-bold);
    font-size: 14px;
    
    background-color: ${({ isSubmitted, score, total }) => 
      !isSubmitted ? 'rgba(255, 255, 255, 0.15)' : 
      score === total ? 'var(--color-success)' : 
      score > 0 ? 'var(--color-warning)' : 'var(--color-error)'};
      
    color: ${({ isSubmitted, score, total }) => 
      !isSubmitted || score === total ? 'var(--color-white)' : 'var(--color-text-main)'};
  }
`;

export const MainTitle = styled.h3`
  font-family: var(--font-family);
  font-weight: var(--fw-bold);
  font-size: 20px;
  color: var(--color-text-main);
  margin-bottom: 25px;
  text-align: center;
`;

export const QuestionsWrapper = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const ResultBox = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 20px;
  border-radius: var(--radius-md);
  text-align: center;
  margin-bottom: 20px;
  
  background-color: ${({ score, total }) => 
    score === total ? 'var(--bg-success-light)' : score > 0 ? 'var(   --color-warning-light)' : 'var( --bg-error)'};
  
  border: 1px solid ${({ score, total }) => 
    score === total ? 'var(--color-success)' : score > 0 ? 'var(--color-warning)' : 'var(--color-error)'};

  h3 {
    font-size: 18px;
    font-weight: var(--fw-bold);
    margin-bottom: 6px;
    color: var(--color-text-main);
  }

  p {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0;
  }
`;

export const ActionButtonsContainer = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  padding: 0 20px;

  .try-again-btn {
    background-color: var(--brand-green);
    color: var(--color-white);
    border: none;
    border-radius: var(--radius-sm);
    padding: 10px 24px;
    font-weight: var(--fw-bold);
    cursor: pointer;

    &:hover {
      background-color: var(--brand-green-hover);
    }
  }

  .back-btn {
    background-color: var(   --bg-footer);
    color: var(--color-text-main);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 10px 24px;
    font-weight: var(--fw-medium);
    cursor: pointer;

    &:hover {
      background-color: var(--bg-color);
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--brand-green);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-sm);
  padding: 12px;
  font-weight: var(--fw-bold);
  font-size: 15px;
  cursor: pointer;
  width: 100%;
  max-width: 650px;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--brand-green-hover);
  }
`;
