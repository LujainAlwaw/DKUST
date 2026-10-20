

// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next'; 
// import { Container, Row, Col, Accordion } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   PageWrapper,
//   HeroSection,
//   HeroTitle,
//   HeroText,
//   SectionHeader,
//   StyledAccordionItem,
//   CustomButton,
//   BottomPromptText
// } from './styles';

import CtaSection from "../../components/home/CtaSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import {HeroSection} from "../../components/home/HeroSection";
import TrendingProducts from "../../components/home/TrendingProducts/index";


// const HomeBootstrap = () => {
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation(); 

//   const handleGoToQuiz = () => {
//     navigate('/QUIZ');
//   };

//   const faqData = {
//     en: [
//       {
//         id: "0",
//         question: "What services do you offer?",
//         answer: "We offer a wide range of technology services including web development, machine learning solutions, robotics engineering, industrial consulting, and data analytics."
//       },
//       {
//         id: "1",
//         question: "How can I contact your team?",
//         answer: "You can reach our team through the contact form on our website, by emailing info@dkust.com, or by calling +1 234 567 8900."
//       },
//       {
//         id: "2",
//         question: "Do you provide technical support?",
//         answer: "Yes, we provide comprehensive technical support for all our services, including standard email support and priority phone support."
//       }
//     ],
//     ar: [
//       {
//         id: "0",
//         question: "ما هي الخدمات التي تقدمونها؟",
//         answer: "نقدم مجموعة واسعة من خدمات التكنولوجيا بما في ذلك تطوير شبكة الويب، حلول التعلم الآلي، هندسة الروبوتات، الاستشارات الصناعية، وتحليل البيانات."
//       },
//       {
//         id: "1",
//         question: "كيف يمكنني التواصل مع فريقكم؟",
//         answer: "يمكنك الوصول إلى فريقنا من خلال نموذج الاتصال على موقعنا الإلكتروني، أو عبر البريد الإلكتروني info@dkust.com، أو بالاتصال على الرقم +1 234 567 8900."
//       },
//       {
//         id: "2",
//         question: "هل توفرون دعماً تقنياً؟",
//         answer: "نعم، نحن توفر دعماً تقنياً شاملاً لجميع خدماتنا، بما في ذلك دعم البريد الإلكتروني القياسي والدعم الهاتفي ذو الأولوية."
//       }
//     ]
//   };


//   const currentLang = i18n.language.startsWith('ar') ? 'ar' : 'en';
//   const currentFaqList = faqData[currentLang];

//   return (
//     <PageWrapper>
//       <HeroSection>
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={8}>
//               <HeroTitle>{t('home.heroTitle', 'Frequently Asked Questions')}</HeroTitle>
//               <HeroText>
//                 {t('home.heroText', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}
//               </HeroText>
//               <CustomButton onClick={handleGoToQuiz}>
//                 {t('home.askQuestion', 'ASK A QUESTION')}
//               </CustomButton>
//             </Col>
//           </Row>
//         </Container>
//       </HeroSection>

//       <Container className="py-5" style={{ maxWidth: '850px' }}>
//         <SectionHeader>
//           <h2>{t('home.sectionHeaderTitle', 'Generally Asked Question')}</h2>
//           <p>
//             {t('home.sectionHeaderDesc', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.')}
//           </p>
//         </SectionHeader>

//         <Accordion className="mb-5">
//           {currentFaqList.map((item) => (
//             <Accordion.Item 
//               eventKey={item.id} 
//               key={item.id} 
//               as={StyledAccordionItem}
//             >
//               <Accordion.Header>{item.question}</Accordion.Header>
//               <Accordion.Body>{item.answer}</Accordion.Body>
//             </Accordion.Item>
//           ))}
//         </Accordion>

//         <div className="text-center mt-5">
//           <BottomPromptText>{t('home.bottomPrompt', 'Ready to test your knowledge?')}</BottomPromptText>
//           <CustomButton onClick={handleGoToQuiz}>
//             {t('home.takeQuiz', 'TAKE THE QUIZ')}
//           </CustomButton>
//         </div>
//       </Container>
//     </PageWrapper>
//   );
// };

// export default HomeBootstrap;


const  HomeBootstrap= () => {
return(
  <>
<HeroSection/>
<TrendingProducts/>
<FeaturesSection/>
<CtaSection/>
</>
)
}
export default HomeBootstrap;
