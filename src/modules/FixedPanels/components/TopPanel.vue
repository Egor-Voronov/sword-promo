<script lang="ts" setup>
import FixedPanel from "../ui/FixedPanel.vue";
import Socials from "./Socials/Socials.vue";
import RotateImg from "./RotateImg/RotateImg.vue";
import LangSwitcher from "./LangSwitcher/LangSwitcher.vue";
</script>

<template>
  <fixed-panel :class="$style.topPanel">
    <Socials />
    <RotateImg />
    <LangSwitcher />
  </fixed-panel>
</template>

<style lang="scss" module>
.topPanel {
  top: 0;
  @extend %FixedPanelsBold;
}
</style>
