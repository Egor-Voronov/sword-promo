<script setup lang="ts">
import { computed } from "vue";
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { useCurrentGood } from "@/store/goods";

const currGood = computed(() => {
  return useCurrentGood().currentGood.value;
});
</script>

<template>
  <Vue3Marquee :duration="30" :clone="true" :class="$style.RunningLine">
    {{ $t(`goods.${currGood}.runningLine`) }}
  </Vue3Marquee>
</template>

<style lang="scss" module>
.RunningLine {
  width: 100vw;
  height: toRem(150);

  @extend %RunningLine;
}
</style>