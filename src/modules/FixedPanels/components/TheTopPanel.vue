<script lang="ts" setup>
import FixedPanel from "../ui/FixedPanel.vue";
import Socials from "./Socials/TheSocials.vue";
import RotateImg from "./RotateImg/TheRotateImg.vue";
import LangSwitcher from "./LangSwitcher/TheLangSwitcher.vue";
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
  @extend %FixedPanelsBoldFont;
}
</style>
