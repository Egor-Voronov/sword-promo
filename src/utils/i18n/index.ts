import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import { useCurrentLang } from "@/store/languages";

export default createI18n({
  locale: useCurrentLang().currentLang.value,
  fallbackLocale: "en",
  legacy: false,
  globalInjection: true,
  messages: { en, ru },
});