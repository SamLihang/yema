<template>
    <div class="main rowCenterNoWarp" :style="{height:height+'px'}">
        <h1>抖音</h1>
    </div>
</template>

<script>
export default {
    name: 'YHeader',
    data () {
        return {

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
    .main{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        background: linear-gradient(left, #ff728b, #fe987e);
        h1{
            color: #fff;
        }
    }
</style>
