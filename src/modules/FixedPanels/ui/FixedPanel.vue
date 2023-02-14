<template>
  <div :class="$style.fixedPanel">
    <div :class="$style.panelContainer">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
.fixedPanel {
  position: fixed;
  width: 100%;
  z-index: 90;
  //background-color: red;
}

.panelContainer {
  padding: toRemMob(40) toRemMob(20);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @include _desktop {
    padding: toRem(40);
  }
}
</style>
