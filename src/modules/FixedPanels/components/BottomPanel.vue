<script lang="ts" setup>
import FixedPanel from "../ui/FixedPanel.vue/";
</script>

<template>
  <fixed-panel :class="$style.bottomPanel"> </fixed-panel>
</template>

<style lang="scss" module>
.bottomPanel {
  bottom: 0;
}
</style>
