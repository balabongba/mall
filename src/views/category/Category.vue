<template>
  <div id="category">
    <nav-bar class="cat-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <cate-nav-bar
        :titleList="titleList"
        @contorlClick="contorlClick"
      />
      <scroll
        class="scroll"
        ref="scroll"
        :probe-type="3"
      >
        <cate-goods
          :goodsList="goodsList"
        />
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import CateNavBar from './childComps/CateNavBar'
  import CateGoods from './childComps/CateGoods'

  import { getCategory, getSubCategory } from 'network/category'
  import { itemListenerMixin } from 'common/mixin'

  export default {
    name: 'Category',
    mixins: [itemListenerMixin],
    data() {
      return {
        titleList: [],
        goodsList: [],
        saveY: 0
      }
    },
    components: {
      NavBar,
      Scroll,
      CateNavBar,
      CateGoods
    },
    async mounted() {
      const res = await getCategory()
      const list = res.data.category.list
      // 检索缓存中是否存在navbarIndex
        // 第一次进入页面，由于没有将任何index写入缓存，所以起到默认为0的作用
        // 从其他页面回到该页面，则可以读取到缓存中的navbarIndex
      const idx = Number(sessionStorage.getItem('navbarIndex') || 0)
      this.titleList = list.map((item, index) => {
        let active = false
        if (index === idx) active = true
        return {
          ...item,
          active
        }
      })
      const result = await getSubCategory(Number(list[idx].maitKey))
      this.goodsList = result.data.list
      await this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    },
    methods: {
      contorlClick(index) {
        const idx = this.titleList.findIndex(item => item.active)
        if (index !== idx) {
          this.titleList[idx].active = false
          this.titleList[index].active = true
          sessionStorage.setItem('navbarIndex', index)
          getSubCategory(this.titleList[index].maitKey)
            .then(res => {
              this.goodsList = res.data.list
            })
        }
      }
    }
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .cat-nav {
    background-color: #f6f6f6;
  }

  .content {
    height: calc(100% - 93px);
    display: flex;
    width: 100%;
  }

  .scroll {
    flex: 1;
    overflow: hidden;
  }
</style>
