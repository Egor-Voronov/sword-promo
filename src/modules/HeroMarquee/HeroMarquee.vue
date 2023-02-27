<script setup lang="ts">
import Marquee from "@/components/Marquee/Marquee.vue";
</script>

<template>
  <Marquee :class="$style.heroMarquee"> </Marquee>
</template>

<style lang="scss" module>
.heroMarquee {
  width: 100vw;
}
</style>
