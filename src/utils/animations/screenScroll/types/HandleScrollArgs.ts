import type { Component, Ref } from "vue";

export type event = WheelEvent | KeyboardEvent;

export interface HandleScrollArgs {
  event: event;
  targetEl: Ref;
  SCREENS: Array<Component>;
  currentScreen: Ref;
}
