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

<script>
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
