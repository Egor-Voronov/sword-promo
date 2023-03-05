<script setup lang="ts">
import rotateImg from "~/img/FixedPanels/rotate-y-axis.svg";

</script>

<template>
  <img
    :class="$style.img"
    :src="rotateImg"
    :alt="$t('fixedPanels.rotateImgAlt')"

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