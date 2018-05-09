<template>
  <div class="my_task">
    <y-title />
    <div class="my_task_list" :style="{marginTop:'8rem'}">
      <y-cell height="6rem" :link="{path:'/TaskDetaile', query: {id:task.id}}" class="y_cell" v-for="(task,index) in data" :key="index">
        <img src="../assets/imgs/bc_task.jpg" alt="" slot="icon" class="task_icon">
        <div class="task_content colBetweenNoWarp" slot="text">
          <div class="content_top rowBetweenNoWarp">
            <div class="creat_time rowStartNoWarp">
              <img src="../assets/imgs/Icon_shop.png" alt="">
              <p>创建时间：{{createTime(task.createTime)}}</p>
            </div>
            <div class="task_status">
              <p>订单{{taskStatus(task.status)}}</p>
            </div>
          </div>
          <div class="content_bottom rowBetweenNoWarp">
            <div class="task_count">
              <p>数量：{{task.count}}</p>
            </div>
            <div class="fulfil_count">
              <p>剩余数量：{{task.surplus}}</p>
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
import { getMyTasks } from '@/utils/api'
export default {
    name: 'MyTask',
    components: {
      YCell,
      YTitle,
    },
    data () {
      return {
        data: [{"id":2,"createUser":1,"status":2,"createTime":1525453492000,"count":5,"remarks":"备注","surplus":4},{"id":3,"createUser":1,"status":2,"createTime":1525456794000,"count":5,"remarks":"备注","surplus":4},{"id":4,"createUser":1,"status":2,"createTime":1525456798000,"count":5,"remarks":"备注","surplus":4},{"id":5,"createUser":1,"status":2,"createTime":1525456799000,"count":5,"remarks":"备注","surplus":4},{"id":6,"createUser":1,"status":2,"createTime":1525456799000,"count":5,"remarks":"备注","surplus":4},{"id":7,"createUser":1,"status":2,"createTime":1525456799000,"count":5,"remarks":"备注","surplus":4},{"id":8,"createUser":1,"status":2,"createTime":1525456799000,"count":5,"remarks":"备注","surplus":4},{"id":9,"createUser":1,"status":2,"createTime":1525456800000,"count":5,"remarks":"备注","surplus":0},{"id":10,"createUser":1,"status":2,"createTime":1525456800000,"count":5,"remarks":"备注","surplus":5},{"id":11,"createUser":1,"status":2,"createTime":1525456800000,"count":5,"remarks":"备注","surplus":5},{"id":12,"createUser":1,"status":2,"createTime":1525456800000,"count":5,"remarks":"备注","surplus":5},{"id":13,"createUser":1,"status":2,"createTime":1525456800000,"count":5,"remarks":"备注","surplus":5},{"id":14,"createUser":1,"status":2,"createTime":1525456800000,"count":5,"remarks":"备注","surplus":5},{"id":15,"createUser":1,"status":2,"createTime":1525456801000,"count":5,"remarks":"备注","surplus":5},{"id":16,"createUser":1,"status":2,"createTime":1525456801000,"count":5,"remarks":"备注","surplus":5},{"id":17,"createUser":1,"status":2,"createTime":1525456801000,"count":5,"remarks":"备注","surplus":5},{"id":18,"createUser":1,"status":2,"createTime":1525456801000,"count":5,"remarks":"备注","surplus":5},{"id":19,"createUser":1,"status":2,"createTime":1525456801000,"count":5,"remarks":"备注","surplus":5},{"id":20,"createUser":1,"status":2,"createTime":1525456802000,"count":5,"remarks":"备注","surplus":5}]
      }
    },
    methods: {
      createTime (timestamp) {
        let time = new Date(timestamp)
        let Y = time.getFullYear()
        let M = time.getMonth() + 1
        let D = time.getDate()
        return `${Y}-${M < 10 ? '0' + M : M}-${D < 10 ? '0' + D : D}`
      },
      taskStatus (status) {
        switch (status) {
          case 0:
            return '已完成'
            break;
          case 2:
            return '进行中'
            break;
          default:
            break;
        }
      }
    },
    mounted() {
      getMyTasks().then(data => {
        this.data = data
      })
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
