<template>
  <div class="payment">
    <y-title />
    <div class="content colCenterNoWarp" :style="{marginTop:'8rem'}">
      <div class="bg"></div>
      <h4>您好，支付成功后即可无限浏览及下载海量教学视频，更快掌握拍摄新技巧哟～</h4>
      <h4>先人一步，获得更多小星星哦～</h4>
      <h4>当然，您的支持也让我们更有动力帮您打造更多优质教学视频哦～</h4>
      <button class="blue" @click="pay">支付15元解锁</button>
    </div>
  </div>
</template>

<script>
import YTitle from '@com/YTitle'
export default {
    name: '',
    data () {
      return {
      }
    },
    components: {
      YTitle,
    },
    methods: {
      pay() {
        console.log('pay')
      }
    }
}
</script>

<style scoped lang="scss">
  .payment{
    .content{
      width: 100%;
      position: relative;
      .bg{
        width: 90%;
        height: 15rem;
        background: url(../assets/imgs/bc_pay.png) 100% 0% no-repeat;
        background-size: contain;
      }
      h4{
        width: 80%;
        margin-top: 1rem;
      }
      button.blue{
        padding: 0 2rem;
        height: 3rem;
        position: relative;
        border-radius: 1.75rem;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 500;
        margin-top: 5rem;
        background: linear-gradient(to left, #00ccff, #00a8ff);
      }
    }
  }
</style>
