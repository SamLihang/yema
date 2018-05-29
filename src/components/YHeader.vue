<template>
    <header class="y_header rowCenterNoWarp" :style="{height:height+'px'}">
        <h1 @click.stop="changePlatform">{{getPlatform}}</h1>
        <div class="arrow" :class="{top:dropDownShow}"></div>
        <div class="dropDown" v-if="dropDownShow">
            <h1 v-for="(platform,index) in platforms" :key="index" v-if="!platform.select" @click.stop="setPlatform(index)">
                {{platform.name}}
            </h1>
        </div>
    </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'YHeader',
    data () {
        return {
            options: ["抖音", "微视"],
            dropDownShow: false
        }
    },
    methods: {
        changePlatform() {
            this.dropDownShow = true
        },
        setPlatform(index) {
            this.$store.commit('setPlatform', index)
            this.dropDownShow = false
        }
    },
    computed: {
        ...mapState({
            platforms: store => {return store.platforms}
        }),
        ...mapGetters([
            'getPlatform'
        ])
    },
    props: {
        height: {
            type: Number,
            default: 50
        }
    },
    mounted() {
        document.addEventListener('click', e => {
            if(this.dropDownShow) this.dropDownShow = false;
        }, false)
    },
    created(){
    }
}
</script>

<style scoped lang="scss">
    .y_header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        background: linear-gradient(to left, #ff728b, #fe987e);
        h1{
            z-index: 9;
            color: #fff;
        }
        .arrow{
            z-index: 9;
            position: relative;
            margin-left: .5rem;
            &::before{
                content: '';
                position: absolute;
                top: -.3rem;
                width: .5rem;
                height: .5rem;
                border-right: 2px solid #fff;
                border-bottom: 2px solid #fff;
                transform-origin: 70% 70% ;
                transform: rotate(45deg);
                transition: transform .3s ease-in-out;
            }
            &.top{
                &::before{
                    transform: rotate(-135deg) 
                }
            }
        }
        .dropDown{
            position: absolute;
            border-radius: 4px;
            background: rgba($color: #000000, $alpha: .4);
            top: 0rem;
            text-align: center;
            width: 7rem;
            padding: 3rem 0rem 0;
            line-height: 2rem;
            h1{
                width: 100%;
                border-top: 1px solid #ff8594;
                padding: .5rem 0;
                margin-right: .5rem;
            }
        }
    }
</style>
