<script setup lang="ts">
import Marquee from "@/components/Marquee/Marquee.vue";
</script>

<template>
  <Marquee :class="$style.heroMarquee" marqueeOrientation="horizontal" />
</template>

<style module lang="scss">
.heroMarquee {
  width: 100vw;
}
</style>
