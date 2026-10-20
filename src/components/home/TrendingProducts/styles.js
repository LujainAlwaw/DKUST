
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #F8FAFC;
  padding: 80px 0;
  width: 100%;
  overflow: hidden; 
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const TitleGroup = styled.div`
  max-width: 700px;
`;

export const Subtitle = styled.span`
  color: #00E676;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
`;

export const MainTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  color: #0A192F;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: #64748B;
  font-size: 0.95rem;
  margin: 0;
`;

export const ViewAllButton = styled.button`
  background: transparent;
  border: 1px solid #CBD5E1;
  color: #0A192F;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    border-color: #00E676;
    color: #00E676;
  }
`;

export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 45px; 

  @media (max-width: 768px) {
    padding: 0;
  }

  .swiper {
    width: 100%;
    padding: 10px 5px 50px 5px;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }

  .swiper-pagination {
    position: relative;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #CBD5E1;
    opacity: 1;
    border-radius: 10px;
    transition: all 0.3s ease;
    margin: 0 !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #00E676 !important;
    width: 24px !important;
    border-radius: 10px;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  ${(props) => (props.$direction === 'left' ? 'left: 0px;' : 'right: 0px;')};
  z-index: 10;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.disabled ? '#FECDD3' : '#E2E8F0')};
  background-color: ${(props) => (props.disabled ? '#FFF1F2' : '#FFFFFF')};
  color: ${(props) => (props.disabled ? '#E11D48' : '#0A192F')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  font-size: 1.1rem;

  &:hover:not(:disabled) {
    background-color: #00E676;
    color: #0A192F;
    border-color: #00E676;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1320px; 
  margin: 0 auto;
  padding-right: 0.75rem;
  padding-left: 0.75rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;