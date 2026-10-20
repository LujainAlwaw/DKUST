
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { I18nextProvider, initReactI18next, useTranslation } from "react-i18next";
import i18next from "i18next";
import { resources } from "./assets/locals";
import environment from "./environment";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem(environment.lang) || "ar",
  resources,
});

const MainApp = () => {
  const { i18n } = useTranslation();

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <HelmetProvider>
          <div dir={i18n?.language === "ar" ? "rtl" : "ltr"}>
            <App />
          </div>
        </HelmetProvider>
      </I18nextProvider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainApp />);

reportWebVitals();
