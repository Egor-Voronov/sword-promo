<script setup lang="ts">
import { computed } from "vue";
import { useScreensState } from "@/store/screens";
import rotateImg from "~/img/FixedPanels/rotate-y-axis.svg";

const SCREENS_LENGTH = computed(() => useScreensState().SCREENS.value.length);
const currentScreen = computed(() => useScreensState().currentScreen.value);
</script>

<template>
  <img
    :class="$style.img"
    :src="rotateImg"
    alt="rotate"
    v-if="currentScreen !== SCREENS_LENGTH - 1"
  />
</template>

<style lang="scss" module>
img {
  pointer-events: auto;
  width: toRemMob(15);
  height: toRemMob(15);

  // pixel perfect styles
  position: relative;
  left: toRemMob(-7);

  @include _desktop {
    width: toRem(30);
    height: toRem(30);
  }
}
</style>
