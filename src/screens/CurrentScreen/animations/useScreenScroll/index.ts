import type { HandleScrollArgs } from "./types/HandleScrollArgs";
import { useDebounceFn } from "@vueuse/core";
import { useScreenAppear } from "./useScreenAppear";

// Define handleScroll function which takes an object of type handleScrollArgs as an argument
const handleScroll = ({
  event,
  targetEl,
  SCREENS,
  currentScreen,
}: HandleScrollArgs) => {
  let newScreen: number | undefined;
  const DELTA_Y = (event as WheelEvent).deltaY;

  switch (event.type) {
    case "wheel":
      // If the event type is wheel, check deltaMode and deltaY values to determine newScreen
      if (
        (event as WheelEvent).deltaMode === WheelEvent.DOM_DELTA_PIXEL &&
        DELTA_Y !== 0
      ) {
        newScreen = currentScreen.value + Math.sign(DELTA_Y);
      }
      break;
    case "keydown":
      // If the event type is `keydown`, check code variable value to determine newScreen
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

  // Check if newScreen is defined and within the bounds of the screens array
  if (
    newScreen !== undefined &&
    newScreen !== currentScreen.value &&
    newScreen >= 0 &&
    newScreen < SCREENS.length
  ) {
    // If newScreen is valid, call the screenAppear function with appropriate parameters
    useScreenAppear({
      targetEl: targetEl,
      enterY: newScreen > currentScreen.value ? -300 : 300,
    });
    // Update currentScreen value to newScreen
    currentScreen.value = Math.max(0, Math.min(newScreen, SCREENS.length - 1));
  }
};

export const useDebouncedHandleScroll = useDebounceFn(
  ({ event, targetEl, SCREENS, currentScreen }: HandleScrollArgs) => {
    handleScroll({
      event,
      targetEl,
      SCREENS,
      currentScreen,
    });
  },
  50
);
