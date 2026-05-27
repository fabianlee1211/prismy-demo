import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en-US/translation.json";
import zhHK from "./locales/zh-HK/translation.json";
import ptBR from "./locales/pt-BR/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": { translation: enUS },
    "zh-HK": { translation: zhHK },
    "pt-BR": { translation: ptBR },
  },
  lng: "en-US",
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
