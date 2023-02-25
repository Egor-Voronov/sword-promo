import { useScreensState } from "@/store/screens";
import { debouncedHandleScroll } from "./screenScroll";

export const SCREENS = useScreensState().SCREENS.value;
export const currentScreen = useScreensState().currentScreen;
const targetEl = useScreensState().targetEl;

export const useHandleScroll = (event: WheelEvent | KeyboardEvent) => {
  debouncedHandleScroll({ event, targetEl, SCREENS, currentScreen });
};
