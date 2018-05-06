<template>
  <div class="my_task">
    <y-title />
    <div class="my_task_list">
      <y-cell height="6rem" link="/TaskDetaile" class="y_cell">
        <img src="../assets/imgs/bc_task.jpg" alt="" slot="icon" class="task_icon">
        <div class="task_content colBetweenNoWarp" slot="text">
          <div class="content_top rowBetweenNoWarp">
            <div class="creat_time rowStartNoWarp">
              <img src="../assets/imgs/Icon_shop.png" alt="">
              <p>创建时间：{{createTime}}</p>
            </div>
            <div class="task_status">
              <p>订单{{'进行中'}}</p>
            </div>
          </div>
          <div class="content_bottom rowBetweenNoWarp">
            <div class="task_count">
              <p>数量：{{data.count}}</p>
            </div>
            <div class="fulfil_count" v-if="data.fuileCount">
              <p>完成数量：{{data.fuileCount}}</p>
            </div>
          </div>
        </div>
        <img src="../assets/imgs/Icon_arrow.png" alt="" class="point" slot="point">
      </y-cell>
    </div>
  </div>
</template>

<script>
import YTitle from '@/components/YTitle'
import YCell from '@/components/YCell'
export default {
    name: 'MyTask',
    components: {
      YCell,
      YTitle,
    },
    data () {
      return {
        data: {createTime: 1525452115000, count: 10, fuileCount: 10}
      }
    },
    computed: {
      createTime () {
        let time = new Date(this.data.createTime)
        let Y = time.getFullYear()
        let M = time.getMonth() + 1
        let D = time.getDate()
        return `${Y}-${M < 10 ? '0' + M : M}-${D < 10 ? '0' + D : D}`
      }
    }
}
</script>

<style scoped lang="scss">
  .my_task{
    .my_task_list{
      padding: 1rem;
      .y_cell{
        margin-bottom: 1rem;
      }
      .task_icon{
        width: 15%;
        height: 100%;
      }
      .task_content{
        width: 85%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
        .content_top{
          width: 100%;
          position: relative;
          img{
            width: 1rem;
          }
          &::before{
            content: '';
            position: absolute;
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            transform: translateY(50%);
            background: #ff9657;
            bottom: 0;
            left: 0;
          }
          .creat_time{
            position: relative;
            &::before{
              content: '';
              position: absolute;
              width: 100%;
              height: 1px;
              bottom: 0;
              left: .7rem;
              transform: translateY(50%);
              border-bottom: 2px dotted #999;
            }
            &::after{
              content: '';
              position: absolute;
              width: .4rem;
              height: .4rem;
              border-radius: 50%;
              background: #ff9657;
              bottom: 0;
              right: -1.4rem;
              transform: translateY(50%);
            }
            p{
              color: #666;
              margin-left: .5rem;
            }
          }
          .task_status{
            p{
              color: #ccc;
            }
          }
        }
        .content_bottom{
          width: 100%;
          position: relative;
          &::before{
            content: '';
            position: absolute;
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            transform: translateY(-50%);
            background: #ff9657;
            top: 50%;
            left: 0;
          }
          p{
            color: #999;
            text-indent: 1rem;
          }
        }
      }
      .point{
        width: .8rem;
      }
    }
  }
</style>
