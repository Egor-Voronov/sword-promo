<script setup lang="ts">
import MobileGoodAdvantages from "@/components/GoodAdvantages/TheGoodAdvantages.vue";
</script>

<template>
  <div :class="$style.advantages">
    <MobileGoodAdvantages :class="$style.advantagesBlock" />
  </div>
</template>

<style module lang="scss">
.advantages {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;

  &Block {
    padding-bottom: toRemMob(45);

    @include _desktop {
      padding-bottom: toRem(50);
    }
  }
}
</style>
