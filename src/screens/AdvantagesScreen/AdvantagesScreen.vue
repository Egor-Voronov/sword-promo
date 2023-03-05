<script setup lang="ts">
import GoodAdvantages from "@/components/GoodAdvantages/GoodAdvantages.vue";
</script>

<template>
  <div :class="$style.advantages">
    <GoodAdvantages />
  </div>
</template>

<style module lang="scss">
.advantages {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
}
</style>