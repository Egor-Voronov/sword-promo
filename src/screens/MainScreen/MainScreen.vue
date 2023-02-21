<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const targetEl = ref<HTMLDivElement>();

const test = () => {
  useMotion(targetEl, {
    initial: {
      opacity: 0,
      y: 300,
      transition: {
        delay: 150,
        dumped: 100,
        repeatType: "reverse",
      },
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 150,
        dumped: 100,
        repeatType: "reverse",
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
    <div :class="$style.test"></div>
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

.test {
  width: 500px;
  height: 500px;
  background-color: red;
}
</style>
