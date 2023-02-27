<script lang="ts" setup>
import { computed } from "vue";
import type { MarqueeProps } from "./types/MarqueeProps";

const props = defineProps<MarqueeProps>();

const { marqueeWidth, marqueeOrientation } = props;

const marqueeStyles = computed(() => ({
  maxWidth: marqueeWidth,
}));
</script>

<template>
  <div :class="$style.marqueeBody" :style="marqueeStyles">
    <div>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      </h2>
    </div>
  </div>
</template>

<style lang="scss" module>
.marqueeBody {
  margin: 30px auto;
  border: 1px solid red;
}
</style>
