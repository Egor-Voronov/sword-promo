<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { axisClients } from "@/utils/CustomCursor/types/axisClients";

const innerCursor = ref<HTMLDivElement>;
const outerCursor = ref<HTMLDivElement>;

const pos = ref({ x: 0, y: 0 });
const cursor = computed(() => ({
  top: `${pos.value.y}px`,
  left: `${pos.value.x}px`,
}));

const links = computed(() => ({
  arr: Array.from(document.querySelectorAll(".link")),
}));

function onMousemove({ clientX: x, clientY: y }: axisClients) {
  pos.value = { x, y };
}

let isMouseGrow = ref<boolean>(true);
onMounted(() => {
  document.addEventListener("mousemove", onMousemove);

  links.value.arr.forEach((link) => {
    link.addEventListener("mouseover", () => {
      isMouseGrow.value = true;
      console.log(isMouseGrow);
    });
    link.addEventListener("mouseout", () => {
      isMouseGrow.value = false;
      console.log(isMouseGrow);
    });
  });
});
onUnmounted(() => document.removeEventListener("mousemove", onMousemove));
</script>

<template>
  <div
    :class="
      isMouseGrow ? [$style.grow, $style.innerCursor] : $style.innerCursor
    "
    :style="cursor"
  />
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
    background-color: #fff;
    mix-blend-mode: difference;
    border-radius: 50%;
    pointer-events: none;
    transition: width 0.5s, height 0.5s;
    z-index: 990;
  }

  .grow {
    width: toRem(25);
    height: toRem(25);
    transition: width 0.5s, height 0.5s;
  }

  .outerCursor {
    position: fixed;
    left: toRem(10);
    width: toRem(25);
    height: toRem(25);
    transform: translate(-50%, -50%);
    border: toRem(1) solid #fff;
    mix-blend-mode: difference;
    border-radius: 50%;
    z-index: 999;
    transition: 0.1s;

    &.none {
      display: none;
    }
  }
}
</style>
