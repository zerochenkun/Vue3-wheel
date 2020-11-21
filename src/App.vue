<template>
  <router-view />
</template>

<script lang="ts">
import { ref,provide } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth
    console.log('width: ', width);
    let asideVisiable = ref(width <= 500 ? false : true);
    provide('asideVisiable',asideVisiable)
  }
};
</script>
