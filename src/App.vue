<template>
  <div id="app">
    <y-header :height="headerHeight" v-if="headerHeight" class="base" :class="{blur:showShadow}" />
    <router-view class="router_view base" 
    :contentHeight="contentHeight" 
    :headerHeight="headerHeight"
    :devHeight="devHeight"
    :class="{blur:showShadow}"
    :style="{marginTop: headerHeight+'px', height: contentHeight+'px'}" 
    />
    <transition name="popbottom">
      <y-footer :height="footerHeight" v-if="footerHeight" class="base" :class="{blur:showShadow}" />
    </transition>
    <transition name="popscale">
      <y-pop-up v-if="showShadow && !douyinAccount">
        <div class="content colCenterNoWarp">
          <p>为了方便核查，请谨慎输入您的（平台）账号，一旦确认，不可更改。</p>
          <input type="number" v-model="account" placeholder="请输入您的平台账号" ref="inp" v-autoFocus/>
          <div class="button" >
            <button class="gray" @click="cancel">取消</button>
            <button class="red" @click="confirm">确定</button>
          </div>
        </div>
      </y-pop-up>
    </transition>
    <transition name="popscale">
      <y-pop-up v-if="showShadow && douyinAccount">
        <div class="release colCenterNoWarpStart">
          <p>抖音号：{{douyinAccount}}</p>
          <div class="count rowCenterNoWarp">
            <p>互粉互赞数量：</p>
            <div class="subBtn" @click="subClick" />
            <input type="number" v-model="count" />
            <div class="addBtn" @click="addClick" />
          </div>
          <div class="remark rowStartNoWarpStart">
            <p>备注：</p>
            <textarea class="textarea" v-model="remark" name="" placeholder="默认给第一个视频点赞，如不是请备注。" id="" cols="30" rows="10"></textarea>
          </div> 
          <div class="button" >
            <button class="gray" @click="cancel">取消</button>
            <button class="red" @click="releaseConfirm">确定</button>
          </div>
        </div>
      </y-pop-up>
    </transition>
  </div>
</template>

<script>
import YFooter from './components/YFooter'
import YHeader from './components/YHeader'
import YPopUp from './components/YPopUp'
import { mapState, mapGetters } from 'vuex' 
import { postBindAccount, postTask } from './utils/api'
export default {
  name: 'App',
  data() {
    return {
      headerH: 3.8,
      footerH: 4.5,
      account: null,
      count: 0,
      remark: '',
    }
  },
  components: {
    YHeader,
    YFooter,
    YPopUp
  },
  methods: {
    cancel() {
      this.$store.commit('changePop')
    },
    subClick() {
      this.count--
    },
    addClick() {
      this.count++
    },
    confirm() {
      postBindAccount({platform: getPlatUserName, account: this.account}).then((data) => {
        console.log(data)
      })
    },
    releaseConfirm(){
      postTask({
        "count": this.count,
        "remarks": this.remark,
      }).then((data) => {
        console.log('asdsfd',data)
      })
    },
  },
  computed: {
    ...mapState({
        douyinAccount: store => {return store.user.douyinAccount},
        weishiAccount: store => {return store.user.weishiAccount}
    }),
    ...mapGetters([
      'getPlatUserName'
    ]),
    devHeight() {
      return document.documentElement.clientHeight || document.body.clientHeight;
    },
    contentHeight() {
      return this.devHeight - this.headerHeight - this.footerHeight
    },
    headerHeight() {
      return this.$route.meta.hasHeader ? this.rem2px(this.headerH) : 0
    },
    footerHeight() {
      return this.$route.meta.hasFooter ? this.rem2px(this.footerH) : 0
    },
    showShadow() {
      return this.$store.state.popup.show
    }
  },
  created (){
  }
}
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .router_view{
      width: 100%;
    }
  }
  .base{
    transition: filter .3s ease-in-out;
    &.blur{
      filter: blur(4px);
      transform: translate3d(0, 0, 0);
      &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #ccc;
        opacity: .3;
      }
    }
  }
  .content{
    p{
      color: #666;
      padding-left: 1rem;
      font-size: 1.3rem !important;
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
        left: 0;
        top: 25%;
        border: .2rem solid #ffd2df;
      }
    }
    input{
      width: 100%;
      height: 3rem;
      margin-top: 2rem;
      border: 1px solid #999;
      font-size: 1.3rem;
      border-radius: 10rem;
      text-indent: 1.5rem;
    }
    .button{
      align-self: flex-end;
      button{
        width: 7rem;
        height: 2.5rem;
        margin-top: 2rem;
        position: relative;
        border-radius: 1.75rem;
        color: #fff;
        font-size: 1.3rem;
        font-weight: 500;
        &::before,&::after{
          content: '';
          position: absolute;
          top: 50%;
          width: .3rem;
          height: .3rem;
          border-radius: 50%;
          transform: translateY(-50%);
          background: #ddd;
        }
        &::before{
          left: 1rem;
        }
        &::after{
          right: 1rem;
        }
        &.gray{
          margin-right: 1rem;
          background: #d2d2d2;
          box-shadow: 0 2px 5px #ccc;
          
        }
        &.red{
          background: linear-gradient(to left, #ff9657, #fd545a);
          box-shadow: 0 2px 5px #f9bb96;
          &:active{
            background: linear-gradient(to right, #ff9657, #fd545a);
          }
        }
      }
    }
  }
  .release{
    p{
      color: #666;
      padding-left: 1rem;
      font-size: 1.3rem !important;
      position: relative;
      font-weight: 500;
    }
    .count{
      margin-top: 1rem;
      .subBtn,.addBtn{
        position: relative;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
      .subBtn{
        &::after{
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 60%;
          height: 1px;
          background: #000;
          transform: translate(-50%, -50%);
        }
      }
      .addBtn{
        &::after{
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 60%;
          height: 1px;
          background: #000;
          transform: translate(-50%, -50%);
        }
        &::before{
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          width: 1px;
          height: 60%;
          background: #000;
          transform: translate(-50%, -50%);
        }
      }
      input{
        margin: 0 1rem;
        text-align: center;
        width: 4rem;
        height: 1.5rem;
        border-radius: 2rem;
        border: 1px solid #ccc;
      }
    }
    .remark{
      margin-top: 1rem;
      textarea{
        padding: .5rem;
        width: 21rem;
        height: 8rem;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
    }
    .button{
      align-self: flex-end;
      button{
        width: 7rem;
        height: 2.5rem;
        margin-top: 1rem;
        position: relative;
        border-radius: 1.75rem;
        color: #fff;
        font-size: 1.3rem;
        font-weight: 500;
        &::before,&::after{
          content: '';
          position: absolute;
          top: 50%;
          width: .3rem;
          height: .3rem;
          border-radius: 50%;
          transform: translateY(-50%);
          background: #ddd;
        }
        &::before{
          left: 1rem;
        }
        &::after{
          right: 1rem;
        }
        &.gray{
          margin-right: 1rem;
          background: #d2d2d2;
          box-shadow: 0 2px 5px #ccc;
          
        }
        &.red{
          background: linear-gradient(to left, #ff9657, #fd545a);
          box-shadow: 0 2px 5px #f9bb96;
          &:active{
            background: linear-gradient(to right, #ff9657, #fd545a);
          }
        }
      }
    }   
  }
</style>
