<template>
  <div class="y_title colCenterNoWarpStart">
    <img src="../assets/imgs/Icon_back.png" alt="" @click.stop="back">
    <div class="title rowBetweenNoWarp">
      <h1>{{this.$route.name}}</h1>
      <img src="../assets/imgs/Icon_edit.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'YTitle',
    data () {
      return {
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
}
</script>

<style scoped lang="scss">
  .y_title{
    width: 100%;
    height: 8rem;
    padding: 0 1rem;
    position: relative;
    box-sizing: border-box;
    background: linear-gradient(left, #ff728b, #fe987e);
    .title{
      width: 100%;
      margin-top: 1rem;
      h1{
        color: #fff;
        font-weight: 600;
        font-size: 1.8rem;
      }
    }
    img{
      width: 2.5rem;
    }
  }
</style>
