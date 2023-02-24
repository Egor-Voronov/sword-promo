import { useMotion } from "@vueuse/motion";
import type { screenAppearArgs } from "./types/screenAppearArgs";

export const screenAppear = ({
  targetEl,
  enterY,
}: screenAppearArgs) => {
  useMotion(targetEl.value, {
    initial: {
      opacity: 0,
      y: enterY,
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
