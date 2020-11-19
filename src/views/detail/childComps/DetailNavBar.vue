<template>
  <div>
    <nav-bar>
      <img
        slot="left"
        src="~assets/img/common/back.svg" alt=""
        class="back"
        @click="backClick"
      >
      <div slot="center" class="title">
        <div
          v-for="(item, index) of titles"
          :key="index"
          @click="titleClick(index)"
          class="title-item"
          :class="{avtive: index === currentIndex}"
        >
          <span>{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      }
    }
  }
</script>

<style scoped>
  .back {
    height: 25px;
    vertical-align: middle;
  }
  .title {
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }

  .title-item {
    flex: 1;
  }

  .avtive {
    color: var(--color-high-text)
  }
</style>
