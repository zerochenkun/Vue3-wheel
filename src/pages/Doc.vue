<template>
  <Topnav />
  <div class="content">
    <aside>
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

export default { components: { Topnav } };
</script>

<style lang="scss">
  aside{
    border:1px solid red;
    width:150px;
    padding:16px;
    > h2{
      margin-bottom:4px;
    }
    > ol {
      > li {
        padding:4px 0;
      }
    }
  }
</style>