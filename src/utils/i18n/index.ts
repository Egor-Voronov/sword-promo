import { createI18n } from "vue-i18n";
import { usePreferredLanguages } from "@vueuse/core";

const languages = usePreferredLanguages();

// export type Messages = {
//   [key: string]: string | Messages;
// }; oof fr hot

const messages = {
  en: {
    fixedPanels: {
      scrollTip: "scroll",
    },
  },
  ru: {
    fixedPanels: {
      scrollTip: "прокрутка",
    },
  },
};

export default createI18n({
  locale: languages.value[0].includes("ru") ? "ru" : "en",
  fallbackLocale: "en",
  legacy: false,
  globalInjection: true,
  messages,
});
