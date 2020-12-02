<template>
  <div class="goodsList">
    <a
      v-for="item in goodsList"
      :key="item.image"
      :href="item.link"
      class="goodsItem"
    >
      <img
        class="goodsImage"
        :src="item.image"
        alt=""
        @load="imageLoad"
      >
      <div class="goodsTitle">{{item.title}}</div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'CateGoods',
    props:{
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style scoped>
  .goodsList {
    height: calc(100% - 93px);
    display: flex;
    flex-wrap: wrap;
    padding-top: 16px 0 0 2px;
  }

  .goodsItem {
    height: 105px;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* pc端一行三个 */
    margin: 5px 11px;
    /* 手机端一行两个 */
    /* margin: 5px 24px; */
  }

  .goodsImage {
    height: 75px;
    width: 75px;
  }

  .goodsTitle {
    font-size: 13px;
    color: #999;
  }
</style>
