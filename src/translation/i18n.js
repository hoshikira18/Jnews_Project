import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationJP from "../locales/jp/translation";
import translationVI from "../locales/vi/translation";

// the translations
const resources = {
  jp: {
    translation: translationJP,
  },
  vi: {
    translation: translationVI,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "vi",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
