<template>
    <div class="main rowBetweenNoWarp">
        <router-link to="" class="footerIcon colCenterNoWarp">
            <img src="../assets/imgs/Icon_Home.png" alt="">
            <p>任务大厅</p>
        </router-link>
        <router-link to="" class="footerIcon colCenterNoWarp">
            <img src="../assets/imgs/Icon_Appl.png" alt="">
            <p>发布任务</p>
        </router-link>
        <router-link to="" class="footerIcon colCenterNoWarp">
            <img src="../assets/imgs/Icon_Self.png" alt="">
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'YFooter',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        height: 4.5rem;
        position: fixed;
        bottom: 0;
        left: 0;
        overflow: hidden;
        background: linear-gradient(left, #ff728b, #fe987e);
        .footerIcon{
            width: 7rem;
            img{
                width: 2.5rem;
            }
            p{
                font-size: 1rem;
                color: #fff;
            }
        }
    }
</style>
