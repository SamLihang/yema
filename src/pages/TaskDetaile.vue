<template>
  <div class="task_detaile">
    <y-title />
    <div class="detaile_body" :style="{marginTop:'8rem'}">
      <div class="detaile_content">
        <div class="detaile_header rowBetweenNoWarpStart">
          <div class="detaile_title">
            <h1>任务情况</h1>
            <p>MISSION STATUS</p>
          </div>
          <button>{{taskStatus}}</button>
        </div>
        <div class="detaile_msg">
          <div class="content_top">
            <h3>创建时间：{{createTime(query.createTime)}}</h3>
          </div>
          <div class="content_bottom rowBetweenNoWarp">
              <p>数量：{{query.count}}</p>
              <p>完成数量：{{query.count - query.surplus}}</p>
          </div>
        </div> 
        <div class="detaile_list">
          <!-- <y-cell class="y_cell" :shadow="false" v-for="(data,index) in dataSource" :key="index">
            <img src="../assets/imgs/temporary_touxiang.jpg" alt="" slot="icon">
            <h4 slot="text">账号{{accountIndex(index)}}：<span>{{'BEAUT.GR'}}</span></h4>
            <p slot="point">{{createTime(data.createtime)}}</p>
          </y-cell> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YCell from '@com/YCell'
import YTitle from '@com/YTitle'
import { getTaskList } from '../utils/api'
export default {
    name: 'TaskDetaile',
    components: {
      YCell,
      YTitle,
    },
    data () {
      return {
        query: this.$route.query,
        dataSource: [],        
      }
    },
    computed: {
      taskStatus () {
        switch (this.$route.query.status) {
          case 1:
            return '已完成'
            break;
          case 0:
            return '进行中'
            break;
          case 2:
            return '进行中'
            break;
          default:
            break;
        }
      },
    },
    methods: {
      createTime (timeStamp) {
        let timestamp = timeStamp ? timeStamp : new Date().getTime()
        let time = new Date(timestamp * 1)
        let Y = time.getFullYear()
        let M = time.getMonth() + 1
        let D = time.getDate()
        return `${Y}-${M < 10 ? '0' + M : M}-${D < 10 ? '0' + D : D}`
      },
      accountIndex (index) {
        let idx = index ? parseInt(index) + 1 : 1
        return idx < 10 ? `0${idx}` : idx
      }
    },
    mounted() {
      getTaskList(null,`/${this.$route.query.id}`).then(data => {
        this.dataSource = data
      })
    }
}
</script>

<style scoped lang="scss">
  .task_detaile{
    position: relative;
    .detaile_body{
      padding: 1rem;
      .detaile_content{
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        background: #fbfbfb;
        box-shadow: 0 1px 15px #c9c9c9;
        border-bottom: 2px solid #ff451c;
        .detaile_header{
          .detaile_title{
            h1{
              font-weight: 600;
              color: #ff9657
            }
            p{
              font-weight: 600;
              font-size: 1.5rem;
              color: #ff9657;
              opacity: .3;
            }
          }
          button{
            width: 4.5rem;
            height: 1.8rem;
            border-radius: 1rem;
            color: #fff;
            font-size: 1rem;
            background: linear-gradient(to left, #ff9657, #fd545a);
            &:active{
              background: linear-gradient(to right, #ff9657, #fd545a);
            }
          }
        }
        .detaile_msg{
          width: 100%;
          margin: .5rem 0;
          .content_top{
            width: 100%;
            position: relative;
            h3{
              font-weight: 600;
              color: #666;
            }
          }
          .content_bottom{
            width: 100%;
            position: relative;
            p{
              font-size: 1.2rem;
              font-weight: 500;
              color: #999;
            }
          }
        }
        .detaile_list{
          border-top: 1px solid #dcdcdc;
          padding: 1rem 0;
          position: relative;
          &::before{
            content: '';
            position: absolute;
            width: 3px;
            height: 3px;
            left: 0;
            top: -2px;
            border-radius: 50%;
            background: #8895a0;
          }
          &::after{
            content: '';
            position: absolute;
            width: 3px;
            height: 3px;
            right: 0;
            top: -2px;
            border-radius: 50%;
            background: #8895a0;
          }
          .y_cell{
            margin-top: .5rem;
            overflow: hidden;
            border-radius: 4px;
            box-shadow: 0 1px 15px #eee;
            position: relative;
            &::before{
              content: '';
              top: 0;
              right: 0;
              width: 0;
              height: 0;
              position: absolute;
              border-top: 1rem solid #ff1e5e;
              border-left: 1rem solid #fff;
            }
            img{
              width: 2.5rem;
              margin-left: 1rem;
              border: 2px solid #fff;
              border-radius: 50%;
            }
            h4{
              color: #999;
              margin-left: 1rem;
              span{
                font-weight: 600
              }
            }
            p{
              white-space: nowrap;
              margin-right: 120%;
              padding-right: 1rem;
              color: #999;
              font-size: .9rem;
              position: relative;
              font-weight: 500;
              &::before{
                content: '';
                position: absolute;
                width: .2rem;
                height: .2rem;
                border-radius: 50%;
                transform: translateY(-50%);
                background: #ff1e5e;
                top: 50%;
                left: -.9rem;
                border: .2rem solid #ffd2df;
              }
            }
          }
        }
      }
    }
  }
</style>
