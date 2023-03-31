<script lang="ts" setup>
import { useCurrentGood } from "@/store/goods";

defineProps<{
  num: number;
}>();

const currGood = useCurrentGood().currentGood.value;
</script>

<template>
  <div :class="$style.advantageContainer">
    <h2 :class="$style.advantageTitle">
      {{ $t(`goods.${currGood}.advantages.advantage${num}.title`) }}
    </h2>
    <p :class="$style.advantageDescription">
      {{ $t(`goods.${currGood}.advantages.advantage${num}.description`) }}
    </p>
  </div>
</template>

<style lang="scss" module>
.advantage {
  &Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: start;

    max-width: toRemMob(280);

    @include _desktop {
      max-width: toRem(500);
    }
  }

  &Title {
    @extend %AdvantageTitleFont;
    margin-bottom: toRemMob(5);

    @include _desktop {
      margin-bottom: toRem(5);
    }
  }

  &Description {
    @extend %AdvantageDescriptionFont;
  }
}
</style>
