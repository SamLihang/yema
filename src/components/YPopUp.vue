<template>
  <div class="y_shadow rowCenterNoWarp">
    <div class="y_content" :style="{width:width}" >
        <slot />
    </div>
  </div>
</template>

<script>
export default {
    name: 'YPopUp',
    data () {
        return {

        }
    },
    props: {
        width: {
            type: null,
            default: '90%',
        },
    }
}
</script>

<style scoped lang="scss">
    .y_shadow{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        overflow: hidden;
        position: absolute;
        .y_content{
            z-index: 9;
            padding: 2rem;
            background: #fff;
            border-radius: 4px;
            box-sizing: border-box;
        }
    }
</style>
