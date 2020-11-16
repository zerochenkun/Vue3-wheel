<template>
  <div>导航栏 |
  <router-link to="/">1</router-link></div> |
  <router-link to="/xxx">2</router-link></div>
  <hr />
  <router-view />

</template>

<script>
import Chenuvi from './components/Chenuvi.vue'

export default {
  name: 'App',
}
</script>
