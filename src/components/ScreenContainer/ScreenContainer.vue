<script setup lang="ts">
import { ref } from "vue";
import { screenAppear } from "@/utils/animations/screenAppear";

const targetEl = ref<HTMLDivElement>;
</script>

<template>
  <div
    ref="targetEl"
    @click="screenAppear(targetEl)"
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
