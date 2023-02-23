<script setup lang="ts">
import { ref } from "vue"
import { screenAnimation } from "@/utils/animations/screenAnimation";

const targetEl = ref<HTMLDivElement>
</script>

<template>
  <div
    class="target"
    ref="targetEl"
    @click="screenAnimation(targetEl)"
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
