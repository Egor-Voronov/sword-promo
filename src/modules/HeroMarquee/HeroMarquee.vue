<script setup lang="ts">
import Marquee from "@/components/Marquee/Marquee.vue";
import { randomize } from "@/utils/randomizeFn";
import { useScreensGood } from "@/store/goods";
import mockups from "./mockups/mockups.json";
</script>

<template>
  <Marquee :class="$style.heroMarquee">
    {{ randomize(mockups[useScreensGood().currentGood.value]) }}
  </Marquee>
</template>

<style lang="scss" module>
.heroMarquee {
  width: 100vw;

  @extend %HeroMarquee;
}
</style>
