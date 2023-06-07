import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
//import fff from "./../../public/locales/{{lng}}/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem("i18nextLng") || "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    // backend: {
    // loadPath: "public/locales/{{lng}}/translation.json",
    // loadPath: "./../../public/locales/{{lng}}/translation.json",
    // loadPath: "/static/app/static(locales/{{lng}}/{{ns}}.json",
    // loadPath: () => {
    //   // check the domain
    //   const host = window.location.host;
    //   return (
    //     (host === "production.ltd" ? "/static/app" : "") +
    //     "/static/app/static/locales/{{lng}}/{{ns}}.json"
    //   );
    // },
    // },
    interpolation: {
      escapeValue: false,
    },
    // language: localStorage.getItem('i18nextLng')|| 'en'
  });

export default i18n;
