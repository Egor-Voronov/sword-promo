<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

import { useScreensState } from "@/store/screens";
import { useDebouncedHandleScroll } from "./useScreenScroll";
import { isMobileAndHorizontal } from "@/utils/MobileAndHorizontal/isMobileAndHorizontal";

import TheScreenFlip from "@/utils/MobileAndHorizontal/TheScreenFlip.vue";

const SCREENS = useScreensState().SCREENS.value;
const { targetEl, currentScreen } = useScreensState();

const useHandleScroll = (event: WheelEvent | KeyboardEvent) => {
  useDebouncedHandleScroll({ event, targetEl, SCREENS, currentScreen });
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
  <template v-if="isMobileAndHorizontal()">
    <TheScreenFlip />
  </template>

  <template v-else>
    <div ref="targetEl">
      <component :is="SCREENS[currentScreen]" />
    </div>
  </template>
</template>