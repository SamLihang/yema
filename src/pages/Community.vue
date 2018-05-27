<template>
    <div class="main" :style="{height:contentHeight+'px'}">
        <y-scroll ref="yscroll" :height="contentHeight" @pullingUp="pullingUp" @pullingDown="pullingDown">
            <task-bar />
            <transition-group name="popbottom">
                <task-cell :data="task" v-for="(task,index) in taskList" :key="index" v-if="task" :style="{transitionDelay:index/20+'s'}"/>
            </transition-group>
        </y-scroll>
    </div>
</template>

<script>
// import YScroll from '../components/YScroll'
import YScroll from '@com/YScroll'
import TaskBar from '../components/TaskBar'
import TaskCell from '../components/TaskCell'
import { getMyInfo,getTaskList } from '../utils/api'
export default {
    name: 'index',
    data () {
        return {
            taskList: null,
        }
    },
    components: {
        TaskBar,
        YScroll,
        TaskCell,
    },
    props: {
        contentHeight: null,
        headerHeight: null,
    },
    methods: {
        pullingUp() {
            this.$refs.yscroll.forceUpdate()
        },
        pullingDown() {
            this.$refs.yscroll.forceUpdate()
        },  
    },
    mounted() {
        getMyInfo().then((data) => {

        })
        getTaskList().then((data) => {
            this.taskList = data
        })
    },
    created() {
        
    }
}
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        overflow: scroll;
        margin-top: -1px;
        -webkit-overflow-scrolling: touch;
        .test{
            width: 100%;
        }
    }
</style>
