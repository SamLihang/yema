<template>
  <div class="my_task">
    <y-title />
    <y-scroll ref="yscroll" :height="scrollHeight" @pullingUp="pullingUp" @pullingDown="pullingDown" class="my_task_list" :style="{marginTop:titleHeight+'px'}">
      <transition-group name="popbottom">      
        <y-cell height="6rem" :link="{path:'/TaskDetaile', query: {id:task.id}}" class="y_cell" v-for="(task,index) in data" :key="index" v-if="task" :style="{transitionDelay:index/20+'s'}">
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
      </transition-group>
    </y-scroll>
  </div>
</template>

<script>
import YCell from '@/components/YCell'
import YTitle from '@/components/YTitle'
import YScroll from '@/components/YScroll'
import { getMyTasks } from '@/utils/api'
export default {
    name: 'MyTask',
    components: {
      YCell,
      YTitle,
      YScroll,
    },
    data () {
      return {
        data: null,
      }
    },
    props: {
      contentHeight: null,
    },
    methods: {
      pullingUp() {
        this.$refs.yscroll.forceUpdate()
      },
      pullingDown() {
        this.$refs.yscroll.forceUpdate()
      },  
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
      },
    },
    computed: {
      scrollHeight() {
        return this.contentHeight - this.titleHeight
      },
      titleHeight() {
        return parseInt(this.rem2px(8))
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
      padding: 0rem 1rem;
      box-sizing: border-box;
      .y_cell{
        margin: 1rem 0;
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
