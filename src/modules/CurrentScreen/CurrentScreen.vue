<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { Ref } from "vue";
import type { screensArray } from "./types/screensArray";
import type { Range } from "./types/screensRange";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import { screenAppear } from "@/utils/animations/screenAppear";
import Advantages from "../../screens/AdvantagesScreen/AdvantagesScreen.vue";
import Main from "../../screens/MainScreen/MainScreen.vue";

type T = Range<0, typeof screens.length>;

const screens: screensArray = [Main, Advantages];
let currentScreen = ref<T>(0);

const targetEl = ref<HTMLDivElement>();

const handleInput = (event: WheelEvent | KeyboardEvent) => {
  if (event.type === "wheel") {
    const newScreen =
      currentScreen.value + ((event as WheelEvent).deltaY > 0 ? 1 : -1);

    currentScreen.value = Math.min(
      Math.max(newScreen, 0),
      screens.length - 1
    ) as T;

    if (newScreen == currentScreen.value - 1) {
      if (targetEl.value != null) {
        screenAppear(targetEl!);
      }
    }
  }

  if (event.type === "keydown") {
    if ((event as KeyboardEvent).code === "ArrowDown") {
      const newScreen = currentScreen.value - 1;
      currentScreen.value = Math.max(newScreen, 0) as T;
    }
    if ((event as KeyboardEvent).code === "ArrowUp") {
      const newScreen = currentScreen.value + 1;
      currentScreen.value = Math.min(newScreen, screens.length - 1) as T;
    }
  }
};

onMounted(() => {
  window.addEventListener("wheel", handleInput);
  window.addEventListener("keydown", handleInput);
});

onUnmounted(() => {
  window.removeEventListener("wheel", handleInput);
  window.removeEventListener("keydown", handleInput);
});
</script>

<template>
  <ScreenContainer ref="targetEl">
    <component :is="screens[currentScreen]" />
  </ScreenContainer>
</template>
