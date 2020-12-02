<template>
  <div class="contorl">
    <div
      v-for="(item, index) of titleList"
      :key="item.maitKey"
      class="contorl-item"
      :class="{active: item.active}"
      @click="contorlClick(index)"
    >{{item.title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'CateNavBar',
    props: {
      titleList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      contorlClick(index) {
        this.$emit('contorlClick', index)
      }
    }
  }
</script>

<style scoped>
  .contorl {
    display: flex;
    flex-direction: column;
  }

  .contorl-item {
    background-color: #fcfcfc;
    width: 104px;
    text-align: center;
    font-size: 16px;
    font-weight: normal;
    height: 40px;
    line-height: 40px;
    color: #999;
  }

  .active {
    color: var(--color-high-text);
    background-color: #fff;
    font-weight: 800;
    border-left: 3px solid var(--color-high-text);
    border-right: 3px solid #fff;
  }
</style>
