<script lang="ts" setup>
import { computed } from "vue";
import i18n from "@/utils/i18n";

const locale = computed(() => i18n.global.locale.value);

const switchLanguage = () => {
  i18n.global.locale.value = locale.value === "ru" ? "en" : "ru";
};
</script>

<template>
  <button @click="switchLanguage">
    {{ locale }}
  </button>
</template>

<style module lang="scss">
button {
  background-color: rgba(#fff, 0);
  border: none;
  @extend %FixedPanelsBold;
  pointer-events: auto;
}
</style>
