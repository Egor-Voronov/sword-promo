<template>
  <button :class="$style.roundBtn">
    <slot />
  </button>
</template>

<style module lang="scss">
.roundBtn {
  display: flex;
  justify-content: center;
  align-items: center;

  @extend %PreorderBtnFont;
  width: toRemMob(85);
  height: toRemMob(85);
  border-radius: 100%;
  background-color: rgba(#fff, 0);
  border: solid $black 0.5px;

  &:hover {
    @media #{$mouse-device} {
      text-decoration-line: underline;
    }
  }

  @include _desktop {
    width: toRem(175);
    height: toRem(175);
  }
}
</style>