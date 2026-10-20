import { useTranslation } from 'react-i18next';
import { FiShield, FiZap, FiStar } from 'react-icons/fi';
import {
  Section,
  FeaturesWrapper,
  FeatureCard,
  IconBox,
  FeatureTitle,
  FeatureDesc
} from './styles';

export default function FeaturesSection() {
  const { t } = useTranslation();

  const featuresList = [
    {
      icon: FiShield,
      titleKey: 'features.security.title',
      descKey: 'features.security.desc',
    },
    {
      icon: FiZap,
      titleKey: 'features.delivery.title',
      descKey: 'features.delivery.desc',
    },
    {
      icon: FiStar,
      titleKey: 'features.support.title',
      descKey: 'features.support.desc',
    },
  ];

  return (
    <Section>
      <div className="container">
        <FeaturesWrapper>
          {featuresList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <FeatureCard key={index}>
                <IconBox>
                  <IconComponent />
                </IconBox>
                <FeatureTitle>{t(item.titleKey)}</FeatureTitle>
                <FeatureDesc>{t(item.descKey)}</FeatureDesc>
              </FeatureCard>
            );
          })}
        </FeaturesWrapper>
      </div>
    </Section>
  );
}