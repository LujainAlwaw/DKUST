
// // import { useFormik } from "formik";
// // import { Form } from "react-bootstrap";
// // import { loginSchema } from "../../data/loginSchema";
// // import { getLoginFields } from "./loginConfig";
// // import InputProvider from "../../components/common/InputProvider";
// // import SocialLogins from "../../components/SocialLogins";
// // import { useNavigate, Link } from "react-router-dom";
// // import { PageContainer ,CardWrapper, FooterText, Title, Subtitle ,Stylelink} from "./styles"; 

// // import { useDispatch } from "react-redux";
// // import { login } from "../../store/auth/authSlice";

// // const LoginForm = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch(); 

// //   const formik = useFormik({
// //     initialValues: {
// //       email: "",
// //       password: "",
// //       rememberMe: false,
// //     },
// //     validationSchema: loginSchema,
// //     onSubmit: (values) => {
// //       const userName = values.email ? values.email.split('@')[0] : "User";
// //       dispatch(login(userName));

// //       navigate("/LoginSuccessCard");
// //     },
// //   });

// //   const connectField = (name) => ({
// //     name,
// //     fieldValue: formik.values[name],
// //     onChangeFunction: (value) => formik.setFieldValue(name, value),
// //     onBlurFunction: () => formik.setFieldTouched(name, true),
// //     errorMessage: formik.touched[name] && formik.errors[name],
// //   });

// //   const fields = getLoginFields(connectField);

// //   return (
// //     <PageContainer>   
// //       <CardWrapper>
// //         <div className="card-top-border" />
// //         <Title>Welcome Back</Title>    
// //         <Subtitle>Sign in to your DKUST account</Subtitle>
    
// //         <Form onSubmit={formik.handleSubmit} noValidate>
// //           {fields.map((item) => (
// //             <InputProvider key={item.name} itemObject={item} />
// //           ))}

// //           <button className="submit-btn w-100" type="submit">
// //             SIGN IN
// //           </button>
// //         </Form>
      
// //         <SocialLogins />
        
// //         <FooterText className="mt-3">
// //           Don't have an account?{" "}
// //           <span className="sign-in" onClick={() => navigate("/register")} style={{ cursor: 'pointer' }}>
// //             Sign up
// //           </span>   
// //         </FooterText>
// //       </CardWrapper>
// //  <Stylelink>
// //         <Link to="/Home">Back to Home</Link>
// //       </Stylelink>
// //     </PageContainer>
// //   );
// // };

// // export default LoginForm;

// import { useFormik } from "formik";
// import { Form } from "react-bootstrap";
// import { loginSchema } from "../../data/loginSchema";
// import { getLoginFields } from "./loginConfig";
// import InputProvider from "../../components/common/InputProvider";
// import SocialLogins from "../../components/SocialLogins";

// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { PageContainer ,CardWrapper, FooterText, Title, Subtitle ,Stylelink} from "./styles"; 

// import { useDispatch } from "react-redux";
// import { login } from "../../store/auth/authSlice";
// import PathConstants from "../../routes/pathConstsnts"; 

// // [تعديل 1]: استيراد مكتبة الكوكيز وملف الـ environment لكي يراها ملف الحماية (PrivateRoutes)
// import Cookies from "js-cookie";
// import environment from "../../environment"; 

// const LoginForm = () => {
//   const navigate = useNavigate();
//   const location = useLocation(); 
//   const dispatch = useDispatch(); 

//   const from = location.state?.from || null;

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },
//     validationSchema: loginSchema,
//     onSubmit: (values) => {
//       // [تعديل 2]: حفظ التوكن في الكوكيز لكي يوافق ملف الحماية على دخولك للصفحات المحمية
//       Cookies.set(environment.TOKEN_KEY, "dummy-token-value", { expires: 7 });

//       const userName = values.email ? values.email.split('@')[0] : "User";
//       dispatch(login(userName));

//       // تمرير الـ from عبر الـ state إلى صفحة النجاح
//       navigate(PathConstants.LOGINSUCCESSCARD, { state: { from } });
//     },
//   });

