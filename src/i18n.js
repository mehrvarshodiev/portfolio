import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLanguageTranslation from "../public/locales/en/translation.json";
import ruLanguageTranslation from "../public/locales/ru/translation.json";

const resources = {
  en: {
    translation: enLanguageTranslation,
  },
  ru: {
    translation: ruLanguageTranslation,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback if translation is missing
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
