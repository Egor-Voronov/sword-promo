<script setup lang="ts">
import { ref } from "vue";
import type { screensType } from "./types/screensType";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import Advantages from "../../screens/AdvantagesScreen/AdvantagesScreen.vue";
import Main from "../../screens/MainScreen/MainScreen.vue";

let currentScreen = ref<string>("Main");

const screens: screensType = {
  Advantages,
  Main,
};
</script>

<template>
  <ScreenContainer>
    <component :is="screens[currentScreen]" />
  </ScreenContainer>
</template>