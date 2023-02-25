import { createGlobalState } from "@vueuse/core";
import { computed, ref } from "vue";
import Main from "@/screens/MainScreen/MainScreen.vue";
import Advantages from "@/screens/AdvantagesScreen/AdvantagesScreen.vue";

export const useScreensState = createGlobalState(() => {
  // getters
  const SCREENS = computed(() => [Main, Advantages]);
  const currentScreen = ref(0);
  const targetEl = ref<HTMLDivElement>();

  return { SCREENS, currentScreen, targetEl };
});
