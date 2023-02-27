import { createGlobalState } from "@vueuse/core";
import { computed } from "vue";
import { randomize } from "@/utils/randomizeFn";

const GOODS = computed(() => ["sword"]);

export const useCurrentGood = createGlobalState(() => {
  const currentGood = computed(() => randomize(GOODS.value));

  return { currentGood };
});
