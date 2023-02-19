<script lang="ts" setup>
import FixedPanel from "../ui/FixedPanel.vue";
import ScrollTip from "./ScrollTip/ScrollTip.vue";
import Title from "./Title/Title.vue";
</script>

<template>
  <fixed-panel :class="$style.bottomPanel">
    <Title />
    <ScrollTip />
  </fixed-panel>
</template>

<style lang="scss" module>
.bottomPanel {
  bottom: 0;

  @extend %FixedPanelsLight;
}
</style>
