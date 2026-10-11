// import { FaPaperPlane } from 'react-icons/fa';
// import {
//   FooterContainer,
//   FooterGrid,
//   Column,
//   NewsletterBox,
//   BottomBar
// } from './styles';

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterGrid>
//         <Column>
//           <h4>CONTACT DETAIL</h4>
//           <p>123 Business Street, Suite 100<br />New York, NY 10001</p>
//           <p>Phone: +1 234-567-890<br />Email: info@dkust.com</p>
//         </Column>

//         <Column>
//           <h4>QUICK LINKS</h4>
//           <a href="#about">About Us</a>
//           <a href="#services">Services</a>
//           <a href="#portfolio">Portfolio</a>
//           <a href="#blog">Blog</a>
//           <a href="#contact">Contact Us</a>
//         </Column>

//         <Column>
//           <h4>OUR SERVICES</h4>
//           <a href="#web">Web Development</a>
//           <a href="#design">Frontend Development</a>
//           <a href="#hosting">Web Hosting</a>
//           <a href="#consulting">IT Consulting</a>
//           <a href="#analytics">Data Analytics</a>
//         </Column>

//         <Column>
//           <h4>SUBSCRIBE NEWSLETTER</h4>
//           <p>Get the latest update and news.</p>
//           <NewsletterBox>
//             <input type="email" placeholder="Enter Fullname" />
//             <button type="button">
//               <FaPaperPlane size={12} />
//             </button>
//           </NewsletterBox>
//         </Column>
//       </FooterGrid>

//       <BottomBar>
//         Copyright &copy; 2026 DKUST. All Rights Reserved.
//       </BottomBar>
//     </FooterContainer>
//   );
// };

// export default Footer;

import { useTranslation } from 'react-i18next'; // [إضافة الترجمة]: استيراد خطاف الترجمة
import { FaPaperPlane } from 'react-icons/fa';
import {
  FooterContainer,
  FooterGrid,
  Column,
  NewsletterBox,
  BottomBar
} from './styles';

const Footer = () => {
  const { t } = useTranslation(); // [إضافة الترجمة]: تفعيل دالة الترجمة

  return (
    <FooterContainer>
      <FooterGrid>
        <Column>
          <h4>{t('footer.contactDetail', 'CONTACT DETAIL')}</h4>
          <p>{t('footer.address', '123 Business Street, Suite 100')}<br />{t('footer.addressLine2', 'New York, NY 10001')}</p>
          <p>{t('footer.phone', 'Phone: +1 234-567-890')}<br />{t('footer.emailText', 'Email: info@dkust.com')}</p>
        </Column>

        <Column>
          <h4>{t('footer.quickLinks', 'QUICK LINKS')}</h4>
          <a href="#about">{t('footer.aboutUs', 'About Us')}</a>
          <a href="#services">{t('footer.services', 'Services')}</a>
          <a href="#portfolio">{t('footer.portfolio', 'Portfolio')}</a>
          <a href="#blog">{t('footer.blog', 'Blog')}</a>
          <a href="#contact">{t('footer.contactUs', 'Contact Us')}</a>
        </Column>

        <Column>
          <h4>{t('footer.ourServices', 'OUR SERVICES')}</h4>
          <a href="#web">{t('footer.webDev', 'Web Development')}</a>
          <a href="#design">{t('footer.frontendDev', 'Frontend Development')}</a>
          <a href="#hosting">{t('footer.webHosting', 'Web Hosting')}</a>
          <a href="#consulting">{t('footer.itConsulting', 'IT Consulting')}</a>
          <a href="#analytics">{t('footer.dataAnalytics', 'Data Analytics')}</a>
        </Column>

        <Column>
          <h4>{t('footer.subscribeNewsletter', 'SUBSCRIBE NEWSLETTER')}</h4>
          <p>{t('footer.newsletterDesc', 'Get the latest update and news.')}</p>
          <NewsletterBox>
            <input type="email" placeholder={t('footer.emailPlaceholder', 'Enter Fullname')} />
            <button type="button">
              <FaPaperPlane size={12} />
            </button>
          </NewsletterBox>
        </Column>
      </FooterGrid>

      <BottomBar>
        {t('footer.copyright', 'Copyright © 2026 DKUST. All Rights Reserved.')}
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;