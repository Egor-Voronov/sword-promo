<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { screensArray } from "@/modules/CurrentScreen/types/screensArray";
import { useDebounceFn } from "@vueuse/core";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import { screenAppear } from "@/utils/animations/screenAppear";
import Advantages from "../../screens/AdvantagesScreen/AdvantagesScreen.vue";
import Main from "../../screens/MainScreen/MainScreen.vue";

const screens: screensArray = [Main, Advantages];
const currentScreen = ref(0);
const targetEl = ref<HTMLDivElement>();

const handleScroll = (event: WheelEvent | KeyboardEvent) => {
  let newScreen: number | undefined;

  if (event.type === "wheel") {
    const deltaY = (event as WheelEvent).deltaY;
    if (
      (event as WheelEvent).deltaMode === WheelEvent.DOM_DELTA_PIXEL &&
      deltaY !== 0
    ) {
      let newScreen = currentScreen.value + Math.sign(deltaY);
      if (newScreen !== undefined && newScreen !== currentScreen.value) {
        if (newScreen >= 0 && newScreen < screens.length) {
          if (newScreen > currentScreen.value) {
            screenAppear({ targetEl: targetEl, enterY: -300 });
          }
          if (newScreen < currentScreen.value) {
            screenAppear({ targetEl: targetEl, enterY: 300 });
          }
          currentScreen.value = Math.max(
            0,
            Math.min(newScreen, screens.length - 1)
          );
        }
      }
    }
  }

  if (event.type === "keydown") {
    if ((event as KeyboardEvent).code === "ArrowUp") {
      newScreen = currentScreen.value - 1;
    } else if ((event as KeyboardEvent).code === "ArrowDown") {
      newScreen = currentScreen.value + 1;
    }
  }

  if (newScreen !== undefined && newScreen !== currentScreen.value) {
    if (newScreen >= 0 && newScreen < screens.length) {
      if (newScreen > currentScreen.value) {
        screenAppear({ targetEl: targetEl, enterY: -300 });
      }
      if (newScreen < currentScreen.value) {
        screenAppear({ targetEl: targetEl, enterY: 300 });
      }

      currentScreen.value = Math.max(
        0,
        Math.min(newScreen, screens.length - 1)
      );
    }
  }
};

const debouncedHandleScroll = useDebounceFn(
  (event: WheelEvent | KeyboardEvent) => {
    handleScroll(event);
  },
  100
);

onMounted(() => {
  window.addEventListener("wheel", debouncedHandleScroll);
  window.addEventListener("keydown", debouncedHandleScroll);
});

onUnmounted(() => {
  window.removeEventListener("wheel", debouncedHandleScroll);
  window.removeEventListener("keydown", debouncedHandleScroll);
});
</script>

<template>
  <ScreenContainer>
    <div ref="targetEl">
      <component :is="screens[currentScreen]" />
    </div>
  </ScreenContainer>
</template>