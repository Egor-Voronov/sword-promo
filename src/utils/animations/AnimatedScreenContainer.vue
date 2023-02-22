<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl = ref<HTMLDivElement>();
const test = () => {
  useMotion(targetEl, {
    initial: {
      opacity: 0,
      y: 300,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 100,
        type: "spring",
        damping: 25,
        mass: 0.5,
      },
    },
  });
};
</script>

<template>
  <div
    class="target"
    ref="targetEl"
    @click="test"
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