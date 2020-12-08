<template>
  <div id="info">
    <div @click="count" class="info-item">
      <img src="~assets/img/profile/info/jinbi.png" alt="">
      <div>积分商城</div>
      <span>{{points}}</span>
      <span>{{$store.state.points}}</span>
      <img style="height: 20px;" src="~assets/img/common/more.png" alt="">
    </div>
    <div class="info-item">
      <img src="~assets/img/profile/info/crown.png" alt="">
      <div>会员中心</div>
      <img style="height: 20px;" src="~assets/img/common/more.png" alt="">
    </div>
    <div class="info-item">
      <img src="~assets/img/profile/info/xiaoxi.png" alt="">
      <div>我的消息</div>
      <span v-show="newsLength">{{newsLength}}</span>
      <img style="height: 20px;" src="~assets/img/common/more.png" alt="">
    </div>
    <div class="info-item">
      <img src="~assets/img/profile/info/zuji.png" alt="">
      <div>我的足迹</div>
      <span style="color: var(--color-high-text);background-color: #fff;">{{historyLength}}</span>
      <img style="height: 20px;" src="~assets/img/common/more.png" alt="">
    </div>
    <div @click="cnt" class="info-item" style="border: none;">
      <img src="~assets/img/profile/info/service.png" alt="">
      <div>在线客服</div>
      <img style="height: 20px;" src="~assets/img/common/more.png" alt="">
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ProfileInfo',
    props: {
      points: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['newsLength', 'historyLength'])
    },
    methods: {
      count() {
        this.points++
      },
      cnt() {
        this.$store.state.points++
      }
    }
  }
</script>

<style scoped>
  #info {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    margin: 10px 10px;
    border-radius: 10px;
    background-color: #fff;
    font-size: 16px;
    color: #666;
  }

  .info-item {
    display: flex;
    align-items: center;
    padding: 10px 10px;
    border-bottom: 1px solid rgba(96, 96, 96, .2);
  }

  .info-item img {
    height: 35px;
    margin-right: 5px;
  }

  .info-item div {
    flex: 1;
  }

  .info-item span {
    height: 16px;
    width: 16px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 50%;
    margin-right: 10px;
    font-weight: 600;
    text-align: center;
  }
</style>
