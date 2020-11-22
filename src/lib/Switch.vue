<template>
  <button><span></span></button>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h/2;
  background: blue;
  position: relative;
  &:hover > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  border-radius: $h2 / 2;
  background: white;
}
</style>
