<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
   },
  data() {
    return {
      // isActive: false
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.path)
    }
  },
  computed: {
    // /home -> item1(/home) = true
    // /home -> item2(/category) = false
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
  /* tabbar高度为49px是大家公认最舒适的 */
  .tab-bar-item {
    height: 49px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    height: 26px;
    width: 26px;
    vertical-align: middle;
  }

</style>
