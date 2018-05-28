<template>
    <header class="y_header rowCenterNoWarp" :style="{height:height+'px'}">
        <h1 @click="changePlatform">抖音</h1>
        <div class="dropDown" v-if="dropDownShow">
            <h1 v-for="(platform,index) in options" :key="index">
                {{platform}}
            </h1>
        </div>
    </header>
</template>

<script>
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
        }
    },
    props: {
        height: {
            type: Number,
            default: 50
        }
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
            color: #fff;
        }
        .dropDown{
            position: absolute;
            border-radius: 4px;
            background: rgba($color: #000000, $alpha: .4);
            top: 4rem;
            padding: 1rem;
        }
    }
</style>
