
// import { useTranslation } from 'react-i18next';
// import { AiOutlineShoppingCart } from 'react-icons/ai';


// import {
//  HeroContainer,
//  HeroContent,
//  Title,
//  Description,
//  ButtonGroup,
//  PrimaryBtn,
//  SecondaryBtn,
//  StatsGrid
// } from './styles';
// import StatusBadge from '../../status-badge';
// import { StatCard } from '../StatCard';

// export const HeroSection = () => {
//  const { t } = useTranslation();

//  const statsData = [
//     { number: '12K+', labelKey: 'stats.clients' },
//     { number: '340+', labelKey: 'stats.projects' },
//     { number: '98%', labelKey: 'stats.satisfaction' },
//     { number: '24/7', labelKey: 'stats.support' },
//   ];

//   return (
//     <HeroContainer>
//       <HeroContent>
 
//         <StatusBadge text="hero.badge" variant="public" />

//         <Title>
//           {t('hero.titlePart')}{' '}
//           <span>{t('hero.titleHighlight')}</span>
//         </Title>

//         <Description>{t('hero.description')}</Description>

//         <ButtonGroup>
//           <PrimaryBtn>
//             <AiOutlineShoppingCart size={18} />
//             {t('hero.explore')}
//           </PrimaryBtn>
//           <SecondaryBtn>{t('hero.quiz')}</SecondaryBtn>
//         </ButtonGroup>
//       </HeroContent>

//       <StatsGrid>
//         {statsData.map((stat, idx) => (
//           <StatCard 
//             key={idx} 
//             number={stat.number} 
//             label={t(stat.labelKey)} 
//           />
//         ))}
//       </StatsGrid>
//     </HeroContainer>
//   );
// };

// export default HeroSection;

// src/components/Home/HeroSection.jsx
import { useTranslation } from 'react-i18next';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import {
  HeroContainer,
  HeroContent,
  Title,
  Description,
  ButtonGroup,
  StatsGrid
} from './styles';
import Button from '../../common/buttons/CustomBtn';
import StatusBadge from '../../status-badge';
import { StatCard } from '../StatCard';

export const HeroSection = () => {
  const { t } = useTranslation();

  const statsData = [
    { number: '12K+', labelKey: 'stats.clients' },
    { number: '340+', labelKey: 'stats.projects' },
    { number: '98%', labelKey: 'stats.satisfaction' },
    { number: '24/7', labelKey: 'stats.support' },
  ];

  return (
    <HeroContainer   >
        <div className='container'>
      <HeroContent>
        {/* استخدام مكون الحالة المحدث */}
        <StatusBadge text="hero.badge" variant="public" />

        <Title>
          {t('hero.titlePart')}{' '}
          <span>{t('hero.titleHighlight')}</span>
        </Title>

        <Description>{t('hero.description')}</Description>

        <ButtonGroup>
          {/* الزر الأساسي الأخضر مع تمرير الأيقونة مباشرة */}
          <Button
            text="hero.explore"
            bgColor="#00E676"
            color="#0A192F"
            icon={AiOutlineShoppingCart}
            iconPosition="start"
            size="md"
          />

          {/* الزر الثانوي الشفاف */}
          <Button
            text="hero.quiz"
            bgColor="transparent"
            color="#FFFFFF"
            borderColor="rgba(255, 255, 255, 0.3)"
            size="md"
          />
        </ButtonGroup>
      </HeroContent>

      <StatsGrid>
        {statsData.map((stat, idx) => (
          <StatCard 
            key={idx} 
            number={stat.number} 
            label={t(stat.labelKey)} 
          />
        ))}
      </StatsGrid>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;