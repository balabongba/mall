<template>
  <div id="info">
    <div class="info-item">
      <img src="~assets/img/profile/info/jinbi.png" alt="">
      <div>积分商城</div>
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
      <img style="height: 20px;" src="~assets/img/common/more.png" alt="">
    </div>
    <div class="info-item">
      <img src="~assets/img/profile/info/zuji.png" alt="">
      <div>我的足迹</div>
      <img style="height: 20px;" src="~assets/img/common/more.png" alt="">
    </div>
    <div class="info-item" style="border: none;">
      <img src="~assets/img/profile/info/service.png" alt="">
      <div>在线客服</div>
      <img style="height: 20px;" src="~assets/img/common/more.png" alt="">
    </div>
  </div>

</template>

<script>
  export default {
    name: 'ProfileInfo',
    data() {
      return {

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
</style>
