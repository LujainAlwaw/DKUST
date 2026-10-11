import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { languages } from "../../assets/locals";
import environment from "../../environment";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language;
  const [isOpen, setIsOpen] = useState(false);

  const refreshPage = () => {
    navigate(0);
  };

  // Persist the choice, tell i18next, then reload so dir/lang and Helmet rebuild.
  const switchLanguage = (langKey) => {
    Cookies.set(environment.localLang, langKey);
    localStorage.setItem(environment.lang, langKey);
    i18n.changeLanguage(langKey);
    refreshPage();
  };

  return (
    <div className={`lang-list ${isOpen ? "is-open" : ""}`} aria-label={t("Switch Language")}>
      <button
        type="button"
        className="lang-item"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{currentLang === "ar" ? "عربي" : "EN"}</span>
      </button>
      <ul className="sub-lang-menu">
        {languages.map(
          (lang) =>
            lang.key !== currentLang && (
              <li key={lang.key} className="lang-item">
                <button type="button" onClick={() => switchLanguage(lang.key)}>
                  {lang.label}
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
