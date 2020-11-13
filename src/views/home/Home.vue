<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <tab-contorl
        class="fixed"
        v-show="isFixed"
        :titles="['流行', '新款', '精选']" @tabClick="tabClick"
        ref="tabControlTop"
      />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      />
      <recommend :recommends="recommends" />
      <feature />
      <tab-contorl
        :titles="['流行', '新款', '精选']" @tabClick="tabClick"
        ref="tabControl"
      />
      <goods-list :goodsList="showGoods" />
    </scroll>
    <!-- .native用于监听目标组件根元素的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBack" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabContorl from 'components/content/tab-contorl/TabContorl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/back-top/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/Recommend'
  import Feature from './childComps/FeatureView'

  import { getHomeMultidata, getHomeGoods } from 'network/home'
  import { debounce } from 'common/utils'

  export default {
    name: 'Home',
    components: {
      NavBar,
      Scroll,
      TabContorl,
      GoodsList,
      BackTop,
      HomeSwiper,
      Recommend,
      Feature
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBack: false,
        tabOffsetTop: 0,
        isFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()
      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 3.监听item中的图片加载
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
    },
    methods: {
      // 事件监听相关
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControlTop.currentIndex = index
      },
      // scrollTo(x, y, time(ms))
      backClick() {
        // 方法一：通过ref属性获取到scroll组件对象，然后对其中的scroll实例调用scrollTo方法
        // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
        // 方法二：在组件中封装一个scrollTo方法，然后直接调用
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.isShowBack = -position.y > 1000
        this.isFixed = -position.y > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      // 网络请求相关
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page)
          .then(res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1

            // 完成底部上拉
            this.$refs.scroll.finishPullUp()
          })
      }
    }
  }
</script>

<style scoped>
  #home {
    /* vh单位 -> 视口高度：视口的百分比 */
    height: 100vh;
  }

  .home-nav {
    background-color: #f6f6f6;
  }

  .fixed {
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
    z-index: 1
  }

  .content {
    overflow: hidden;
    position:absolute;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0;
  }

  /* calc()函数在运算符前后要留一个空格 */
  /* .content {
    margin-top: 44px;
    height: calc(100% - 93px);
    overflow: hidden;
  } */
</style>
