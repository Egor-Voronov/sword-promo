<script setup lang="ts">
import type { RunningLineTxts } from "./types/RunningLineTxts";
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import mockups from "./mockups/mockups.json";
import { randomizeIndex } from "@/utils/randomizeFn";
import { useCurrentGood } from "@/store/goods";

const runningLineTxts = mockups as RunningLineTxts;

const randomTxt: string = randomizeIndex(
  runningLineTxts[useCurrentGood().currentGood.value]
);
</script>

<template>
  <Vue3Marquee :duration="30" :clone="true" :class="$style.RunningLine">
    {{ randomTxt }}
  </Vue3Marquee>
</template>

<style lang="scss" module>
.RunningLine {
  width: 100vw;
  height: toRem(150);

  @extend %RunningLine;
}
</style>
