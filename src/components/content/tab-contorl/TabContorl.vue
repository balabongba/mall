<template>
  <div class="tab-contorl">
    <div class="tab-contorl-item"
         v-for="(item, index) in titles" :key="index"
         :class="{avtive: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabContorl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-contorl {
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    background-color: var(--color-background);
  }

  .tab-contorl-item {
    flex: 1;
  }

  .avtive {
    color: var(--color-tint)
  }

  .avtive span {
    border-bottom: 3px solid var(--color-tint);
    padding: 5px
  }
</style>
