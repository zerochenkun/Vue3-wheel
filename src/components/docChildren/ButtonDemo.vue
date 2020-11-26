<template>
  <div>ButtonDemo 示例</div>
  <h1>示例1</h1>
  <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small" disabled mytest="if not in props,then show in attrs">你好</Button>
</template>

<script>
import Button from "../../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi click");
    };
    return { onClick };
  },
};
</script>
