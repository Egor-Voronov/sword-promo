<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { screensArray } from "./types/screensArray";
import type { Range } from "./types/screensRange";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import Advantages from "../../screens/AdvantagesScreen/AdvantagesScreen.vue";
import Main from "../../screens/MainScreen/MainScreen.vue";

type T = Range<0, typeof screens.length>;

const screens: screensArray = [Main, Advantages];
let currentScreen = ref<T>(0);

const handleInput = (event: WheelEvent | KeyboardEvent) => {
  if (event.type === "wheel") {
    event.preventDefault();
    currentScreen.value += (event as WheelEvent).deltaY > 0 ? 1 : -1;
  }

  if (event.type === "keydown") {
    if ((event as KeyboardEvent).code === "ArrowDown") {
      currentScreen.value--;
    }
    if ((event as KeyboardEvent).code === "ArrowUp") {
      currentScreen.value++;
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
  <ScreenContainer>
    <component :is="screens[currentScreen]" />
  </ScreenContainer>
</template>