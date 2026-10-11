


// import { useState } from 'react';
// import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import { useTheme } from '../../../context/theme/useTheme';
// import {
//   NavbarHeader, ContainerWrapper, Logo, MenuIcon,
//   NavList, MobileHeader, StyledNavLink, ButtonGroup, NavBtn
// } from './styles';
// import PathConstants from '../../../routes/pathConstsnts';

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/ABOUT' },
//   { name: 'Portfolio', path: '/PORTFOLIO' },
//   { name: 'Products', path: '/Products' },
//   { name: 'Services', path: '/SERVICES' },
//   { name: 'Blog', path: '/BLOG' },
//   { name: 'Resources', path: '/RESOURCES' },
//   { name: 'Quiz', path: '/QUIZ' },
//   { name: 'Contact', path: '/CONTACT' },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const closeMenu = () => setIsOpen(false);

//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <NavbarHeader>
//       <ContainerWrapper>
//         <Logo to="/HOME">DKUST</Logo>

//         <MenuIcon onClick={() => setIsOpen(!isOpen)}>
//           <FaBars />
//         </MenuIcon>

//         <NavList isOpen={isOpen}>
//           <MobileHeader>
//             <Logo to="/HOME" onClick={closeMenu}>DKUST</Logo>
//             <MenuIcon onClick={closeMenu}>
//               <FaTimes />
//             </MenuIcon>
//           </MobileHeader>

//           {navLinks.map((link) => (
//             <StyledNavLink key={link.name} to={link.path} onClick={closeMenu}>
//               {link.name}
//             </StyledNavLink>
//           ))}

//           <StyledNavLink to={PathConstants.LOGIN} onClick={closeMenu} className="mobile-only">Login</StyledNavLink>
//           <StyledNavLink to={PathConstants.REGISTER} onClick={closeMenu} className="mobile-only">Register</StyledNavLink>
          
//           <StyledNavLink 
//             as="div" 
//             onClick={toggleDarkMode} 
//             className="mobile-only" 
//             style={{ cursor: 'pointer' }}
//           >
//             {darkMode ? ' Light Mode' : ' Dark Mode'}
//           </StyledNavLink>
//         </NavList>

//         <ButtonGroup>
//           <NavLink to={PathConstants.LOGIN}><NavBtn>LOGIN</NavBtn></NavLink>
//           <NavLink to={PathConstants.REGISTER}><NavBtn>REGISTER</NavBtn></NavLink>
          
//           <NavBtn onClick={toggleDarkMode} title="Toggle Dark/Light Mode">
//             {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
//           </NavBtn>
//         </ButtonGroup>
//       </ContainerWrapper>
//     </NavbarHeader>
//   );
// }


import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../context/theme/useTheme';
import { useTranslation } from 'react-i18next';
import {
  NavbarHeader, ContainerWrapper, Logo, MenuIcon,
  NavList, MobileHeader, StyledNavLink, ButtonGroup, NavBtn
} from './styles';
import PathConstants from '../../../routes/pathConstsnts';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const { darkMode, toggleDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  // روابط القائمة مرتبطة بملفات الترجمة ديناميكياً
  const navLinks = [
    { name: t('nav.home', 'Home'), path: '/' },
    { name: t('nav.about', 'About'), path: '/ABOUT' },
    { name: t('nav.portfolio', 'Portfolio'), path: '/PORTFOLIO' },
    { name: t('nav.products', 'Products'), path: '/Products' },
    { name: t('nav.services', 'Services'), path: '/SERVICES' },
    { name: t('nav.blog', 'Blog'), path: '/BLOG' },
    { name: t('nav.resources', 'Resources'), path: '/RESOURCES' },
    { name: t('nav.quiz', 'Quiz'), path: '/QUIZ' },
    { name: t('nav.contact', 'Contact'), path: '/CONTACT' },
  ];

  // دالة تبديل اللغة بين العربية والإنجليزية
  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <NavbarHeader>
      <ContainerWrapper>
        <Logo to="/HOME">DKUST</Logo>

        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MenuIcon>

        <NavList isOpen={isOpen}>
          <MobileHeader>
            <Logo to="/HOME" onClick={closeMenu}>DKUST</Logo>
            <MenuIcon onClick={closeMenu}>
              <FaTimes />
            </MenuIcon>
          </MobileHeader>

          {navLinks.map((link) => (
            <StyledNavLink key={link.name} to={link.path} onClick={closeMenu}>
              {link.name}
            </StyledNavLink>
          ))}

          <StyledNavLink to={PathConstants.LOGIN} onClick={closeMenu} className="mobile-only">{t('nav.login', 'Login')}</StyledNavLink>
          <StyledNavLink to={PathConstants.REGISTER} onClick={closeMenu} className="mobile-only">{t('nav.register', 'Register')}</StyledNavLink>
          
          {/* زر تبديل اللغة للشاشات الصغيرة (الجوال) */}
          <StyledNavLink 
            as="div" 
            onClick={toggleLanguage} 
            className="mobile-only" 
            style={{ cursor: 'pointer' }}
          >
            {i18n.language === 'ar' ? 'English' : 'العربية'}
          </StyledNavLink>

          <StyledNavLink 
            as="div" 
            onClick={toggleDarkMode} 
            className="mobile-only" 
            style={{ cursor: 'pointer' }}
          >
            {darkMode ? ' Light Mode' : ' Dark Mode'}
          </StyledNavLink>
        </NavList>

        <ButtonGroup>
          <NavLink to={PathConstants.LOGIN}><NavBtn>{t('nav.login', 'LOGIN')}</NavBtn></NavLink>
          <NavLink to={PathConstants.REGISTER}><NavBtn>{t('nav.register', 'REGISTER')}</NavBtn></NavLink>
          
          {/* زر تبديل اللغة للشاشات الكبيرة */}
          <NavBtn onClick={toggleLanguage} title="Change Language">
            <FaGlobe size={14} style={{ marginLeft: '4px' }} />
            {i18n.language === 'ar' ? 'EN' : 'AR'}
          </NavBtn>

          {/* زر الوضع الليلي والنهاري */}
          <NavBtn onClick={toggleDarkMode} title="Toggle Dark/Light Mode">
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </NavBtn>
        </ButtonGroup>
      </ContainerWrapper>
    </NavbarHeader>
  );
}