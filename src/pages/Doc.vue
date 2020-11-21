<template>
  <Topnav />
  <div class="content">
    <aside v-if="asideVisiable">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/swich">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>主内容</main>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";

export default {
  components: { Topnav },
  setup() {
    let asideVisiable = inject<Ref<boolean>>("asideVisiable");
    console.log("Doc's  asideVisiable.value: ", asideVisiable.value);
    return { asideVisiable}
  }
};
</script>

<style lang="scss">
aside {
  border: 1px solid red;
  width: 150px;
  padding: 16px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position:fixed;
    top:0;
    left:0;
    padding-top: 70px;
  }
}
</style>