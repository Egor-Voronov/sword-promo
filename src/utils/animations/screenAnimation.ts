import { useMotion } from "@vueuse/motion";
import type { Ref } from "vue";

export const screenAnimation = (targetEl: Ref<HTMLDivElement>) => {
  useMotion(targetEl, {
    initial: {
      opacity: 0,
      y: 300,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 100,
        type: "spring",
        damping: 25,
        mass: 0.5,
      },
    },
  });
};
