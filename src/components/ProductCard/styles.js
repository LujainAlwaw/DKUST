import styled from 'styled-components';

export const CardWrapper = styled.div`
background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #E2E8F0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
`;

export const ImageContainer = styled.div`
  height: 190px;
  background-color: #1E293B; 
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 3rem;
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;

  [dir="rtl"] & {
    left: auto;
    right: 14px;
  }
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MetaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #64748B;
  font-size: 0.85rem;
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #F59E0B;
  font-weight: 700;
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0A192F;
  margin-bottom: 8px;
`;

export const CardDesc = styled.p`
  color: #64748B;
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #F1F5F9;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
  color: #0A192F;
`;

export const PricePeriod = styled.span`
  font-size: 0.75rem;
  color: #94A3B8;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;