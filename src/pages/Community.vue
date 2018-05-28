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
            taskList: [],
            page: 1,
            pageSize: 10,
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
            this.page++;
            this.getList();
        },
        pullingDown() {
            this.page = 1;
            this.taskList = [];
            this.getList();
        },
        getList() {
            getTaskList({PageNo:this.page,pageSize:this.pageSize}).then((data) => {
                this.taskList = [...this.taskList,...data.data.array]
                this.$refs.yscroll.forceUpdate()
            })
        }  
    },
    mounted() {
        getMyInfo().then((data) => {
            let {douyinAccount, weishiAccount, headimgurl, nickname} = data.data
            this.$store.commit('setHeadImg', headimgurl);
            this.$store.commit('setNickName', nickname);
            this.$store.commit('setWeiAccount', weishiAccount);
            this.$store.commit('setDouAccount', douyinAccount);
        })
        this.getList();
    },
    created() {
        let {openid} = this.$route.query;
        this.$store.commit('setOpenId', openid);
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
