<script setup lang="ts">
import { ref } from "vue";
import { screenScroll } from "@/utils/animations/screenScroll";

const targetEl = ref<HTMLDivElement>;
</script>

<template>
  <div
    class="target"
    ref="targetEl"
    @click="screenScroll(targetEl)"
    :class="$style.mainContainer"
  >
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.mainContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
