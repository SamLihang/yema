<template>
  <div class="y_star rowStartNoWarp">
    <div class="star" v-for="(i,index) in count" :key="index">
      <img src="../assets/imgs/Icon_light_star.png" alt="" v-if="index < curCount">
      <img src="../assets/imgs/Icon_unlight_star.png" v-else alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'YStar',
    data () {
      return {
      }
    },
    props: {
      count: {
        type: Number,
        default: 5
      },
      curCount: {
        type: Number,
        default: 0
      }
    }
}
</script>

<style scoped lang="scss">
.y_star{
  .star{
    img{
      width: 1.3rem;
      height: 1.2rem;
      margin-right: .2rem;
    }
  }
}
</style>
