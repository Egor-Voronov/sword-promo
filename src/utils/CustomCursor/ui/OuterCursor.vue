<template>
  <div :class="$style.outerCursor"></div>
</template>

<style lang="scss" module>
@include _desktop {
  .outerCursor {
    position: fixed;
    left: toRem(10);
    width: toRem(25);
    height: toRem(25);
    transform: translate(-50%, -50%);
    border: toRem(1) solid #fff;
    mix-blend-mode: difference;
    border-radius: 50%;

    transition: 0.1s;
  }
}
</style>
