<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="item">
      <a :link="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script scoped>
  export default {
    name: 'Recommend',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    border-bottom: 12px solid #eee;
    padding: 10px 0 15px;
  }

  .item {
    flex: 1;
    text-align: center;
    font-size: 10px;
  }

  .item img {
    width: 80%
  }
</style>
