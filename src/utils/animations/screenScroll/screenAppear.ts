import { useMotion } from "@vueuse/motion";
import type { screenAppearArgs } from "./types/screenAppearArgs";

export const screenAppear = ({ targetEl, enterY }: screenAppearArgs) => {
  useMotion(targetEl.value, {
    initial: {
      delay: 100,
      opacity: 0,
      y: enterY,
    },
    enter: {
      delay: 100,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        mass: 0.5,
      },
    },
  });
};
