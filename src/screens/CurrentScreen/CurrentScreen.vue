<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import { useScreensState } from "@/store/screens";
import { debouncedHandleScroll } from "./animations/useScreenScroll";

const SCREENS = useScreensState().SCREENS.value;
const { targetEl, currentScreen } = useScreensState();

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
    <div ref="targetEl">
      <component :is="SCREENS[currentScreen]" />
    </div>
</template>