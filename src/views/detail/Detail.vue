<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="navBar"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :swipers="swipers" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goodsList="recommendList" ref="recommend" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack" />
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import { getDetail, getRecommend, Goods, Shop, GoodsParam } from 'network/detail'
  import { itemListenerMixin, backTopMixin } from 'common/mixin'
  import { debounce } from 'common/utils'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: '',
        swipers: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        themeTops: [],
        getThemeTops: null
      }
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

          // 6.取出评论信息(第一条)
          if(data.rate.cRate !== 0 ) {
            this.commentInfo = data.rate.list[0]
          }
        })

      // 请求推荐商品信息
      getRecommend()
        .then(res => {
          this.recommendList = res.data.list
        })

      // 获取所有主题的offsetTop
        // 1.created中——不行，完全获取不到元素
        // 2.mounted中——不行，刚挂在完毕，数据还未获取到
        // 3.获取数据的回调函数中——不行，DOM没渲染完
        // 4.获取数据后，使用$nextTick——不行，此时仅渲染完DOM，但图片是异步加载，图片的高度可能不会被计算进去
        // 5.created中定义函数，监听图片加载，加载完毕后获取高度
      this.getThemeTops = debounce(() => {
        this.themeTops = []
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      }, 100)
    },
    mounted() {},
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
        this.getThemeTops()
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100)
      },
      contentScroll(position) {
        const positionY = -position.y
        let length = this.themeTops.length

        // 普通方法
        // for(let i = 0; i < length; i++) {
        //   if((this.$refs.navBar.currentIndex !== i) && (i < length - 1 &&  positionY >= this.themeTops[i] && positionY < this.themeTops[i+1]) || (i === length - 1 && positionY > this.themeTops[i])){
        //     this.$refs.navBar.currentIndex = i
        //   }
        // }

        // 取巧方法 -> 内存换执行速度
        for(let i = 0; i < length - 1; i++) {
          if((this.$refs.navBar.currentIndex !== i) && (positionY >= this.themeTops[i] && positionY < this.themeTops[i+1])) {
            this.$refs.navBar.currentIndex = i
          }
        }

        // 是否显示回到顶部
        this.isShowBack = positionY > 1000
      },
      addToCart() {
        // 需要展示的信息
        let produc = {}
        produc.image = this.swipers[0]
        produc.title = this.goods.title
        produc.desc = this.detailInfo.desc
        produc.price = this.goods.realPrice
        produc.iid = this.iid

        // 添加至购物车
        this.$store.dispatch('toCart', produc)
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
    background-color: #f6f6f6;
  }

  .content {
    overflow: hidden;
    /* position:absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 58px; */
    position: relative;
    height: calc(100% - 102px);
    background-color: var(--color-background);
  }
</style>
