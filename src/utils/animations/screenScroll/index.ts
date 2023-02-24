import type { handleScrollArgs } from "./types/handleScrollArgs";
import { useDebounceFn } from "@vueuse/core";
import { screenAppear } from "./screenAppear";

const handleScroll = ({
  event,
  targetEl,
  screens,
  currentScreen,
}: handleScrollArgs) => {
  let newScreen: number | undefined;
  const deltaY = (event as WheelEvent).deltaY;
  switch (event.type) {
    case "wheel":
      if (
        (event as WheelEvent).deltaMode === WheelEvent.DOM_DELTA_PIXEL &&
        deltaY !== 0
      ) {
        newScreen = currentScreen.value + Math.sign(deltaY);
      }
      break;

    case "keydown":
      switch ((event as KeyboardEvent).code) {
        case "ArrowUp":
          newScreen = currentScreen.value - 1;
          break;
        case "ArrowDown":
          newScreen = currentScreen.value + 1;
          break;
      }
      break;
  }

  if (
    newScreen !== undefined &&
    newScreen !== currentScreen.value &&
    newScreen >= 0 &&
    newScreen < screens.length
  ) {
    screenAppear({
      targetEl: targetEl,
      enterY: newScreen > currentScreen.value ? -300 : 300,
    });
    currentScreen.value = Math.max(0, Math.min(newScreen, screens.length - 1));
  }
};

export const debouncedHandleScroll = useDebounceFn(
  ({ event, targetEl, screens, currentScreen }: handleScrollArgs) => {
    handleScroll({
      event,
      targetEl,
      screens,
      currentScreen,
    });
  },
  100
);