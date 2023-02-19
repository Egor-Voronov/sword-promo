<script lang="ts" setup>
import FixedPanel from "../ui/FixedPanel.vue";
import Socials from "./Socials/Socials.vue";
import LangSwitcher from "./LangSwitcher/LangSwitcher.vue";
import rotateImg from "~/img/FixedPanels/rotate-y-axis.svg";
</script>

<template>
  <fixed-panel :class="$style.topPanel">
    <Socials />
    <img :class="$style.img" :src="rotateImg" alt="rotate" />
    <LangSwitcher />
  </fixed-panel>
</template>

<style lang="scss" module>
.topPanel {
  top: 0;
  @extend %FixedPanelsBold;
}

img {
  width: toRemMob(15);
  height: toRemMob(15);

  // pixel perfect styles
  position: relative;
  left: toRemMob(-7);

  @include _desktop {
    width: toRem(30);
    height: toRem(30);
  }
}
</style>
