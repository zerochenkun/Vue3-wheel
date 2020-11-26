<template>
  <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  props: {
    size: String,
    disabled: Boolean,
  },
  setup(props, context) {
    console.log("props: ", props);
    const { size, ...rest } = context.attrs;
    console.log("context.attrs: ", { ...context.attrs });
    // const {size , onClick , onMouseover} = context.attrs
    return { size, rest };
  },
};
</script>
