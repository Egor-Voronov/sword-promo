<script setup lang="ts"></script>

<template>
  <div :class="$style.heroContainer">
    <slot></slot>
  </div>
</template>

<style module lang="scss">
.heroContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
