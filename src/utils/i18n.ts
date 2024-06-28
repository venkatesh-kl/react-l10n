import i18n from "i18next";
import { useContext } from "react";
import { initReactI18next } from "react-i18next";
import translations from "../locales";
import { L10nContext } from "./L10nContext";

export const initI18n = () => {
  const locale = useContext(L10nContext);
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: translations.en,
      },
      fr: {
        translation: translations.fr,
      },
      sp: {
        translation: translations.sp,
      },
      de: {
        translation: translations.de,
      },
    },
    lng: locale,
    interpolation: {
      escapeValue: false,
    },
  });
  return i18n;
};
