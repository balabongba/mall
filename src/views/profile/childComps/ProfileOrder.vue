<template>
  <div id="order">
    <div class="order-top">
      <div class="order-top-title">我的订单</div>
      <div>查看全部订单</div>
      <img src="~assets/img/common/more.png" alt="">
    </div>
    <div class="order-content">
      <div class="order-content-item" v-for="item of list" :key="item.name">
        <img :src="item.image" alt="">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileOrder',
    data() {
      return {
        list: [
        {
          name: '代付款',
          image: require('assets/img/profile/order/fukuan.png')
        },
        {
          name: '待发货',
          image: require('assets/img/profile/order/fahuo.png')
        },
        {
          name: '待收货',
          image: require('assets/img/profile/order/shouhuo.png')
        },
        {
          name: '待评论',
          image: require('assets/img/profile/order/pinglun.png')
        },
        {
          name: '退款/售后',
          image: require('assets/img/profile/order/shouhou.png')
        }
      ]
      }
    }
  }
</script>

<style scoped>
  #order {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    margin: 0 10px;
    border-radius: 10px;
    padding: 10px 10px;
    background-color: #fff;
    font-size: 14px;
    color: #666;
  }

  .order-top {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(96, 96, 96, .2);
    padding-bottom: 10px;
  }

  .order-top img {
    height: 14px;
    width: 14px;
  }

  .order-top-title {
    font-size: 18px;
    font-weight: 600;
    color: #000;
    flex: 1;
  }

  .order-content {
    padding-top: 15px;
    display: flex;
  }

  .order-content-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .order-content-item img {
    height: 30px;
    margin-bottom: 5px;
  }
</style>
