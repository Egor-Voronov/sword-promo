<script lang="ts" setup>
import { useCurrentGood } from "@/store/goods";

const currGood = useCurrentGood().currentGood.value;
</script>

<template>
  <p :class="$style.currGood">{{ $t(`goods.${currGood}.name`) }}</p>
</template>

<style module lang="scss">
.currGood {
  letter-spacing: toRem(-1);
}
</style>
