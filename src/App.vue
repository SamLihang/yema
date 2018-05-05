<template>
  <div id="app">
    <y-header />
    <router-view/>
    <y-footer />
  </div>
</template>

<script>
import YFooter from './components/YFooter'
import YHeader from './components/YHeader'
export default {
  name: 'App',
  components: {
    YHeader,
    YFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
