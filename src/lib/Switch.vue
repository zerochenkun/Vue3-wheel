<template>
  <button @click="toggle" :class="{ checked: value }"><span></span></button>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h/2;
  background: grey;
  position: relative;
  &:focus {
    outline: none;
  }
  &.checked {
    background: blue;
  }
  &.checked > span {
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
  transition: left 0.25s;
}
</style>
