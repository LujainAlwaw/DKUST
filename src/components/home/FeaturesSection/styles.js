import styled from 'styled-components';

export const Section = styled.section`
  background-color: #FFFFFF;
  /* padding: 80px 0; */
  color: #0A192F;
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  /* gap: 30px; */
  flex-wrap: wrap;
`;

export const FeatureCard = styled.div`
  flex: 1;
  /* min-width: 280px;
  max-width: 360px; */
  text-align: center;
  padding: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* width: 56px;
  height: 56px; */
  border-radius: 50%;
  background-color: rgba(0, 230, 118, 0.1);
  color: #00E676;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0A192F;
`;

export const FeatureDesc = styled.p`
  font-size: 0.9rem;
  color: #656D78;
  line-height: 1.6;
  margin: 0;
`;