<script setup lang="ts">
import AnimatedScreenContainer from "@/utils/animations/animatedScreenContainer.vue";
</script>

<template>
  <AnimatedScreenContainer>
    <div :class="$style.test"></div>
  </AnimatedScreenContainer>
</template>

<style module lang="scss">
.test {
  width: 500px;
  height: 500px;
  background-color: red;
}
</style>
