<template>
  <button class="gulu-button" :class="{ [`theme-${theme}`]: theme }">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },
};
</script>
