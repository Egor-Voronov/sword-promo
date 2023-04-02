<script lang="ts" setup>
import BaseRoundBtn from "@/ui/BaseRoundBtn.vue";
</script>

<template>
  <div :class="$style.preorder">
    <a href="mailto:egor.voronov.dev@gmail.com" :class="$style.preorderBtn">
      <BaseRoundBtn>
        {{ $t("preorder.preorderBtn") }}
      </BaseRoundBtn>
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
    position: relative;
    pointer-events: auto;
    top: toRem(-150);
  }
}
</style>
