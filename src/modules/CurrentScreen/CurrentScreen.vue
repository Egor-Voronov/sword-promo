<script setup lang="ts">
import type { Component } from "vue";
import { ref } from "vue";
import type { screensArray } from "./types/screensArray";
import type { Range } from "./types/screensRange";
import ScreenContainer from "@/components/ScreenContainer/ScreenContainer.vue";
import Advantages from "../../screens/AdvantagesScreen/AdvantagesScreen.vue";
import Main from "../../screens/MainScreen/MainScreen.vue";

type T = Range<0, typeof screens.length>;

const screens: screensArray = [Main, Advantages];
let screensRange = ref<T>(0);
let currentScreen = ref<number>(screensRange.value);
console.log(screens);
</script>

<template>
  <ScreenContainer>
    <component :is="screens[currentScreen]" />
  </ScreenContainer>
</template>