//   const connectField = (name) => ({
//     name,
//     fieldValue: formik.values[name],
//     onChangeFunction: (value) => formik.setFieldValue(name, value),
//     onBlurFunction: () => formik.setFieldTouched(name, true),
//     errorMessage: formik.touched[name] && formik.errors[name],
//   });

//   const fields = getLoginFields(connectField);

//   return (
//     <PageContainer>   
//       <CardWrapper>
//         <div className="card-top-border" />
//         <Title>Welcome Back</Title>    
//         <Subtitle>Sign in to your DKUST account</Subtitle>
    
//         <Form onSubmit={formik.handleSubmit} noValidate>
//           {fields.map((item) => (
//             <InputProvider key={item.name} itemObject={item} />
//           ))}

//           <button className="submit-btn w-100" type="submit">
//             SIGN IN
//           </button>
//         </Form>
      
//         <SocialLogins />
        
//         <FooterText className="mt-3">
//           Don't have an account?{" "}
//           <span className="sign-in" onClick={() => navigate(PathConstants.REGISTER)} style={{ cursor: 'pointer' }}>
//             Sign up
//           </span>   
//         </FooterText>
//       </CardWrapper>
//       <Stylelink>
//         <Link to={PathConstants.HOME}>Back to Home</Link>
//       </Stylelink>
//     </PageContainer>
//   );
// };

// export default LoginForm;


import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // [إضافة الترجمة]: استيراد خطاف الترجمة
import { getLoginSchema } from "../../data/loginSchema"; // [تعديل السكيما]: استيراد الدالة بدلاً من الكائن الثابت
import { getLoginFields } from "./loginConfig";
import InputProvider from "../../components/common/InputProvider";
import SocialLogins from "../../components/SocialLogins";

import { useNavigate, useLocation, Link } from "react-router-dom";
import { PageContainer ,CardWrapper, FooterText, Title, Subtitle ,Stylelink} from "./styles"; 

import { useDispatch } from "react-redux";
import { login } from "../../store/auth/authSlice";
import PathConstants from "../../routes/pathConstsnts"; 

import Cookies from "js-cookie";
import environment from "../../environment"; 

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const dispatch = useDispatch(); 
  const { t } = useTranslation(); // [إضافة الترجمة]: تفعيل دالة الترجمة

  const from = location.state?.from || null;

  // [تعديل السكيما]: تمرير دالة الترجمة t للسكيما لكي تترجم رسائل الأخطاء
  const validationSchema = getLoginSchema(t);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema, // استخدام السكيما الديناميكية هنا
    onSubmit: (values) => {
      Cookies.set(environment.TOKEN_KEY, "dummy-token-value", { expires: 7 });

      const userName = values.email ? values.email.split('@')[0] : "User";
      dispatch(login(userName));

      navigate(PathConstants.LOGINSUCCESSCARD, { state: { from } });
    },
  });

  const connectField = (name) => ({
    name,
    fieldValue: formik.values[name],
    onChangeFunction: (value) => formik.setFieldValue(name, value),
    onBlurFunction: () => formik.setFieldTouched(name, true),
    errorMessage: formik.touched[name] && formik.errors[name],
  });

  const fields = getLoginFields(connectField ,t);

  return (
    <PageContainer>   
      <CardWrapper>
        <div className="card-top-border" />
        <Title>{t('login.welcomeBack', 'Welcome Back')}</Title>    
        <Subtitle>{t('login.subtitle', 'Sign in to your DKUST account')}</Subtitle>
    
        <Form onSubmit={formik.handleSubmit} noValidate>
          {fields.map((item) => (
            <InputProvider key={item.name} itemObject={item} />
          ))}

          <button className="submit-btn w-100" type="submit">
            {t('login.signInBtn', 'SIGN IN')}
          </button>
        </Form>
      
        <SocialLogins />
        
        <FooterText className="mt-3">
          {t('login.noAccount', "Don't have an account?")}{" "}
          <span className="sign-in" onClick={() => navigate(PathConstants.REGISTER)} style={{ cursor: 'pointer' }}>
            {t('login.signUpLink', 'Sign up')}
          </span>   
        </FooterText>
      </CardWrapper>
      <Stylelink>
        <Link to={PathConstants.HOME}>{t('login.backToHome', 'Back to Home')}</Link>
      </Stylelink>
    </PageContainer>
  );
};

export default LoginForm;