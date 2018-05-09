<!--滚动组件-->
<template>
  <div ref="wrapper" class="list-wrapper">
    <div class="scroll-content">
      <div ref="listWrapper">
        <slot/>
      </div>
      <slot name="pullup"
            :pullUpLoad="pullUpLoad"
            :isPullUpLoad="isPullUpLoad"
      >
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <p>{{pullUpTxt}}</p>
          </div>
          <div class="after-trigger" v-else>
            <!-- <spinner type="dots" :size="spinnerSize"/> -->
          </div>
        </div>
      </slot>
    </div>
    <slot name="pulldown"
          :pullDownRefresh="pullDownRefresh"
          :pullDownStyle="pullDownStyle"
          :beforePullDown="beforePullDown"
          :isPullingDown="isPullingDown"
          :bubbleY="bubbleY"
    >
      <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div class="before-trigger colCenterNoWarp" v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="isPullingDown" class="loading">
            <!-- <spinner type="ripple" :size="spinnerSize"/> -->
          </div>
          <div v-else><p>{{refreshTxt}}</p></div>
        </div>
      </div>
    </slot>
  </div>
</template>

<!--脚本-->
<script>
import BScroll from 'better-scroll';
import Bubble from './YBubble';
// import {Spinner} from 'vux';
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
const deviceHeight = document.body.offsetHeight;
  export default{
    name: 'BetterScroll',
    data (){
        return{
            marksWord:['我警告你，人家可是到底啦！','哎呀，人家也是有底线的～','干啥呀！没啦！还刷找抽的吧！','还刷新，我就问你抗不抗揍吧！','程序员表示，你已经触犯到我的底线了！',
            '哥，别刷了，算我求你了～','哎呀，你都已经看见人家的底了！','没拉！数据被你扒拉出锅啦！','换个姿势，再来一次！','放下手机，离人家远点～'],
            beforePullDown: true,
            isRebounding: false,
            isPullingDown: false,
            isPullUpLoad: false,
            pullUpDirty: true,
            pullDownStyle: '',
            bubbleY: 0,
            spinnerSize: '30px'
        }
    },
    components: {
        Bubble,
        // Spinner
    },
    methods: {
        getRect(el){
             if (el instanceof window.SVGElement) {
                let rect = el.getBoundingClientRect()
                return {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
                }
            } else {
                return {
                top: el.offsetTop,
                left: el.offsetLeft,
                width: el.offsetWidth,
                height: el.offsetHeight
                }
            }
        },
        initScroll() {
            if (!this.$refs.wrapper) {
                return
            }
            let options = {
                probeType: this.probeType,
                click: this.click,
                scrollY: this.freeScroll || this.direction === DIRECTION_V,
                scrollX: this.freeScroll || this.direction === DIRECTION_H,
                scrollbar: this.scrollbar,
                pullDownRefresh: this.pullDownRefresh,
                pullUpLoad: this.pullUpLoad,
                startY: this.startY,
                freeScroll: this.freeScroll,
                eventPassthrough: this.eventPassthrough,
                deceleration: this.deceleration,
            }
            this.scroll = new BScroll(this.$refs.wrapper, options)
            if(this.height){
                var height = parseInt(this.height)
                if( height > 0 ){
                    this.$refs.wrapper.style.height = `${this.height}px`;
                }else{
                    this.$refs.wrapper.style.height = `${deviceHeight + height}px`;
                }
            }
            if(this.width){
                if(parseInt(this.width)>0){
                    this.$refs.wrapper.style.width = parseInt(this.width);
                }
            }
            if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
                this.$refs.listWrapper.style.minHeight = `${this.getRect(this.$refs.wrapper).height + 1}px`
            }
            if (this.listenScroll) {
                this.scroll.on('scroll', (pos) => {
                    this.$emit('scroll', pos)
                })
            }
            if (this.listenBeforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScrollStart')
                })
            }
            if (this.pullDownRefresh) {
                this._initPullDownRefresh()
            }
            if (this.pullUpLoad) {
                this._initPullUpLoad()
            }
        },
        disable() {
            this.scroll && this.scroll.disable()
        },
        enable() {
            this.scroll && this.scroll.enable()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        finishPullDown() {
            this.scroll && this.scroll.finishPullDown()
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        },
        clickItem(e, item) {
            this.$emit('click', item)
        },
        destroy() {
            this.scroll && this.scroll.destroy()
        },
        forceUpdate(dirty) {
            if (this.pullDownRefresh && this.isPullingDown) {
                setTimeout(() => {
                    this.isPullingDown = false
                    this._reboundPullDown().then(() => {
                        this._afterPullDown()
                    })
                }, 1000);
            } else if (this.pullUpLoad && this.isPullUpLoad) {
                this.isPullUpLoad = false
                this.scroll.finishPullUp()
                this.pullUpDirty = dirty
                this.refresh()
            } else {
                this.refresh()
            }
        },
        _initPullDownRefresh() {
            this.scroll.on('pullingDown', () => {
                this.beforePullDown = false
                this.isPullingDown = true
                this.$emit('pullingDown')
            })
            this.scroll.on('scroll', (pos) => {
                if (this.beforePullDown) {
                    this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
                    this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
                } else {
                    this.bubbleY = 0
                }
                if (this.isRebounding) {
                    this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
                }
            })
        },
        _initPullUpLoad() {
            this.scroll.on('pullingUp', () => {
                this.isPullUpLoad = true
                this.$emit('pullingUp')
            })
        },
        _reboundPullDown() {
            const {stopTime = 600} = this.pullDownRefresh
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.isRebounding = true
                    this.scroll.finishPullDown()
                    resolve()
                }, stopTime)
            })
        },
        _afterPullDown() {
            setTimeout(() => {
            this.pullDownStyle = `top:${this.pullDownInitTop}px`
            this.beforePullDown = true
            this.isRebounding = false
            this.refresh()
            }, this.scroll.options.bounceTime)
        },
    },
    computed: {
        pullUpTxt() {
            const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || '到底了哦~'
            var noMoreTxt = this.isPullUpLoad? noMoreTxt : this.marksWord[parseInt(Math.random()*10)]
            // const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || this.marksWord[parseInt(Math.random()*10)]
            return this.pullUpDirty ? moreTxt : noMoreTxt
        },
        refreshTxt() {
            return this.pullDownRefresh && this.pullDownRefresh.txt || '刷新成功'
        }
    },
    watch:{
        data() {
            setTimeout(() => {
                this.forceUpdate(true)
            }, this.refreshDelay)
        },
        height(){
            this.scrollTo(0,0,700,'ease.bounce')
            setTimeout(() => {
                this.initScroll()
            }, 100);
        }
    },
    props:{
        data: {
            type: Array,
            default: function () {
                return []
            }
        },
        height: {                   
            typ: null,
            default: '100%'
        },
        width: {
            type: null,
            default: '100%'
        },
        probeType: {                //监听滚动事件的方式    1,2,3
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        listenBeforeScroll: {
            type: Boolean,
            default: false
        },
        scrollbar: {                  //滚动条显示
            type: null,
            default: false
        },
        pullUpLoad: {
            type: Boolean,
            default: true
        },
        startY: {
            type: Number,
            default: 0
        },
        refreshDelay: {                            
            type: Number,
            default: 20
        },
        deceleration: {                 //滚动阻力       不建议修改
            type: Number,
            default: 0.001
        },
        freeScroll: {                   //双向滚动 一般不使用
            type: Boolean,
            default: false
        },
        eventPassthrough: {             //保留原生方向滚动    不建议修改   'vertical'、'horizontal'
            type: String,
            default: ''
        },
        direction: {                    //滚动方向
            type: String,
            default: DIRECTION_V
        },
        pullDownRefresh: {              //下拉刷新 false为不使用
            type: null,
            default: function() {
                return {
                    threshold: 90,
                    stop: 40
                }    
            }
        },
    },
    created(){
        this.pullDownInitTop = -50
    },
    mounted() {
        setTimeout(() => {
            this.initScroll()
        }, 20)
    }
}
</script>

<!--样式-->
<style scoped lang="scss">
.list-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: rgb(250, 250, 250);
    .scroll-content{
        position: relative;
        z-index: 1;         
        min-width: 100%;
        display: inline-block;          //横向滚动必须使宽度自适应


        // transition-property: transform;
        // transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        // transition-duration: 0ms;
        // transform: translate(-100px, 0px) translateZ(0px) !important;
    }
    .list-content{
        position: relative;
        z-index: 10;
        background: #fff;
    }
    .list-item{
        height: 500px;
        line-height: 60px;
        font-size: 18px;
        padding-left: 20px;
        border-bottom: 1px solid #e5e5e5;
    }
}
.pulldown-wrapper{
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    .after-trigger{
      margin: 5px 0;
    }
}
.pullup-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
}
</style>
