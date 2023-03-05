<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useCurrentLang } from "@/store/languages";
import i18n from "@/utils/i18n";

const currentLang = useCurrentLang();
const locale = computed(() => i18n.global.locale.value);
const html = document.querySelector("html");

const switchLanguage = () => {
  const newLang = currentLang.value === "ru" ? "en" : "ru";
  currentLang.value = newLang;
  i18n.global.locale.value = newLang;
  html?.setAttribute("lang", newLang);
};

onMounted(() => html?.setAttribute("lang", i18n.global.locale.value));
</script>

<template>
  <button @click="switchLanguage">
    {{ $t("fixedPanels.locale") }}
  </button>
</template>

<style module lang="scss">
button {
  background-color: rgba(#fff, 0);
  border: none;
  @extend %FixedPanelsBold;
  pointer-events: auto;
  width: toRem(40);
}
</style>