

// import { useNavigate, Link } from 'react-router-dom';
// import { FaCheck } from 'react-icons/fa';
// import { PageContainer, SuccessWrapper, IconContainer, Title, Subtitle, ActionButton, Stylelink } from './styles';

// import { useSelector } from 'react-redux';
// import { selectUser } from '../../store/auth/authSelectors';
// export default function LoginSuccessCard() {
//   const navigate = useNavigate();
  
//   const user = useSelector(selectUser);
//   const displayName = user ? user.name : "User";

//   return (
//     <PageContainer>
//       <SuccessWrapper>
//         <div className="card-top-border" />

//         <Title>Welcome Back, {displayName}</Title>
//         <Subtitle>Sign in to your DKUST account</Subtitle>

//         <IconContainer>
//           <FaCheck />
//         </IconContainer>

//         <Title style={{ fontSize: '1.4rem', marginTop: '10px' }}>Login Successful!</Title>
//         <Subtitle>
//           You have been signed in successfully.
//         </Subtitle>

//         <ActionButton onClick={() => navigate("/home")}>
//           Go to Home
//         </ActionButton>
//       </SuccessWrapper>

//       <Stylelink>
//         <Link to="/Home">Back to Home</Link>
//       </Stylelink>
//     </PageContainer>
//   );
// }

// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { FaCheck } from 'react-icons/fa';
// import { PageContainer, SuccessWrapper, IconContainer, Title, Subtitle, ActionButton, Stylelink } from './styles';
// import PathConstants from '../../routes/pathConstsnts'; // استيراد الثوابت للوجهة الافتراضية

// import { useSelector } from 'react-redux';
// import { selectUser } from '../../store/auth/authSelectors';

// export default function LoginSuccessCard() {
//   const navigate = useNavigate();
//   const location = useLocation(); // [تعديل]: أضفنا استدعاء location لالتقاط الوجهة المحفوظة
  
//   const user = useSelector(selectUser);
//   const displayName = user ? user.name : "User";

//   // [تعديل]: جلب الصفحة المقصودة التي منعته من الدخول، وإلا فالافتراضي هو الهوم
//   const destination = location.state?.from?.pathname || PathConstants.HOME;

//   return (
//     <PageContainer>
//       <SuccessWrapper>
//         <div className="card-top-border" />

//         <Title>Welcome Back, {displayName}</Title>
//         <Subtitle>Sign in to your DKUST account</Subtitle>

//         <IconContainer>
//           <FaCheck />
//         </IconContainer>

//         <Title style={{ fontSize: '1.4rem', marginTop: '10px' }}>Login Successful!</Title>
//         <Subtitle>
//           You have been signed in successfully.
//         </Subtitle>

//         {/* [تعديل]: توجيه المستخدم إلى وجهته الأصلية (destination) عند الضغط بدلاً من "/home" الثابتة */}
//         <ActionButton onClick={() => navigate(destination, { replace: true })}>
//           Continue
//         </ActionButton>
//       </SuccessWrapper>

//       <Stylelink>
//         <Link to={PathConstants.HOME}>Back to Home</Link>
//       </Stylelink>
//     </PageContainer>
//   );
// }


import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // [إضافة الترجمة]: استيراد خطاف الترجمة
import { FaCheck } from 'react-icons/fa';
import { PageContainer, SuccessWrapper, IconContainer, Title, Subtitle, ActionButton, Stylelink } from './styles';
import PathConstants from '../../routes/pathConstsnts'; // استيراد الثوابت للوجهة الافتراضية

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/authSelectors';

export default function LoginSuccessCard() {
  const { t } = useTranslation(); // [إضافة الترجمة]: تفعيل دالة الترجمة
  const navigate = useNavigate();
  const location = useLocation(); // [تعديل]: أضفنا استدعاء location لالتقاط الوجهة المحفوظة
  
  const user = useSelector(selectUser);
  const displayName = user ? user.name : t('loginSuccess.defaultUser', 'User');

  // [تعديل]: جلب الصفحة المقصودة التي منعته من الدخول، وإلا فالافتراضي هو الهوم
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

        {/* [تعديل]: توجيه المستخدم إلى وجهته الأصلية (destination) عند الضغط بدلاً من "/home" الثابتة */}
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