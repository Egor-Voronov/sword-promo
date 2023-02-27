<script lang="ts" setup>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

// const text = ["lorem30lorem30lorem30", "dfdddddddddddddddfa", "Vue3Marquee"];
// let id = 0;
</script>

<template>
  <div>
    <Vue3Marquee>
      <slot />
    </Vue3Marquee>
  </div>
</template>

<style lang="scss" module></style>
