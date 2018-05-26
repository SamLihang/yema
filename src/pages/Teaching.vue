<template>
  <div>
    <div class="header rowAroundNoWarp" :style="{height:headerHeight+'px'}">
      <div class="title rowCenterNoWarp" :class="{selected:tabIndex==index}" v-for="(label,index) in tabs" @click.stop="changeTab(index)" :key="index">
        <h3>{{label.label}}</h3>
      </div>
    </div>
    <tab-container v-model="tabIndex" :swipeable="true" class="tabs" :style="{paddingTop: headerHeight+'px'}">
      <tab-container-item :id="index" v-for="(tab,index) in tabs" :key="index">
        <y-videos :datasource="data" @changeComment="changeComment" />
      </tab-container-item>
    </tab-container>
    <y-comment @changeComment='changeComment' :show="showComment" :height="commentHeight" :width="'calc(100% - 2rem)'" style="marginLeft:1rem"/>
  </div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import YVideos from '@com/YVideos' 
import YComment from '@com/YComment'
export default {
    name: 'Teaching',
    components: {
      TabContainer,
      TabContainerItem,
      YVideos,
      YComment,
    },
    data () {
      return {
        tabIndex: 0,
        tabs: [{label:"全部"},{label:"舞蹈"},{label:"歌曲"},{label:"搞笑"}],
        data: [{name: '教学视频教学视频',count: 233},],
        showComment: false,
      }
    },
    props: {
      devHeight: null
    },
    methods: {
      changeTab(index) {
        this.tabIndex = index
      },
      changeComment(index) {
        console.log(index)
        this.showComment = !this.showComment
      }
    },
    computed: {
      headerHeight() {
        return this.rem2px(3.8)
      },
      commentHeight() {
        return this.devHeight - this.headerHeight - this.rem2px(1+15+3.5+.5)
      }
    }
}
</script>

<style scoped lang="scss">
  .header{
    top: 0;
    width: 100%;
    z-index: 2;
    padding: 0 1rem;
    position: fixed;
    box-sizing: border-box;
    background: linear-gradient(to left, #ff728b, #fe987e);
    .title{
      width: 25%;
      height: 100%;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        bottom: .3rem;
        left: 50%;
        width: 3rem;
        height: 2px;
        background: #fff;
        border-radius: 1px;
        transition: transform .3s ease-in-out;
        transform-origin: 0 0;
        transform:  scale(0,1) translate(-50%,-50%);
      }
      &.selected::after{
        transform: scale(1,1) translate(-50%,-50%);
      }
      h3{
        white-space: nowrap;
        color: #fff;
        font-weight: 600; 
      }
    }
  }
</style>
