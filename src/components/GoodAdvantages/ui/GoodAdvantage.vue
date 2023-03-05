<script setup lang="ts">
import { useCurrentGood } from "@/store/goods";

const currGood = useCurrentGood().currentGood.value;
</script>

<template>
  <div :class="$style.advantageContainer">
    <h2 :class="$style.advantageTitle">
      {{ $t("goods.sword.advantage1.title") }}
    </h2>
    <p :class="$style.advantageDescription">
      {{ $t("goods.sword.advantage1.description") }}
    </p>
  </div>
</template>

<style module lang="scss">
.advantage {
  &Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    text-align: start;
    max-width: 95vw;

    @include _desktop {
      max-width: toRem(500);
    }
  }

  &Title {
    @extend %AdvantageTitle;
    margin-bottom: toRemMob(5);

    @include _desktop {
      margin-bottom: toRem(5);
    }
  }

  &Description {
    @extend %AdvantageDescription;
  }
}
</style>
