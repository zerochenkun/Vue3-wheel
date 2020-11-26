<template>
  <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
    inheritAttrs : false,
    setup(props,context){
        const {size ,...rest} = context.attrs
        // const {size , onClick , onMouseover} = context.attrs
        return {size,rest}
    }
};
</script>
