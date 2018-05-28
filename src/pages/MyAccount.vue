<template>
  <div class="my_account">
      <y-title />
      <section class="account_content" :style="{marginTop:'8rem'}">
        <h3>抖音账号</h3>
        <y-cell class="y_cell"> 
            <img src="../assets/imgs/temporary_touxiang.jpg" alt="" slot="icon">
            <p slot="text">{{douyinAccount}}</p>
        </y-cell>
        <h3>微视账号</h3>
        <y-cell class="y_cell"> 
            <img src="../assets/imgs/temporary_touxiang.jpg" alt="" slot="icon">
            <p slot="text">{{weishiAccount}}</p>
        </y-cell>
      </section>
  </div>
</template>

<script>
import YCell from '@/components/YCell'
import YTitle from '@/components/YTitle'
import { mapState } from 'vuex'
export default {
    name: 'MyAccount',
    components: {
        YCell,
        YTitle,
    },
    data () {
      return {
          data: {account: 1234567489456}
      }
    },
    computed: {
        ...mapState({
            douyinAccount: store => {return store.user.douyinAccount},
            weishiAccount: store => {return store.user.weishiAccount}
        })
    },
    created() {
        console.log(this.$store)
    }
}
</script>

<style scoped lang="scss">
    .my_account{
        .account_content{
            padding: 1rem;
        }
        h3{
            color: #666;
            font-weight: 500;
            margin-top: 2rem;
            margin-bottom: .5rem;
            &:first-child{
                margin-top: 0;
            }
        }
        .y_cell{
            pointer-events: none;
            img{
                margin-left: 1rem;
            }
            p{
                color: #666;
                font-weight: 500;
                font-size: 1.3rem;
                margin-left: 1rem;
            }
        }
    }

</style>
