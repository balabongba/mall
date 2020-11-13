<template>
  <div>
    <nav-bar>
      <img
        slot="left"
        src="~assets/img/common/back.svg" alt=""
        class="back"
        @click="backClick"
      >
      <tab-contorl
        :titles="['商品', '参数', '评论', '推荐']"
        slot="center"
        :bgColor="bgColor"
      />
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabContorl from 'components/content/tab-contorl/TabContorl'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar,
      TabContorl
    },
    data() {
      return {
        // tabContorl的背景色，由于自定义属性不能解析#符号，所以写在data
        bgColor: '#f6f6f6'
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .back {
    height: 25px;
    vertical-align: middle;
  }
</style>
