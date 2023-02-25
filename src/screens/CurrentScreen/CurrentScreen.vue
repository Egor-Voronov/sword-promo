<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { ScreensArray } from "./types/ScreensArray";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import { debouncedHandleScroll } from "@/utils/animations/screenScroll";
import Advantages from "../AdvantagesScreen/AdvantagesScreen.vue";
import Main from "../MainScreen/MainScreen.vue";

const SCREENS: ScreensArray = [Main, Advantages];
const currentScreen = ref(0);
const targetEl = ref<HTMLDivElement>();

const useHandleScroll = (event: WheelEvent | KeyboardEvent) => {
  debouncedHandleScroll({ event, targetEl, SCREENS, currentScreen });
};

onMounted(() => {
  window.addEventListener("wheel", useHandleScroll);
  window.addEventListener("keydown", useHandleScroll);
});

onUnmounted(() => {
  window.removeEventListener("wheel", useHandleScroll);
  window.removeEventListener("keydown", useHandleScroll);
});
</script>

<template>
  <ScreenContainer>
    <div ref="targetEl">
      <component :is="SCREENS[currentScreen]" />
    </div>
  </ScreenContainer>
</template>
