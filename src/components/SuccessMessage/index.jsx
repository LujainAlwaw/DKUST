// import { useNavigate, Link } from 'react-router-dom';
// import { FaCheck } from 'react-icons/fa';
// import{SuccessWrapper,IconContainer,Title,Subtitle,ActionButton,Stylelink,PageContainer }from "./styles"
// import PathConstants from '../../routes/pathConstsnts';
// export default function SuccessCard({ userName = "User" }) {
//   const navigate = useNavigate();

//   return (
//     <PageContainer>
//     <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
//       <SuccessWrapper>
//         <div className="card-top-border" />
        
//         <IconContainer>
//           <FaCheck />
//         </IconContainer>

//         <Title>Account Created!</Title>
//         <Subtitle>
//           Welcome, {userName}! Your account has been created successfully.
//         </Subtitle>

//         <ActionButton onClick={() => navigate(PathConstants.LOGIN)}>
//           Go to Login
//         </ActionButton>
//       </SuccessWrapper>

//       <Stylelink >
//         <Link to="/Home">
//           Back to Home
//         </Link>
//       </Stylelink>
//     </div>
//     </PageContainer>
//   );
// }

import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // [إضافة الترجمة]: استيراد خطاف الترجمة
import { FaCheck } from 'react-icons/fa';
import { SuccessWrapper, IconContainer, Title, Subtitle, ActionButton, Stylelink, PageContainer } from './styles';
import PathConstants from '../../routes/pathConstsnts';

export default function SuccessCard({ userName = "User" }) {
  const { t } = useTranslation(); // [إضافة الترجمة]: تفعيل دالة الترجمة
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