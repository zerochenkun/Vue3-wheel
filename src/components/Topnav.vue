<template>
  <div class="topnav">
    <div class="logo" @click="toggleAside">Logo</div>
    <div class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    let asideVisiable = inject<Ref<boolean>>('asideVisiable');
    const toggleAside = () => {
      asideVisiable.value = ! asideVisiable.value;
    };
    console.log("Topnav's  asideVisiable.value: ", asideVisiable.value);
    return { toggleAside };
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
