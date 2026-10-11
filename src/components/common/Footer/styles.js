

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var( --bg-footer);
  padding: 50px 60px 20px;
  border-top: 1px solid var(--color-border);
  color: var(--text-muted);
  font-size: 13px;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 40px auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-text-main);
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }

  a {
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--main-blue);
    }
  }
`;

export const NewsletterBox = styled.div`
  display: flex;
  margin-top: 6px;

  input {
    padding: 10px 14px;
    background-color: var(--color-white);
    border: 1px solid var(--color-border);
    color: var(--color-text-main);
    border-radius: 4px 0 0 4px;
    outline: none;
    font-size: 13px;
    flex: 1;

    &:focus {
      border-color: var(--main-blue);
    }
  }

  button {
    background-color: var(--main-blue); 
    color: white;
    border: none;
    padding: 0 16px;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const BottomBar = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
  color: var(--text-muted);
  font-size: 12px;
`;