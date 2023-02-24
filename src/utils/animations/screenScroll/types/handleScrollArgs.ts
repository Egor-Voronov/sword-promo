import type { Component, Ref } from "vue";

export type event = WheelEvent | KeyboardEvent;

export interface handleScrollArgs {
  event: event;
  targetEl: Ref;
  screens: Array<Component>;
  currentScreen: Ref;
}
