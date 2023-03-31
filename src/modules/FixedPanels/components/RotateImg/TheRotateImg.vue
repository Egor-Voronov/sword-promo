<script setup lang="ts">
import rotateImg from "~/img/FixedPanels/rotate-y-axis.svg";

const imgUrl = `url("${rotateImg}")`;
</script>

<template>
  <span :class="$style.rotateImg" />
</template>

<style lang="scss" module>
.rotateImg {
  pointer-events: auto;
  width: toRemMob(20);
  height: toRemMob(20);

  background-image: v-bind(imgUrl);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  // pixel perfect styles
  position: relative;
  left: toRemMob(-7);

  @include _desktop {
    width: toRem(30);
    height: toRem(30);
  }
}
</style>
