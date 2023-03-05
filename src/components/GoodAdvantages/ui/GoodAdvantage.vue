<script setup lang="ts"></script>

<template>
  <div :class="$style.advantageContainer">
    <h2 :class="$style.advantageTitle"></h2>
  </div>
</template>

<style module lang="scss">
.advantage {
  &Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: left;
  }

  &Title {

  }
}
</style>
