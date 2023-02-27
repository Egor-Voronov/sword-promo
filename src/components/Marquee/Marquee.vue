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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim minus
        perferendis ullam? Architecto deserunt expedita hic ipsum necessitatibus
        officiis qui repellat voluptas? Animi aspernatur autem consequatur
        deserunt eum exercitationem fuga ipsam maxime molestiae obcaecati
        officia officiis possimus, quis, sed sit tenetur vero? Delectus magnam
        nam numquam perferendis voluptatibus! Ab amet asperiores, aspernatur
        dignissimos doloremque ducimus earum fugit inventore maiores, modi
        molestiae nemo nihil nulla pariatur, possimus quas recusandae
        repellendus rerum sit ut! Adipisci architecto, dolores eos in iure,
        magnam maxime neque porro provident qui, quia quod recusandae veritatis.
        Accusamus ad dolor dolores excepturi exercitationem inventore magni nemo
        nesciunt odio perspiciatis?
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
  }

  &Horizontal {
    animation: marqueeHorizontalScroll 5s linear infinite;
  }

  &Vertical {
    animation: marqueeVerticalScroll;
  }
}
</style>
