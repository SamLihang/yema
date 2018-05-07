<template>
  <div id="app">
    <y-header :height="headerHeight" v-if="headerHeight" />
    <router-view class="router_view" :class="{blur:this.$store.state.popup.show}"
    :style="{height: contentHeight+'px', paddingTop: headerHeight+'px', paddingBottom: footerHeight+'px'}" 
    :height="contentHeight" 
    />
    <y-footer :height="footerHeight" v-if="footerHeight"/>
    <y-shadow v-if="this.$store.state.popup.show" :class="{blur:this.$store.state.popup.show}"/>
  </div>
</template>

<script>
import YFooter from './components/YFooter'
import YHeader from './components/YHeader'
import YShadow from './components/YShadow'
import mapState from 'vuex' 
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
    YShadow
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
    },
  },
  created (){
  }
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .router_view{
      height: 100%;
      &.blur{
        filter: blur(4rem)
      }
    }
  }

</style>
