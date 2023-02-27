<script lang="ts" setup>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

const text = ["lorem30lorem30lorem30", "dfdddddddddddddddfa", "Vue3Marquee"];
let id = 0;
</script>

<template>
  <div>
    <Vue3Marquee>
      <p v-for="t in text" :key="t">{{ t }}</p>
    </Vue3Marquee>
  </div>
</template>

<style lang="scss" module></style>
