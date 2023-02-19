import { createI18n } from "vue-i18n";
import { usePreferredLanguages } from "@vueuse/core";

const languages = usePreferredLanguages();

export default createI18n({
  locale: languages.value[0],
  legacy: false,
});
