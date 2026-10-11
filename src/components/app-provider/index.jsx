// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useTranslation } from "react-i18next";
// import { fetchSettings } from "../../store/settings/settingsSlice";

// const AppProvider = ({ children }) => {
//   const dispatch = useDispatch();
//   const { i18n } = useTranslation();

//   useEffect(() => {
//     dispatch(fetchSettings());
//   }, [dispatch]);

//   // Mirror i18n onto <html> so CSS [dir="rtl"] and screen readers stay in sync.
//   useEffect(() => {
//     const dir = i18n.language === "ar" ? "rtl" : "ltr";
//     document.documentElement.setAttribute("dir", dir);
//     document.documentElement.setAttribute("lang", i18n.language);
//   }, [i18n.language]);

//   return <>{children}</>;
// };

// export default AppProvider;


import React, { useEffect } from 'react';
import { useDispatch, Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import  store from '../../store'; // تأكد من مسار الـ store الصحيح حسب مجلدك
import { ThemeProvider } from '../../context/theme/ThemeProvider'; // تأكد من مسار الـ ThemeProvider الصحيح
import { fetchSettings } from "../../store/settings/settingsSlice";

// مكون داخلي لتنفيذ الـ Hooks الخاصة بـ Redux و i18n
const AppProviderContent = ({ children }) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  return <>{children}</>;
};

// المكون الرئيسي الذي يدمج Redux و ThemeProvider وجلب الإعدادات معاً
const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppProviderContent>
          {children}
        </AppProviderContent>
      </ThemeProvider>
    </Provider>
  );
};

export default AppProvider;