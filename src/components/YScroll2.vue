<template>
  <loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @translate-change="scroll"
  @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" ref="loadmore" :autoFill="false"> 
    <slot />   
    <div slot="top" class="mint-loadmore-top">
      <!-- <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span> -->
      <!-- <span v-show="topStatus === 'loading'">Loading...</span> -->
      <div class=" colCenterNoWarp" v-if="topStatus !== 'loading'">
        <bubble :y="y"></bubble>
      </div>
      <div class="loading" v-else>
        <img src="../assets/svg/spinner.svg" alt="">
      </div>
    </div>
  </loadmore>
</template>

<script>
import Bubble from './YBubble';
import { Loadmore } from  'mint-ui'
export default {
    name: '',
    data () {
      return {
        topStatus: '',
        allLoaded: false,
        y: 0,
      }
    },
    components: {
      Loadmore,
      Bubble
    },
    methods: {
      scroll(y) {
        this.y = y * 1;
      },
      loadTop() {
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
        }, 1000);
      },
      loadBottom(status=false) {
        setTimeout(() => {
          this.allLoaded = status;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        }, 1000);
      },
      handleTopChange(status) {
        this.topStatus = status;
        console.log(status)
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
        console.log(status)
      }
    }
}
</script>

<style scoped lang="scss">
</style>
