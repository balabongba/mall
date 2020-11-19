<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">
        购物车
        <span v-show="cartLength">({{cartLength}})</span>
      </div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) of cartList"
        :key="index"
        :itemInfo="item"
      />
    </scroll>
    <cart-bottom-bar />
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import CartListItem from './childComps/CartListItem'
  import CartBottomBar from './childComps/CartBottomBar'

  import { mapGetters } from 'vuex'

  export default {
    name: 'Cart',
    components:{
      NavBar,
      Scroll,
      CartListItem,
      CartBottomBar
    },
    computed: {
      // 用于将store中getters里的内容在子组件的计算属性中输出
      // ...mapGetters(['cartLength'])
      ...mapGetters(['cartLength', 'cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
  }

  .cart-nav {
    background-color: #f6f6f6;
  }

  .content {
    overflow: hidden;
    position: relative;
    height: calc(100% - 44px - 49px - 40px);
    background-color: var(--color-background);
  }

</style>
