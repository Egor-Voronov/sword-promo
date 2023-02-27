import { createGlobalState } from "@vueuse/core";
import { computed, ref } from "vue";
import Hero from "@/screens/HeroScreen/HeroScreen.vue";
import Advantages from "@/screens/AdvantagesScreen/AdvantagesScreen.vue";

export const useScreensState = createGlobalState(() => {
  const SCREENS = computed(() => [Hero, Advantages]);
  const currentScreen = ref(0);
  const targetEl = ref<HTMLDivElement>();

  return { SCREENS, currentScreen, targetEl };
});
