<template>
  <div id="app">
    <y-header :height="headerHeight" v-if="headerHeight"/>
    <router-view class="router_view" 
    :style="{height: contentHeight+'px', paddingTop: headerHeight+'px'}" 
    :height="contentHeight" 
    />
    <y-footer :height="footerHeight" v-if="footerHeight"/>
  </div>
</template>

<script>
import YFooter from './components/YFooter'
import YHeader from './components/YHeader'
export default {
  name: 'App',
  data() {
    return {
      headerH: 3.8,
      footerH: 4.5,
    }
  },
  components: {
    YHeader,
    YFooter,
  },
  computed: {
    devHeight() {
      return document.documentElement.clientHeight || document.body.clientHeight;
    },
    contentHeight() {
      return this.devHeight - this.headerHeight - this.footerHeight
    },
    headerHeight() {
      return this.$route.meta.hasHeader ? this.rem2px(this.headerH) : 0
    },
    footerHeight() {
      return this.$route.meta.hasFooter ? this.rem2px(this.footerH) : 0
    }
  },
  created (){
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .router_view{
      height: calc(100% - 1px)
    }
}

</style>
