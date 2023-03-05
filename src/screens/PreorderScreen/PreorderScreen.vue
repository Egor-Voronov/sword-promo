<script lang="ts" setup>
import RoundBtn from "@/ui/RoundBtn.vue";
</script>

<template>
  <div :class="$style.preorder">
    <a href="mailto:egor.voronov.dev@gmail.com" :class="$style.preorderBtn">
      <RoundBtn />
    </a>
  </div>
</template>

<style lang="scss" module>
.preorder {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100vh;

  &Btn {
    pointer-events: auto;
    margin-bottom: toRem(150);
  }
}
</style>
