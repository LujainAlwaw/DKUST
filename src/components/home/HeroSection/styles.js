
// import styled from 'styled-components';

// export const HeroContainer = styled.section`
//   background-color: #0A192F;
//   color: #FFFFFF;
//   padding: 60px 5% 80px 5%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 40px;
//   position: relative;
  
//   @media (max-width: 968px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// export const HeroContent = styled.div`
//   max-width: 600px;
//   text-align: start;

//   [dir="rtl"] & {
//     text-align: start;
//   }

//   @media (max-width: 968px) {
//     text-align: center;
//   }
// `;

// export const Title = styled.h1`
//   font-size: 3rem;
//   font-weight: 800;
//   line-height: 1.15;
//   margin-bottom: 20px;

//   span {
//     color: #00E676;
//     display: inline-block;
//   }
// `;

// export const Description = styled.p`
//   color: #8892B0;
//   font-size: 0.95rem;
//   line-height: 1.6;
//   margin-bottom: 30px;
//   max-width: 520px;

//   @media (max-width: 968px) {
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

// export const ButtonGroup = styled.div`
//   display: flex;
//   gap: 16px;
//   align-items: center;
  
//   @media (max-width: 968px) {
//     justify-content: center;
//   }
// `;

// export const PrimaryBtn = styled.button`
//   background-color: #00E676;
//   color: #0A192F;
//   border: none;
//   padding: 12px 24px;
//   font-weight: 700;
//   font-size: 0.9rem;
//   border-radius: 8px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #00C853;
//   }
// `;

// export const SecondaryBtn = styled.button`
//   background: transparent;
//   color: #FFFFFF;
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   padding: 12px 24px;
//   font-weight: 600;
//   font-size: 0.9rem;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: border-color 0.3s ease, color 0.3s ease;

//   &:hover {
//     border-color: #00E676;
//     color: #00E676;
//   }
// `;

// export const StatsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 16px;
//   width: 100%;
//   max-width: 440px;

//   @media (max-width: 540px) {
//     grid-template-columns: 1fr;
//   }
// `;




// src/components/Home/HeroSection.styles.js
import styled from 'styled-components';

export const HeroContainer = styled.section`
  background-color: #0A192F;
  color: #FFFFFF;
  padding: 60px 5% 80px 5%;

  position: relative;
  .container{
 
 display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  }
  
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  text-align: start;

  [dir="rtl"] & {
    text-align: start;
  }

  @media (max-width: 968px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 20px;

  span {
    color: #00E676;
    display: inline-block;
  }
`;

export const Description = styled.p`
  color: #8892B0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 520px;

  @media (max-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 440px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;