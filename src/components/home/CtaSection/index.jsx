import { useTranslation } from 'react-i18next';

import {
  CtaContainer,
  CtaWrapper,
  Title,
  Description,
  ButtonGroup
} from './styles';
import Button from '../../common/buttons/CustomBtn';

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <CtaContainer>
      <div className="container">
        <CtaWrapper>
          <Title>{t('cta.title')}</Title>
          <Description>{t('cta.description')}</Description>
          
          <ButtonGroup>
            <Button
              text="cta.createAccount"
              bgColor="#00E676"
              color="#0A192F"
              size="md"
            />

            <Button
              text="cta.signIn"
              bgColor="transparent"
              color="#FFFFFF"
              borderColor="rgba(255, 255, 255, 0.3)"
              size="md"
            />
          </ButtonGroup>
        </CtaWrapper>
      </div>
    </CtaContainer>
  );
}