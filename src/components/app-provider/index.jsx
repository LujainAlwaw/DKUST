

import  { useEffect } from 'react';
import { useDispatch, Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import  store from '../../store'; 
import { ThemeProvider } from '../../context/theme/ThemeProvider'; 
import { fetchSettings } from "../../store/settings/settingsSlice";

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