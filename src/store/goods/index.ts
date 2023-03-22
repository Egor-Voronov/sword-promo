import { createGlobalState } from "@vueuse/core";
import { computed } from "vue";
import { randomizeIndex } from "@//utils";

const GOODS = computed(() => ["sword"]);

export const useCurrentGood = createGlobalState(() => {
  const currentGood = computed(() => randomizeIndex(GOODS.value));

  return { currentGood };
});
