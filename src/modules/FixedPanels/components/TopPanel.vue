<script lang="ts" setup>
import { ref, computed } from "vue";
import FixedPanel from "../ui/FixedPanel.vue";
import Socials from "./Socials/Socials.vue";
import LangSwitcher from "./LangSwitcher/LangSwitcher.vue";
import rotateImg from "~/img/FixedPanels/rotate-y-axis.svg";
import { useScreensState } from "@/store/screens";

let SCREENS_LENGTH = computed(() => useScreensState().SCREENS.value.length);
let currentScreen = computed(() => useScreensState().currentScreen.value);

let test = () =>
  console.log(useScreensState().SCREENS.value, currentScreen.value, SCREENS_LENGTH.value);
</script>

<template>
  <fixed-panel :class="$style.topPanel">
    <Socials />
    <img
      :class="$style.img"
      :src="rotateImg"
      alt="rotate"
      v-if="currentScreen !== SCREENS_LENGTH - 1"
      @click="test"
    />
    <LangSwitcher />
  </fixed-panel>
</template>

<style lang="scss" module>
.topPanel {
  top: 0;
  @extend %FixedPanelsBold;
}

img {
  pointer-events: auto;
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