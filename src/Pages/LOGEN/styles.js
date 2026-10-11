


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
  background-color: var( --bg-card);
  width: 100%;
  max-width: 440px;
  padding: 40px 35px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  .card-top-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background-color: var(--brand-green);
  }
`;

export const Title = styled.h2`
  font-family: var(--font-family);
  font-weight: var(--fw-bold);
  color: var(--color-text-main);
  font-size: 24px;
  margin-bottom: 6px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-family: var(--font-family);
  font-weight: var(--fw-medium);
  color: var(--text-muted);
  font-size: 13px;
  margin-bottom: 25px;
  text-align: center;
`;

export const FooterText = styled.p`
  font-family: var(--font-family);
  color: var(--text-muted);
  font-size: 13px;
  margin-top: 20px;
  text-align: center;

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