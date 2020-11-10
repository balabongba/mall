<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-loan="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" />
      <recommend :recommends="recommends" />
      <feature />
      <tab-contorl class="tab-contorl" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list :goodsList="showGoods" />
    </scroll>
    <!-- .native用于监听目标组件根元素的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBack" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import TabContorl from 'components/content/tab-contorl/TabContorl.vue'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/back-top/BackTop.vue'

  import HomeSwiper from './childComps/HomeSwiper.vue'
  import Recommend from './childComps/Recommend'
  import Feature from './childComps/FeatureView'

  import { getHomeMultidata, getHomeGoods } from 'network/home'

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
        isShowBack: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()
      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
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
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
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
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
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
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: #f6f6f6;
    z-index: 1;
  }

  .tab-contorl {
    position: sticky;
    top: 44px;
    z-index: 1;
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
