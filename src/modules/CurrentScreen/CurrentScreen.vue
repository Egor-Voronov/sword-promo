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
    const delta = (event as WheelEvent).deltaY;
    newScreen = currentScreen.value + Math.sign(delta);
  }

  if (event.type === "keydown") {
    if ((event as KeyboardEvent).code === "ArrowUp") {
      newScreen = currentScreen.value - 1;
    } else if ((event as KeyboardEvent).code === "ArrowDown") {
      newScreen = currentScreen.value + 1;
    }
  }

  if (newScreen !== undefined && newScreen !== currentScreen.value) {
    currentScreen.value = Math.max(0, Math.min(newScreen, screens.length - 1));
    screenAppear(targetEl!);
  }
};

const debouncedHandleScroll = useDebounceFn(
  (event: WheelEvent | KeyboardEvent) => {
    handleScroll(event);
  },
  400
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
  <ScreenContainer ref="targetEl">
    <component :is="screens[currentScreen]" />
  </ScreenContainer>
</template>