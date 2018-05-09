<template>
    <div class="main">
        <y-scroll ref="yscroll" :height="contentHeight" @pullingUp="pullingUp" @pullingDown="pullingDown" :style="{marginTop:headerHeight+'px'}">
            <task-bar />
            <transition-group name="popbottom">
                <task-cell :data="task" v-for="(task,index) in taskList" :key="index" v-if="task" :style="{transitionDelay:index/20+'s'}"/>
            </transition-group>
        </y-scroll>
    </div>
</template>

<script>
import YScroll from '../components/YScroll'
import TaskBar from '../components/TaskBar'
import TaskCell from '../components/TaskCell'
import {getTaskList} from '../utils/api'
export default {
    name: 'HelloWorld',
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
    created() {
        getTaskList().then((data)=>{
            this.taskList = data
        })
    }
}
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        .test{
            width: 100%;
        }
    }
</style>
