import {
  createGlobalState,
  usePreferredLanguages,
  useStorage,
} from "@vueuse/core";
import { computed } from "vue";

const currentLang = computed(() =>
  usePreferredLanguages().value[0].includes("ru") ? "ru" : "en"
);

export const useGlobalState = createGlobalState(() =>
  useStorage("lang", currentLang.value)
);