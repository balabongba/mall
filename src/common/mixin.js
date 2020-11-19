// 混入
import BackTop from 'components/content/back-top/BackTop'

import { debounce } from 'common/utils'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBack: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}
