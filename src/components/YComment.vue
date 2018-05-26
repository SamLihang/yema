<template>
  <transition name="popbottom">
    <div class="y_comment" :style="{height:height+'px',width:width,bottom:0}" v-if="show">
      <div class="closeBtn" @click.stop="closeComment" />
      <div class="content" :style="{height:conetntHeight+'px'}">
        <div v-for="(comment,index) in data" :key="index" class="comment rowBetweenNoWarpStart">
          <div class="comment_img colCenterNoWarpStart">
            <img :src="comment.img" alt="">
          </div>
          <div class="comment_body colCenterNoWarpStart">
            <div class="comment_head rowBetweenNoWarp">
              <h3>{{comment.name}}</h3>
              <p>{{comment.time}}</p>
            </div>
            <p>{{comment.content}}</p>
          </div>
        </div> 
      </div>
      <div class="footer rowCenterNoWarp" :style="{height:footerHeight+'px',width:width,marginLeft:'1rem'}">
        <input type="text" placeholder="请输入评论内容......">
        <button>发送</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: '',
    data () {
      return {
        data: [
          {img:require('../assets/imgs/temporary_touxiang.jpg'),name:'大法',content:'阿斯顿发生大发生的发生的',time:'2018-4-1 12:93'},
          {img:require('../assets/imgs/temporary_touxiang.jpg'),name:'的撒风',content:'嘎达',time:'2018-4-1 12:93'},
          {img:require('../assets/imgs/temporary_touxiang.jpg'),name:'的撒风',content:'嘎达',time:'2018-4-1 12:93'},
          {img:require('../assets/imgs/temporary_touxiang.jpg'),name:'的撒风',content:'嘎达',time:'2018-4-1 12:93'},
          {img:require('../assets/imgs/temporary_touxiang.jpg'),name:'沙发',content:'阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl阿斯顿afasasdfl发生大的发送到发送到发',time:'2018-4-1 12:93'},
          {img:require('../assets/imgs/temporary_touxiang.jpg'),name:'饿啊的',content:'啊大方的是撒地方；啊了解对方垃圾堆里；萨达地方',time:'2018-4-1 12:93'},]
      }
    },
    props: {
      height: {
        type: Number,
        default: 100,
      },
      width: {
        type: null,
        default: '100%',
      },
      show: {
        type: Boolean,
        default: false,
      },
      bottom: {
        type: null,
        default: 0,
      }
    },
    methods: {
      closeComment() {
        this.$emit('changeComment')
      }
    },
    computed: {
      conetntHeight() {
        return this.height - this.rem2px(4.5 + 1)
      },
      footerHeight() {
        return this.rem2px(4.5)
      }
    }
}
</script>

<style scoped lang="scss">
.y_comment{
  background: #fff;
  position: absolute;
  z-index: 99;
  padding: 1rem 1rem 0;
  box-sizing: border-box;
  box-shadow: 0 0 12px rgba(255,156,156,.5);
  .closeBtn{
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 12px rgba(255,156,156,.75);
    &::after{
      content: '';
      width: 60%;
      height: 4px;
      position: absolute;
      transform-origin: 0 0;
      top: 50%;
      left: 50%;
      border-radius: 2px;
      background: #fe7559;
      box-shadow: 0 0 12px rgba(255,156,156,.75);
      transform: rotate(45deg) translate(-50%,-50%);
    }
    &::before{
      content: '';
      width: 60%;
      height: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: 0 0;
      border-radius: 2px;
      background: #fe7559;
      box-shadow: 0 0 12px rgba(255,156,156,.75);
      transform: rotate(-45deg) translate(-50%,-50%);
    }
  }
  .content{
    overflow: auto;
    width: 100%;
    .comment{
      padding: 1.5rem 0;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #eee;
        transform: scale(1,.5);
      }
      .comment_img{
        width: 15%;
        img{
          border: 2px solid orangered;
          border-radius: 50%;
          width: 3rem;
        }       
      }
      .comment_body{
        width: 85%;
        p{
          color: #333;
        }
        .comment_head{
          width: 100%;
          margin-bottom: .5rem;
          h3{
            font-weight: 500;
            color: #ff9657;
          }
          p{
            color: #ff7173;
          }
        }
      }
    }
  }
  .footer{
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #eee;
    input[type='text']{
      border: 1px solid #ccc;
      width: 70%;
      height: 2.7rem;
      margin-right: 1rem;
      border-radius: 1.5rem;
      text-indent: 2rem;
    }
    button{
      width: 7rem;
      height: 2.5rem;
      position: relative;
      border-radius: 1.75rem;
      color: #fff;
      font-size: 1.3rem;
      font-weight: 500;
      background: linear-gradient(to left, #00ccff, #00a8ff);
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
    }
  }
}
</style>
