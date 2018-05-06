<template>
  <div>
    <router-link :to="link">
      <div class="y_cell rowBetweenNoWarp" :style="{height:height}" :class="{shadow:shadow}">
        <div class="cell_left rowStartNoWarp">
          <slot name="icon" />
          <slot name="text" />
        </div>
        <div class="cell_right colCenterNoWarp">
          <slot name="point">
            <img src="../assets/imgs/Icon_points.png" class="points" alt="">
          </slot>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'YCell',
    data () {
      return {
      }
    },
    props: {
      link: {
        type: String,
        default: ''
      },
      height: {
        type: null,
        default: '4.5rem'
      },
      shadow: {
        type: Boolean,
        default: true,
      }
    }
}
</script>

<style scoped lang="scss">
  .y_cell{
    width: 100%;
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
    &.shadow{
      box-shadow: 0 1px 15px #c9c9c9;
    }
    .cell_left{
      height: 100%;
      width: 90%;
    }
    .cell_right{
      height: 100%;
      width: 10%;
      img.points{
        width: 1.5rem;
      }
    }
  }
</style>
