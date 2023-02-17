<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { axisClients } from "@/utils/CustomCursor/types/axisClients";

const pos = ref({ x: 0, y: 0 });
let isLBMKeyUp = ref<boolean>(false);
const cursor = computed(() => ({
  top: `${pos.value.y}px`,
  left: `${pos.value.x}px`,
  border: `${isLBMKeyUp.value ? "none" : ""}`,
  width: `${isLBMKeyUp.value ? "7px" : ""}`,
  height: `${isLBMKeyUp.value ? "7px" : ""}`,
}));

function onMousemove({ clientX: x, clientY: y }: axisClients) {
  pos.value = { x, y };
}

function onMouseUp() {}

onMounted(() => {
  document.addEventListener("mousemove", onMousemove);
  document.addEventListener("mouseup");
});
onUnmounted(() => document.removeEventListener("mousemove", onMousemove));
</script>

<template>
  <div
    :class="$style.innerCursor"
    :style="cursor"
    @keyup.enter="isLBMKeyUp = true"
  />
  <div
    :class="$style.outerCursor"
    :style="cursor"
    @keyup.enter="isLBMKeyUp = true"
  />
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
