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
import { mapGetters } from 'vuex';
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
            getTaskList({pageNo:this.page,pageSize:this.pageSize,platform:this.getPlatNum}).then((data) => {
                this.taskList = [...this.taskList,...data.data.array]
                setTimeout(() => {
                    this.$refs.yscroll.forceUpdate()
                }, 700);
            })
        }  
    },
    computed: {
        ...mapGetters([
            'getPlatNum'
        ])
    },
    watch: {
        getPlatNum() {
            this.pullingDown()
        }
    },
    mounted() {
        getMyInfo().then((data) => {
            let {douyinAccount, weishiAccount, headimgurl, nickname, finishTaskCount, publishTaskCount, energy} = data.data
            this.$store.commit('setHeadImg', headimgurl);
            this.$store.commit('setNickName', nickname);
            this.$store.commit('setWeiAccount', weishiAccount);
            this.$store.commit('setDouAccount', douyinAccount);
            this.$store.commit('setFinishTaskCount', finishTaskCount);
            this.$store.commit('setPublishTaskCount', publishTaskCount);
            this.$store.commit('setEnergy', energy);
        })
        this.getList();
    },
    created() {
        let {openid} = this.$route.query;
        openid && (localStorage.openid = openid);
        this.$store.commit('setOpenId', localStorage.openid);
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
