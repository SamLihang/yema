<template>
  <div class="task_cell">
    <div class="tast_hot" v-if="data.hot"/>
    <div class="task_header rowBetweenNoWarp">
        <div class="task_msg rowCenterNoWarp">
            <h2>抖音号: {{data.id}}</h2>
        </div>
        <button 
         v-clipboard:copy="data.id"
         v-clipboard:success="onCopy"
         v-clipboard:error="onError"
        class="deepBlue">复制</button>
        <div class="task_tim rowCenterNoWarp">
            <img src="../assets/imgs/Icon_Point.png" alt="">
            <p>{{createTime}}</p>
        </div>
    </div>
    <div class="task_content">
        <h3 class="task_remarks">备注: {{data.remarks}}</h3>
        <p>当前剩余数量: {{data.surplus}}单</p>
    </div>
    <div class="task_footer rowBetweenNoWarp">
        <div class="task_visit rowStartNoWarp">
            <img src="../assets/imgs/temporary_touxiang.jpg" alt="">
            <img src="../assets/imgs/temporary_touxiang.jpg" alt="">
            <p>+{{data.visit}} people visit</p>
        </div>
        <div class="task_button">
            <button class="red" @click="getTask(data.id)">领取任务</button>
            <button class="blue" @click="completeTask(data.id)">确认完成</button>
        </div>
    </div>
  </div>
</template>

<script>
import { getTaskList } from '@util/api'
export default {
    name: 'TaskCell',
    data () {
        return {
        }
    },
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    methods: {
        onCopy: function (e) {
            alert('复制成功')
        },
        onError: function (e) {
            alert('复制失败')
        },
        getTask(id) {
            getTaskList(null, '/'+id, 'post').then(data => {

            })
        },
        completeTask(id) {
            getTaskList(null, '/'+id, 'put').then(data => {
                
            })
        }
    },
    computed: {
        createTime () {
            let time = new Date(this.data.createTime)
            let Y = time.getFullYear()
            let h = time.getHours()
            let m = time.getMinutes() 
            return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m} ${Y}`
        }
    }
}
</script>

<style scoped lang="scss">
    .task_cell{
        width: 90%;
        padding: 1rem 1rem .5rem;
        margin:0 5% 1rem;
        box-sizing: border-box;
        border-radius: 4px;
        position: relative;
        background-color: #fff;
        box-shadow: 0 1px 15px #e7e7e7;    
        .tast_hot{
            width: 4rem;
            height: 4rem;
            top: -.9rem;
            right: -1rem;
            position: absolute;
            background: url(../assets/imgs/Icon_Hot.png);
            background-size: 100% 100%
        }      
        .task_header{
            .task_msg{
                h2{
                    font-weight: 600;
                }
            }
            button{
                width: 3.5rem;
                height: 1.8rem;
                border-radius: 1rem;
                color: #fff;
                font-size: $fts;
                &.deepBlue{
                    background: linear-gradient(to right, #00ccff, #00a8ff);
                    box-shadow: 0 2px 6px #7beeff;
                    &:active{
                        background: linear-gradient(to left, #00ccff, #00a8ff);
                    }
                }
            }
            .task_tim{
                img{
                    width: 1rem;
                }
                p{
                    text-indent: .5rem;
                }
            }
        }
        img.douyin{
            width: 100%;
            border-radius: 4px;
            margin: 1rem 0 0;
        }
        .task_content{
            h3{
                margin-top: .5rem;
                color: #8d8d8d; 
                font-weight: 600;
            }
            p{
                font-size: 1.3rem;
                color: #cacaca;
            }
        }
        .task_footer{
            margin: .5rem 0;
            .task_visit{
                img{
                    width: 2rem;
                    border-radius: 50%;
                }
                p{
                    text-indent: .5rem;
                    font-weight: 500;
                    color: #ffb1a8
                }
            }
            .task_button{
                button{
                    width: 5.5rem;
                    height: 1.8rem;
                    border-radius: 1rem;
                    color: #fff;
                    font-size: $fts;
                    &.red{
                        background: linear-gradient(to left, #ff9657, #fd545a);
                        box-shadow: 0 2px 6px #f9bb96;
                        &:active{
                            background: linear-gradient(to right, #ff9657, #fd545a);
                        }
                    }
                    &.blue{
                        background: linear-gradient(to left, #61eaff, #36d2e9);
                        box-shadow: 0 2px 6px #7beeff;
                        &:active{
                            background: linear-gradient(to right, #61eaff, #36d2e9);
                        }
                    }
                }
            }
        }
    }
</style>