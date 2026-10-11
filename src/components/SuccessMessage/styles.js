
import styled from 'styled-components';

export const SuccessWrapper = styled.div`
  background: var(--bg-card);
  width: 100%;
  max-width: 480px;
  padding: 50px 35px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
  text-align: center;
  margin: 20px auto;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  .card-top-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background-color: var(--brand-green);
  }

  
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

export const IconContainer = styled.div`
  width: 65px;
  height: 65px;
  background-color: var(--color-primary-light);
  color: var(--brand-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin: 0 auto 20px auto;
`;

export const Title = styled.h2`
  font-weight: var(--fw-bold);
  color: var(--color-text-main);
  font-size: 24px;
  margin-bottom: 10px;
  font-family: var(--font-family);
`;

export const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 30px;
  line-height: 1.5;
  font-family: var(--font-family);
`;

export const ActionButton = styled.button`
  width: 100%;
  background-color: var(--brand-green);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-sm);
  padding: 12px;
  font-weight: var(--fw-medium);
  font-size: 15px;
  cursor: pointer;
  font-family: var(--font-family);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--brand-green-hover);
  }
`;

export const Stylelink = styled.div`
  margin-top: 15px;

  a {
    color: var( --text-muted);
    font-weight: var(--fw-bold);
    text-decoration: none;
    font-family: var(--font-family);

    &:hover {
      text-decoration: underline;
    }
  } 
`;
export const PageContainer = styled.div`
  background-color: var(--bg-color);
  color: var(--color-text-main);
  min-height: 100vh;
  width: 100%;
`;


