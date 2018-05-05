<template>
  <div class="y_cell rowBetweenNoWarp">
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
</template>

<script>
export default {
    name: 'YCell',
    data () {
      return {
      }
    }
}
</script>

<style scoped lang="scss">
  .y_cell{
    width: 100%;
    height: 4.5rem;
    position: relative;
    background-color: #fff;
    box-shadow: 0 1px 15px #c9c9c9;
    padding: 0 1rem 0 0;
    box-sizing: border-box;
    .cell_left{

    }
    .cell_right{
      img.points{
        width: 1.5rem;
      }
    }
  }
</style>
