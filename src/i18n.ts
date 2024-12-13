import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation JSON files
import enTranslations from "./locales/en/common.json";
import frTranslations from "./locales/fr/common.json";

// Define the resources with their respective types
export const resources = {
  en: { common: enTranslations },
  fr: { common: frTranslations },
} as const;

i18n
  .use(LanguageDetector) // Detects the user's language automatically
  .use(initReactI18next) // Initializes react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if a key is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    ns: ["common"], // Use the `common` namespace
    defaultNS: "common", // Default namespace for translations
  });

export default i18n;
