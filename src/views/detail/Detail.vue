<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content" ref="scroll">
      <detail-swiper :swipers="swipers" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" />
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'

  import Scroll from 'components/common/scroll/Scroll'

  import { getDetail, Goods, Shop, GoodsParam } from 'network/detail'

  export default {
    name: 'Detail',
    data() {
      return {
        iid: '',
        swipers: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      Scroll
    },
    created() {
      // 保存传入的iid
      this.iid = this.$route.params.iid
      getDetail(this.iid)
        .then(res => {
          const data = res.result
          // 1.获取轮播图
          this.swipers = data.itemInfo.topImages

          // 2.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

          // 3.获取商家信息
          this.shop = new Shop(data.shopInfo)

          // 4.保存商品详情信息
          this.detailInfo = data.detailInfo

          // 5.获取参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #fff;
  }

  .detail-nav {
    /* 此处不能修改tabContorl的颜色，需要进DetailNavBar修改 */
    background-color: #f6f6f6;
    position: relative;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position:absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
