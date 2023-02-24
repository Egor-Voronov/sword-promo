<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { screensArray } from "@/modules/CurrentScreen/types/screensArray";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import { debouncedHandleScroll } from "@/utils/animations/screenScroll";
import Advantages from "../../screens/AdvantagesScreen/AdvantagesScreen.vue";
import Main from "../../screens/MainScreen/MainScreen.vue";

const screens: screensArray = [Main, Advantages];
const currentScreen = ref(0);

const useHandleScroll = (event: WheelEvent | KeyboardEvent) => {
  debouncedHandleScroll({ event, targetEl, screens, currentScreen });
};

const targetEl = ref<HTMLDivElement>();
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
      <component :is="screens[currentScreen]" />
    </div>
  </ScreenContainer>
</template>
