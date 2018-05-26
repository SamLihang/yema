<template>
  <div class="videos colCenterNoWarp">
    <div class="video colCenterNoWarp" v-for="(video,index) in datasource" :key="index">
      <div class="videoPlay">
      </div>
      <div class="videoMsg rowBetweenNoWarp">
        <h3>{{video.name}}</h3>
        <div class="right rowBetweenNoWarp">
          <div class="leaveWord colCenterNoWarp" @click="changeComment(index)">
            <img src="@img/Icon_leave_word.png" alt="">
            <p>{{video.count}}</p>
          </div>
          <div class="download colCenterNoWarp">
            <img src="@img/Icon_download.png" alt="">
            <p>下载</p>
          </div>
          <img class="more" src="@img/Icon_points2.png" alt="">
        </div>
      </div>
    </div>
    <router-link to="/payment" class="video colCenterNoWarp">
      <div class="moreVideo colCenterNoWarp">
        <img src="@img/bc_moreVideo.jpg" alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'Videos',
    data () {
      return {
      }
    },
    props: {
      datasource: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    methods: {
      changeComment(index) {
        this.$emit('changeComment',index)
      }
    }
}
</script>

<style scoped lang="scss">
  .videos{
    width: 100%;
    position: relative;
    padding: 1rem;
    box-sizing: border-box;
    .video{
      width: 100%;
      .videoPlay,.moreVideo{
        width:100%;
        height:15rem;
        background:#fff;
        box-shadow: 1px 0 10px #d1d1d1;
      }
      .moreVideo{
        img{
          height: 9rem;
        }
      }
      .videoMsg{
        width: 100%;
        height: 3.5rem;
        padding-bottom: .5rem;
        h3{
          color: #999;
          font-weight: 500;
        }
        .right{
          width: 40%;
          .leaveWord,.download{
            img{
              height: 1rem;
            }
            p{
              font-size: .7rem;
              color: #ccc;
            }
          }
          img.more{
            width: 1.5rem;
          }
        }
      }
    }
  }
</style>
