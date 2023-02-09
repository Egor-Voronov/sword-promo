<template>
  <div :class="$style.fixedPanel">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.fixedPanel {
  position: fixed;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: red;

  @include _desktop {
    padding: toRem(50);
  }
}
</style>
