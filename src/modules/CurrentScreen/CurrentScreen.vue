<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { screensArray } from "@/modules/CurrentScreen/types/screensArray";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import { screenAppear } from "@/utils/animations/screenAppear";
import Advantages from "../../screens/AdvantagesScreen/AdvantagesScreen.vue";
import Main from "../../screens/MainScreen/MainScreen.vue";

const screens: screensArray = [Main, Advantages];
const currentScreen = ref(0);
const targetEl = ref<HTMLDivElement>();

const handleInput = (event: WheelEvent | KeyboardEvent) => {
  const delta = event.type === "wheel" ? (event as WheelEvent).deltaY : 0;
  const newScreen = currentScreen.value - Math.sign(delta);

  if (newScreen !== currentScreen.value) {
    screenAppear(targetEl!);
    currentScreen.value = Math.max(0, Math.min(newScreen, screens.length - 1));
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
