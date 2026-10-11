

import styled from 'styled-components';


export const PageContainer = styled.div`
  background-color: var( --main-blue);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 40px 20px;
  transition: background-color 0.3s ease;

  
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
export const CardWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 50px 35px;
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
  margin: 50px auto;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background-color: var(--brand-green);
  }


  .submit-btn {
    width: 100%;
    background-color: var(--brand-green);
    color: var(--color-white);
    border: none;
    border-radius: var(--radius-sm);
    padding: 12px;
    font-weight: var(--fw-bold);
    font-size: 15px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    cursor: pointer;
    font-family: var(--font-family);
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--brand-green-hover);
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: var(--fw-bold);
  color: var(--color-text-main);
  font-size: 24px;
  margin-bottom: 8px;
  font-family: var(--font-family);
`;

export const Subtitle = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
  margin-bottom: 30px;
  font-family: var(--font-family);
  font-weight: var(--fw-medium);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: space-between;
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 25px;
  margin-bottom: 0;
  font-family: var(--font-family);

  .sign-in {
    color: var(--brand-green);
    font-weight: var(--fw-bold);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
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