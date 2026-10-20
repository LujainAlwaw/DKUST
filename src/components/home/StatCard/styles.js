import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 230, 118, 0.3);
  }
`;

export const StatNumber = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #00E676;
  margin: 0 0 6px 0;
`;

export const StatLabel = styled.p`
  font-size: 0.85rem;
  color: #A0AEC0;
  margin: 0;
`;