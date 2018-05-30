<template>
  <div class="task_bar">
    <div class="task_header rowStartNoWarp">
        <img src="../assets/imgs/Icon_Msg.png" alt="">
        <div class="task_count">
            <h3>任务总量{{publishTaskCount}}</h3>
            <p>Total amount of task</p>
        </div>
    </div>
    <div class="task_footer rowBetweenNoWarp">
        <div class="task_fulfaled">
            <p>Charm of travel </p>
            <h3>您发布的完成情况：{{finishTaskCount}}/{{publishTaskCount}}</h3>
        </div>
        <button class="red" @click="mytasks" >查看明细</button>
    </div>
  </div>
</template>

<script>
import { mapState, Store } from 'vuex'

export default {
    name: 'TaskBar',
    data () {
        return {
            dataSource: {count:18, fulfiled: 10}
        }
    },
    methods: {
        mytasks() {

            this.$router.push({path: '/MyTask'})
        }
    },
    props: {
        data: {
            type: Object,
            default: ()=>{
                return {}
            }
        }
    },
    computed: {
        ...mapState({
            finishTaskCount: store => {return store.user.finishTaskCount},
            publishTaskCount: store => {return store.user.publishTaskCount},
        })
    }
}
</script>

<style scoped lang="scss">
    .task_bar{
        width: 90%;
        height: 10rem;
        padding: 0 1rem;
        margin: 1rem 5%;
        box-sizing: border-box;
        background-color: #fafafa;
        border-bottom: 2px solid #fa6e4e;
        box-shadow: 0 1px 15px #d1d1d1;
        .task_header{
            width: 100%;
            height: 50%;
            position: relative;
            &::after{
                content: '';
                position: absolute;
                width: 4px;
                height: 4px;
                background: #aab3bb;
                transform: translateY(50%);
                border-radius: 50%;
                bottom: 0;
                left: 0;
            }
            &::before{
                content: '';
                position: absolute;
                width: 4px;
                height: 4px;
                background: #aab3bb;
                transform: translateY(50%);
                border-radius: 50%;
                bottom: 0;
                right: 0;
            }
            img{
                width: 4rem;
            }
            .task_count{
                margin-left: 1rem;
                h3{
                    color: #ff9657;
                    font-weight: 600;
                }
                p{
                    font-size: 1.3rem;
                    color: #ff9657;
                    font-weight: 600;
                    opacity: .3;
                }
            }
        }
        .task_footer{
            width: 100%;
            height: 50%;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                width: 94%;
                height: 1px;
                border-top: 1px solid #e9e9e9 ;
                transform: translateY(-50%);
                top: 0;
                left: 3%;
            }
            .task_fulfaled{
                p{
                   font-size: 1.3rem;
                    color: #000000;
                    font-weight: 600;
                }
                h3{
                    font-weight: 600;
                    color: #8d8d8d;
                }
            }
            button{
                width: 5.5rem;
                height: 2rem;
                border-radius: 1rem;
                color: #fff;
                font-size: 1rem;
                &.red{
                    background: linear-gradient(to left, #ff9657, #fd545a);
                    box-shadow: 0 2px 6px #f9bb96;
                    &:active{
                        background: linear-gradient(to right, #ff9657, #fd545a);
                    }
                }
            }
        }
    }
</style>
