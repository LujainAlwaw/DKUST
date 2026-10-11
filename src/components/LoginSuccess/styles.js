

import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
  padding: 20px;
  font-family: var(--font-family);
  
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

export const SuccessWrapper = styled.div`
  background-color: var(--bg-card);
  width: 100%;
  max-width: 480px;
  padding: 40px 30px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  .card-top-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background-color: var(--brand-green);
  }
`;

export const IconContainer = styled.div`
  width: 65px;
  height: 65px;
  background-color: var(--bg-success-light);
  color: var(--color-success);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  margin: 20px 0 15px 0;
`;

export const Title = styled.h2`
  color: var(--color-text-main);
  font-size: 22px;
  font-weight: var(--fw-bold);
  margin-bottom: 6px;
`;

export const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 14px;
  font-weight: var(--fw-medium);
  margin-bottom: 24px;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: var(--brand-green);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius);
  font-size: 15px;
  font-weight: var(--fw-bold);
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 10px;

  &:hover {
    background-color: var(--brand-green-hover);
  }
`;

export const Stylelink = styled.div`
  margin-top: 20px;
  
  a {
    color: var( --text-muted);
    font-size: 14px;
    font-weight: var(--fw-medium);
    text-decoration: underline;
    
    &:hover {
      opacity: 0.85;
    }
  }
`;