<script setup lang="ts"></script>

<template>
  <div :class="$style.mainContainer">
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
