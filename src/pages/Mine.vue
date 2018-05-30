<template>
  <div class="mine">
    <div class="mine_header">
      <img src="../assets/imgs/Icon_set.png" class="setting" alt="">
      <img src="../assets/imgs/Icon_message.png" class="message" alt="">
      <div class="mine_msg rowBetweenNoWarp">
        <div class="mine_name">
          <h1>Hello!</h1>
          <h1>{{this.$store.state.user.nickName}}</h1>
          <y-star class="mine_star" :count="5" :curCount="4"/>
        </div>
        <div class="mine_img rowCenterNoWarp">
          <img src="@img/Icon_vip.png" class="vip" alt="" v-if="false">
          <img :src="this.$store.state.user.headImgUrl" class="headPhoto" alt="">
        </div>
      </div>
      <div class="mine_footer rowBetweenNoWarp">
        <div class="mine_left">
          <h3>{{energy}}</h3>
          <h5>剩余能量</h5>
          <p>ENEROY</p>
        </div>
        <router-link to="" class="mine_right colCenterNoWarp" v-if="false">
          <img src="@img/bc_update.png" alt="">
          <h4>普通会员</h4>
        </router-link>
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
import YStar from '@com/YStar'
import YCell from '@com/YCell'
import { mapState } from 'vuex'

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
    },
    computed: {
      ...mapState({
        energy: store => {return store.user.energy}
      })
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
            font-size: 2.5rem !important;
            height: 3rem;
            font-weight: 500;
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
          position: relative;
          img.headPhoto{
            width: 6.8rem;
            height: 6.8rem;
            border-radius: 50%;
            border: 3px solid #fff;
          }
          img.vip{
            position: absolute;
            top: 0;
            right: 0;
            width: 3rem;
            transform: translate(25%, -25%);
          }
        }
      }
      .mine_footer{
        position: absolute;
        width: 100%;
        bottom: 1rem;
        height: 5rem;
        .mine_left{
          padding-left: 3rem;
          text-align: center;
          display: inline-table;
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
        .mine_right{
          padding-right: 2rem;
          img{
            width: 6rem;
            margin-left: 2.4rem;
          }
          h4{
            font-weight: 500;
            color: #fff;
          }
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
