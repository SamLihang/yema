<template>
  <div>
    <div class="header rowAroundNoWarp" :style="{height:headerHeight+'px'}">
      <h3 v-for="(label,index) in tabs" @click="changeTab(index)" :key="index">
        {{label.label}}
      </h3>
    </div>
    <tab-container v-model="tabIndex" :swipeable="true" class="tabs" :style="{paddingTop: headerHeight+'px'}">
      <tab-container-item :id="index" v-for="(tab,index) in tabs" :key="index">
        <videos :datasource="data" />
      </tab-container-item>
    </tab-container>
  </div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import videos from '@com/Videos' 
export default {
    name: 'Teaching',
    components: {
      TabContainer,
      TabContainerItem,
      videos
    },
    data () {
      return {
        tabIndex: 0,
        tabs: [{label:"全部"},{label:"舞蹈"},{label:"歌曲"},{label:"搞笑"}],
        data: [{name: '教学视频教学视频',count: 233},]
      }
    },
    props: {
    },
    methods: {
      changeTab(index) {
        this.tabIndex = index
      }
    },
    computed: {
      headerHeight() {
        return this.rem2px(3.8)
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
    h3{
      color: #fff;
      font-weight: 600; 
    }
  }
  .tabs{
  }
</style>
