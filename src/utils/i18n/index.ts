import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import { useGlobalState } from "@/store/globalStore";

// export type Messages = {
//   [key: string]: string | Messages;
// }; oof fr hot

export default createI18n({
  locale: useGlobalState().value,
  fallbackLocale: "en",
  legacy: false,
  globalInjection: true,
  messages: { en, ru },
});
