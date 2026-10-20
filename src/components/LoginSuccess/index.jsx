

import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import { FaCheck } from 'react-icons/fa';
import { PageContainer, SuccessWrapper, IconContainer, Title, Subtitle, ActionButton, Stylelink } from './styles';
import PathConstants from '../../routes/pathConstsnts';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/authSelectors';

export default function LoginSuccessCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation(); 
  
  const user = useSelector(selectUser);
  const displayName = user ? user.name : t('loginSuccess.defaultUser', 'User');

  const destination = location.state?.from?.pathname || PathConstants.HOME;

  return (
    <PageContainer>
      <SuccessWrapper>
        <div className="card-top-border" />

        <Title>{t('loginSuccess.welcomeBack', 'Welcome Back,')} {displayName}</Title>
        <Subtitle>{t('loginSuccess.signSubtitle', 'Sign in to your DKUST account')}</Subtitle>

        <IconContainer>
          <FaCheck />
        </IconContainer>

        <Title style={{ fontSize: '1.4rem', marginTop: '10px' }}>{t('loginSuccess.title', 'Login Successful!')}</Title>
        <Subtitle>
          {t('loginSuccess.successMessage', 'You have been signed in successfully.')}
        </Subtitle>

        <ActionButton onClick={() => navigate(destination, { replace: true })}>
          {t('loginSuccess.continueBtn', 'Continue')}
        </ActionButton>
      </SuccessWrapper>

      <Stylelink>
        <Link to={PathConstants.HOME}>{t('loginSuccess.backToHome', 'Back to Home')}</Link>
      </Stylelink>
    </PageContainer>
  );
}