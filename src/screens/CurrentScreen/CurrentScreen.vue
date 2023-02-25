<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import { useScreensState } from "@/store/screens";
import { useHandleScroll } from "@/utils/animations/useScreenScroll";

const SCREENS = useScreensState().SCREENS.value;
const currentScreen = useScreensState().currentScreen;
const targetEl = useScreensState().targetEl;

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