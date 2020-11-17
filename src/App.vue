<template>
  <router-view />
</template>

<script lang="ts">
import { ref,provide } from "vue";
export default {
  name: "App",
  setup() {
    let asideVisiable = ref(false);
    provide('asideVisiable',asideVisiable)
  }
};
</script>
