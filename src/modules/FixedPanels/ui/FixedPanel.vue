<template>
  <nav :class="$style.fixedPanel">
    <div :class="$style.panelContainer">
      <slot />
    </div>
  </nav>
</template>

<style lang="scss" module>
.fixedPanel {
  position: fixed;
  width: 100%;
  z-index: 90;
  pointer-events: none;
  //background-color: red;
}

.panelContainer {
  padding: toRemMob(20);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @include _desktop {
    padding: toRem(40);
  }
}
</style>
