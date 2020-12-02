<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/icon/homepage.png" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/homepage_fill.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/icon/manage.png" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/manage_fill.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/icon/cart.png" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/cart_fill.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/icon/people.png" alt="">
        <img slot="item-icon-active" src="~assets/img/icon/people_fill.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
