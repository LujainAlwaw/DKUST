
// import { useFormik } from "formik";
// import { Form } from "react-bootstrap";
// import { registerSchema } from "../../data/registerSchema";
// import { getRegisterFields } from "./registerConfig";
// import InputProvider from "../../components/common/InputProvider";
// import { CardWrapper, Row,FooterText ,Title,Subtitle, PageContainer,Stylelink} from "./styles";
// import SocialLogins from "../../components/SocialLogins";
// import { useNavigate, Link } from "react-router-dom";
// import PathConstants from "../../routes/pathConstsnts";
// const Register= () => {
//   const navigate = useNavigate();
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       terms: false,
//     },
//     validationSchema: registerSchema,
   
//     onSubmit: () => {
//       navigate(PathConstants.SUCCESSCARD);
//     },
//   });

//   const connectField = (name) => ({
//     name,
//     fieldValue: formik.values[name],
//     onChangeFunction: (value) => formik.setFieldValue(name, value),
//     onBlurFunction: () => formik.setFieldTouched(name, true),
//     errorMessage: formik.touched[name] && formik.errors[name],
//   });

//   const fields = getRegisterFields(connectField);

//   return (
// <PageContainer>
//      <div className="container d-flex  flex-column justify-content-center align-items-center ">   
//        <CardWrapper>
//         <Title>Create Account</Title>    
//           <Subtitle>Join DKUST today — it's free</Subtitle>
    
      
//         <Form onSubmit={formik.handleSubmit} noValidate>
//           <Row>
//             {fields.map((item) => (
//               <InputProvider key={item.name} itemObject={item} />
//             ))}
//           </Row>

//           <button className="submit-btn" type="submit">
//             Create account
//           </button>
//         </Form>
//          <SocialLogins />
//            <FooterText>
//        Already have an account?<span className="sign-in" onClick={() => navigate(PathConstants.LOGIN)}>
//             Sign in
//           </span>   
//          </FooterText>
//      </CardWrapper>
     
//     </div>

//      <Stylelink>
//             <Link to="/Home">Back to Home</Link>
//           </Stylelink>
//     </PageContainer>
//   );
// };


// export default Register;


import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // استيراد الترجمة
import { getRegisterSchema } from "../../data/registerSchema"; // استيراد دالة السكيما
import { getRegisterFields } from "./registerConfig"; // استيراد دالة الحقول
import InputProvider from "../../components/common/InputProvider";
import { CardWrapper, Row, FooterText, Title, Subtitle, PageContainer, Stylelink } from "./styles";
import SocialLogins from "../../components/SocialLogins";
import { useNavigate, Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstsnts";

const Register = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // تفعيل الترجمة

  // استدعاء السكيما الديناميكية وتمرير دالة الترجمة t
  const validationSchema = getRegisterSchema(t);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema, // استخدام السكيما المترجمة
   
    onSubmit: () => {
      navigate(PathConstants.SUCCESSCARD);
    },
  });

  const connectField = (name) => ({
    name,
    fieldValue: formik.values[name],
    onChangeFunction: (value) => formik.setFieldValue(name, value),
    onBlurFunction: () => formik.setFieldTouched(name, true),
    errorMessage: formik.touched[name] && formik.errors[name],
  });

  // تمرير دالة الترجمة t إلى دالة الحقول
  const fields = getRegisterFields(connectField, t);

  return (
    <PageContainer>
      <div className="container d-flex flex-column justify-content-center align-items-center">   
        <CardWrapper>
          <Title>{t('register.title', 'Create Account')}</Title>    
          <Subtitle>{t('register.subtitle', "Join DKUST today — it's free")}</Subtitle>
    
          <Form onSubmit={formik.handleSubmit} noValidate>
            <Row>
              {fields.map((item) => (
                <InputProvider key={item.name} itemObject={item} />
              ))}
            </Row>

            <button className="submit-btn" type="submit">
              {t('register.submitBtn', 'Create account')}
            </button>
          </Form>
          
          <SocialLogins />
          
          <FooterText>
            {t('register.hasAccount', 'Already have an account?')}{" "}
            <span className="sign-in" onClick={() => navigate(PathConstants.LOGIN)} style={{ cursor: 'pointer' }}>
              {t('register.signInLink', 'Sign in')}
            </span>   
          </FooterText>
        </CardWrapper>
      </div>

      <Stylelink>
        <Link to={PathConstants.HOME}>{t('register.backToHome', 'Back to Home')}</Link>
      </Stylelink>
    </PageContainer>
  );
};

export default Register;