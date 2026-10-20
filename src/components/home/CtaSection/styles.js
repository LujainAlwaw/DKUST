import styled from 'styled-components';

export const CtaContainer = styled.section`
  background-color: #0A192F; 
  color: #FFFFFF;
  padding: 80px 0;
  text-align: center;
`;

export const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: #FFFFFF;
`;

export const Description = styled.p`
  color: #8892B0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;