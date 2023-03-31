import { useMotion } from "@vueuse/motion";
import type { ScreenAppearArgs } from "./types/ScreenAppearArgs";

export const useScreenAppear = ({ targetEl, enterY }: ScreenAppearArgs) => {
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
