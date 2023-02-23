<script setup lang="ts">
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
</script>

<template>
  <ScreenContainer>
    <div :class="$style.test"></div>
  </ScreenContainer>
</template>

<style module lang="scss">
.test {
  width: 500px;
  height: 500px;
  background-color: blue;
}
</style>
