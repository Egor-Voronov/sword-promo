<script lang="ts" setup>
import FixedPanel from "../ui/FixedPanel.vue/";
import Socials from "./Socials/Socials.vue";
import rotateImg from "~/img/FixedPanels/rotate-y-axis.svg";
</script>

<template>
  <fixed-panel :class="$style.topPanel">
    <Socials />
    <img :class="$style.img" :src="rotateImg" alt="rotate" />
  </fixed-panel>
</template>

<style lang="scss" module>
.topPanel {
  top: 0;
}

img {
  @include _desktop {
    width: toRem(30);
    height: toRem(30);
  }
}
</style>
