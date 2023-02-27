<script lang="ts" setup>
import { defineProps } from "vue";
import type { MarqueeProps } from "./types/MarqueeProps";

const props = defineProps({
  marqueeOrientation: {
    required: true as boolean,
    type: String as MarqueeProps,
  },
});

const { marqueeOrientation } = props;
</script>

<template>
  <div :class="$style.marqueeBody">
    <div
      :class="[
        $style.marqueeTextContainer,
        marqueeOrientation === 'horizontal'
          ? $style.marqueeHorizontal
          : $style.marqueeVertical,
      ]"
    >
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      </h2>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "animations/marqueeScrolls";

.marquee {
  &Body {
    margin: 30px auto;
    border: 1px solid red;
  }

  &TextContainer {
    width: 100%;
    height: 100%;
  }

  &Horizontal {
    animation: marqueeHorizontalScroll 5s linear infinite;
  }

  &Vertical {
    animation: marqueeVerticalScroll;
  }
}
</style>
