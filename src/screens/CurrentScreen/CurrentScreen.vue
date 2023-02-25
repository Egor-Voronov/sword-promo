<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import { useScreensState } from "@/store/screens";
import { debouncedHandleScroll } from "@/utils/animations/useScreenScroll";

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
  <ScreenContainer>
    <div ref="targetEl">
      <component :is="SCREENS[currentScreen]" />
    </div>
  </ScreenContainer>
</template>
