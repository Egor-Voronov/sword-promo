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
  <screen-container>
    <component :is="screens[currentScreen]" />
  </screen-container>
</template>