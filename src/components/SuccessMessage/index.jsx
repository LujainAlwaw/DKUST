

import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { FaCheck } from 'react-icons/fa';
import { SuccessWrapper, IconContainer, Title, Subtitle, ActionButton, Stylelink, PageContainer } from './styles';
import PathConstants from '../../routes/pathConstsnts';

export default function SuccessCard({ userName = "User" }) {
  const { t } = useTranslation(); 
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <SuccessWrapper>
          <div className="card-top-border" />

          <IconContainer>
            <FaCheck />
          </IconContainer>

          <Title>{t('successMessage.accountCreated', 'Account Created!')}</Title>
          <Subtitle>
            {t('successMessage.welcomeMsg', 'Welcome, {{userName}}! Your account has been created successfully.', { userName })}
          </Subtitle>

          <ActionButton onClick={() => navigate(PathConstants.LOGIN)}>
            {t('successMessage.goToLogin', 'Go to Login')}
          </ActionButton>
        </SuccessWrapper>

        <Stylelink>
          <Link to="/Home">{t('successMessage.backToHome', 'Back to Home')}</Link>
        </Stylelink>
      </div>
    </PageContainer>
  );
}