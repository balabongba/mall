<template>
  <div v-if="isShow" id="toast">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration=2000) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.message = ''
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
  #toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    z-index: 999;
    padding: 8px 10px;
  }
</style>
