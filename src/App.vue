<script lang="ts" setup>
import FixedPanels from "@/modules/FixedPanels/FixedPanels.vue";
import CustomCursor from "@/utils/CustomCursor/CustomCursor.vue";
import CurrentScreen from "@/screens/CurrentScreen/CurrentScreen.vue";
</script>

<template>
  <CustomCursor />
  <FixedPanels />
  <CurrentScreen />
  <img src="./assets/sword.png" alt="" :class="$style.img" />
</template>

<style module lang="scss">
.img {
  pointer-events: none;
  position: absolute;
  width: toRem(800);
  height: toRem(800);
  top: 0;
  left: 35%;
  z-index: 9999;
}
</style>