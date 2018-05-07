<template>
    <div class="main rowBetweenNoWarp" :style="{height:height+'px'}">
        <router-link to="/community" class="footerIcon colCenterNoWarp">
            <img src="../assets/imgs/Icon_Home.png" alt="">
            <p>任务大厅</p>
        </router-link>
        <div class="footerIcon colCenterNoWarp" @click="release">
            <img src="../assets/imgs/Icon_Appl.png" alt="">
            <p>发布任务{{this.$store.state.popup.show}}</p>
        </div>
        <router-link to="/mine" class="footerIcon colCenterNoWarp">
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
    },
    methods: {
        release () {
            this.$store.commit('changePop')
        }
    },
    props: {
        height: {
            type: Number,
            default: 50
        }
    },
    created () {
    }
}
</script>

<style scoped lang="scss">
    .main{
        left: 0;
        bottom: 0;
        width: 100%;
        position: fixed;
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
