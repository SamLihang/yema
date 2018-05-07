<template>
  <div class="mine">
    <div class="mine_header">
      <img src="../assets/imgs/Icon_set.png" class="setting" alt="">
      <img src="../assets/imgs/Icon_message.png" class="message" alt="">
      <div class="mine_msg rowBetweenNoWarp">
        <div class="mine_name">
          <h1>Hello!</h1>
          <h1>{{data.name}}</h1>
          <y-star class="mine_star" :count="5" :curCount="4"/>
        </div>
        <div class="mine_img rowCenterNoWarp">
          <img src="../assets/imgs/temporary_touxiang.jpg" alt="">
        </div>
      </div>
      <div class="mine_left">
        <h3>{{data.count}}</h3>
        <h5>剩余数量</h5>
        <p>ENEROY</p>
      </div>
    </div>
    <div class="mine_content">
      <y-cell class="cell" link="/MyTask">
        <img src="../assets/imgs/Icon_cmar.png" class="icons" alt="" slot="icon">
        <h3 slot="text">我发布的任务</h3>
      </y-cell>
      <y-cell class="cell" link="/myaccount">
        <img src="../assets/imgs/Icon_love.png" class="icons" alt="" slot="icon">
        <h3 slot="text">我的账号</h3>
      </y-cell>
    </div>
  </div>
</template>

<script>
import YStar from './YStar'
import YCell from './YCell'
export default {
    name: 'Mine',
    components: {
      YStar,
      YCell
    },
    data () {
      return {
        data: {name: 'Aaronle', count: 15}
      }
    }
}
</script>

<style scoped lang="scss">
  .mine{
    position: relative;
    .mine_header{
      width: 100%;
      height: 24rem;
      position: relative;
      background: url(../assets/imgs/bc_self.jpg) 100% 100% no-repeat;
      background-size: 100% 100%;
      .setting, .message{
        width: 3.5rem;
        height: 3.5rem;
        position: absolute;
        top: 1rem;
      }
      .setting{
        left: 1rem;        
      }
      .message{
        right: 1rem;
      }
      .mine_msg{
        position: absolute;
        bottom: 6rem;
        padding: 0 3rem;
        width: 100%;
        box-sizing: border-box;
        .mine_name{
          h1{
            font-size: 3rem;
            height: 3rem;
            color: #fff;
          }
          .mine_star{

          }
        }
        .mine_img{
          width: 8.5rem;
          height: 8.5rem;
          background: url(../assets/imgs/bc_user.png) 100% 100% no-repeat;
          background-size: 100% 100%;
          img{
            width: 6.8rem;
            height: 6.8rem;
            border-radius: 50%;
            border: 3px solid #fff;
          }
        }
      }
      .mine_left{
        padding-left: 3rem;
        text-align: center;
        display: inline-table;
        position: absolute;
        height: 5rem;
        bottom: 1rem;
        h3{
          color: #fff;
          font-size: 2rem;
        }
        h5{
          color: #fff;
          font-weight: 500;
        }
        p{
          font-size: .8rem;
          color: #fff;
          opacity: .5;
        }
      }
    }
    .mine_content{
      padding: 1rem;
      .cell{
        margin-bottom: .5rem;
        img.icons{
          width: 4rem;
          height: 4rem;
        }
        h3{
          color: #666;
          text-indent: .5rem;
        }
      }
    }
  }
</style>
