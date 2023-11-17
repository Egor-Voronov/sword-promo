<script setup lang="ts">
import flipVerticalImg from "~/img/HorizontalAndMobile/flip-vertical.svg";
</script>

<template>
  <div :class="$style.screenFlip">
    <img :class="$style.screenFlipImg" :src="flipVerticalImg" :alt="$t('screenFlip')">
    <p :class="$style.screenFlipTxt">{{ $t('screenFlip') }}</p>
  </div>
</template>

<style lang="scss" module>
.screenFlip {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  &Img {
    width: toRemMob(100);
    height: toRemMob(100);
  }

  &Txt {
    margin-top: toRem(10);
    @extend %DefaultInterFont;
  }
}
</style>