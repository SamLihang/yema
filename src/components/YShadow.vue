<template>
  <div class="y_shadow">
    <div class="y_content">
        <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {

        }
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
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            padding: 1rem;
            background: #fff;
        }
    }
</style>
