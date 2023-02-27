<script setup lang="ts">
import Marquee from "@/components/Marquee/Marquee.vue";
import { randomize } from "@/utils/randomizeFn";
import { useScreensGood } from "@/store/goods/index";
</script>

<template>
  <Marquee :class="$style.heroMarquee"> </Marquee>
</template>

<style lang="scss" module>
.heroMarquee {
  width: 100vw;
}
</style>
