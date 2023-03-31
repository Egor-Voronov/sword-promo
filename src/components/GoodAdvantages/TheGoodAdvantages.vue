<script setup lang="ts">
import GoodAdvantage from "./ui/GoodAdvantage.vue";
</script>

<template>
  <div :class="$style.advantagesContainer">
    <GoodAdvantage v-for="n in 2" :num="n" :key="n" />
  </div>
</template>

<style module lang="scss">
.advantages {
  &Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;

    gap: toRemMob(10);

    @include _desktop {
      gap: toRem(100);
    }
  }
}
</style>
