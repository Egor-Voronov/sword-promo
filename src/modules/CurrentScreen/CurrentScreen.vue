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

const handleInput = (event) => {
  if (event.type === "wheel") {
    currentScreen.value += event.deltaY > 0 ? 1 : -1;
  }

  if (event.type === "keydown") {
    if (event.code === "ArrowDown") {
      currentScreen.value--;
    } else if (event.code === "ArrowUp") {
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