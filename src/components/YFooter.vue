<template>
    <div class="main rowBetweenNoWarp" :style="{height:height+'px'}">
        <router-link to="/" class="footerIcon colCenterNoWarp">
            <img src="../assets/imgs/Icon_Home.png" alt="" :class="{clicked: router === 0}">
            <p>任务大厅</p>
        </router-link>
        <div class="footerIcon colCenterNoWarp" @click="release">
            <img src="../assets/imgs/Icon_Appl.png" alt="" :class="{clicked: router === 1}">
            <p>发布任务</p>
        </div>
        <!-- <router-link to="/teaching" class="footerIcon colCenterNoWarp">
            <img src="../assets/imgs/Icon_teach.png" alt="" :class="{clicked: router === 2}">
            <p>视频</p>
        </router-link> -->
         <router-link to="/mine" class="footerIcon colCenterNoWarp">
            <img src="../assets/imgs/Icon_Self.png" alt="" :class="{clicked: router === 3}">
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
    computed: {
        router () {
            if (this.$store.state.popup.show) {
                return 1
            } else if (this.$route.path === '/'){
                return 0
            } else if (this.$route.path === '/teaching'){
                return 2
            } else if (this.$route.path === '/mine'){
                return 3
            }
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
        z-index: 9;
        overflow: hidden;
        background: linear-gradient(to left, #ff728b, #fe987e);
        .footerIcon{
            width: 7rem;
            img{
                border-radius: 50%;
                position: relative;
                width: 2.3rem;
                height: 2.3rem;
                flex-flow: 0 0 auto;
                padding: .2rem;
                box-sizing: border-box;
                border: .5px solid rgba(255, 179, 199, 0);
                transition: all .3s ease-in-out;
                border: .5px solid rgba(255, 179, 199, 1);
                &.clicked{
                    background: #f87e5b;
                }
            }
            p{
                font-size: 1rem;
                color: #fff;
            }
        }
    }
</style>
