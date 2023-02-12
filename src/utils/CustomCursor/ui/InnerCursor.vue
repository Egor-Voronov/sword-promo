<template>
  <div :class="$style.innerCursor" ref="cursor" />
</template>

<style lang="scss" module>
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

    &.grow {
      width: toRem(25);
      height: toRem(25);
      transition: width 0.5s, height 0.5s;
    }
  }
}
</style>
