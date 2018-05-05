<template>
  <div class="task_cell">
    <div class="task_header rowBetweenNoWarp">
        <div class="task_msg rowCenterNoWarp">
            <div class="userImg rowCenterNoWarp">
                <img src="../assets/imgs/temporary_touxiang.jpg" alt="">
            </div>
            <h5>抖音号: {{data.id}}</h5>
        </div>
        <div class="task_tim rowCenterNoWarp">
            <img src="../assets/imgs/Icon_love.png" alt="">
            <p>{{creatTime}}</p>
        </div>
    </div>
    <img src="../assets/imgs/temporary_douyin.jpg" alt="" class="douyin">
    <div class="task_content">
        <h2 class="task_remarks">备注: {{data.remarks}}</h2>
        <p>Give the thumbs-up</p>
        <h5>当前剩余数量： {{data.count}}单</h5>
    </div>
    <div class="task_footer rowBetweenNoWarp">
        <div class="task_visit rowStartNoWarp">
            <img src="../assets/imgs/temporary_touxiang.jpg" alt="">
            <img src="../assets/imgs/temporary_touxiang.jpg" alt="">
            <p>+{{data.visit}} people visit</p>
        </div>
        <div class="task_button">
            <button class="red">领取任务</button>
            <button class="blue">确认完成</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TaskCell',
    data () {
        return {
            data: {"id":1,"createUser":1,"status":2,"createTime":1525452115000,"count":5,"remarks":"备注","visit":18}
        }
    },
    props: {

    },
    computed: {
        creatTime () {
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
        margin-top: 1rem;
        box-sizing: border-box;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 1px 15px #e7e7e7;          
        .task_header{
            .task_msg{
                .userImg{
                    width: 4rem;
                    height: 3.5rem;
                    background: url(../assets/imgs/bc_userImg.png) center center no-repeat;
                    background-size: cover;
                    img{
                        width: 3rem;
                        border-radius: 50%;
                    }
                }
                h5{
                    text-indent: .5rem;
                    font-weight: 500;
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
            h2{
                font-weight: 600;
            }
            h5{
                margin-top: .5rem;
                color: #aaa;
            }
            p{
                font-weight: 600;
                color: #aaa;
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
                    color: #aaa
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
                        background: linear-gradient(left, #ff9657, #fd545a);
                        box-shadow: 0 4px 12px #f9bb96;
                    }
                    &.blue{
                        background: linear-gradient(left, #61eaff, #36d2e9);
                        box-shadow: 0 4px 12px #7beeff;
                    }
                }
            }
        }
    }
</style>