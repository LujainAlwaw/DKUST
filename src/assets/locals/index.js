import translationEN from "./en/translation.json";
import translationAR from "./ar/translation.json";

// i18next resource map: language code → { translation: json }.
// Add a new language by importing its JSON and listing it in both objects.
export const resources = {
  en: {
    translation: translationEN,
    label: "Eng",
  },
  ar: {
    translation: translationAR,
    label: "Ar",
  },
};

export const languages = [
  {
    key: "en",
    label: "English",
  },
  {
    key: "ar",
    label: "العربية",
  },
];
