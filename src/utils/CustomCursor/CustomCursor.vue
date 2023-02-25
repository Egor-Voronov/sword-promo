<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { AxisClients } from "@/utils/CustomCursor/types/AxisClients";

const pos = ref({ x: 0, y: 0 });
const cursor = computed(() => ({
  top: `${pos.value.y}px`,
  left: `${pos.value.x}px`,
}));

function onMousemove({ clientX: x, clientY: y }: AxisClients) {
  pos.value = { x, y };
}

onMounted(() => document.addEventListener("mousemove", onMousemove));
onUnmounted(() => document.removeEventListener("mousemove", onMousemove));
</script>

<template>
  <div :class="$style.innerCursor" :style="cursor" />
  <div :class="$style.outerCursor" :style="cursor" />
</template>

<style module lang="scss">
@include _desktop {
  .innerCursor {
    position: fixed;
    left: toRem(10);
    width: toRem(10);
    height: toRem(10);
    transform: translate(-50%, -50%);
    background-color: $gray;
    mix-blend-mode: difference;
    border-radius: 50%;
    pointer-events: none;
    transition: width 0.5s, height 0.5s;
    z-index: 990;
  }

  .outerCursor {
    position: fixed;
    left: toRem(10);
    width: toRem(20);
    height: toRem(20);
    transform: translate(-50%, -50%);
    border: toRem(1) solid #fff;
    mix-blend-mode: difference;
    border-radius: 50%;
    z-index: 999;
    transition: 0.1s;
    pointer-events: none;
  }
}
</style>
