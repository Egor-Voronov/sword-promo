<script lang="ts" setup>
import { computed } from "vue";
import { useCurrentLang } from "@/store/languages";
import i18n from "@/utils/i18n";

const currentLang = useCurrentLang();
const locale = computed(() => i18n.global.locale.value);

const switchLanguage = () => {
  const newLang = currentLang.value === "ru" ? "en" : "ru";
  currentLang.value = newLang;
  i18n.global.locale.value = newLang;
  document.querySelector("html")?.setAttribute("lang", newLang);
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
