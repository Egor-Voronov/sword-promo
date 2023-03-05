<script lang="ts" setup>
import RunningLine from "@/components/RunningLine/RunningLine.vue";
</script>

<template>
  <div :class="$style.hero">
    <RunningLine />
  </div>
</template>

<style lang="scss" module>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>