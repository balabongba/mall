<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style>
  .nav-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
    line-height: 44px;
  }

  .left {
    width: 50px;
  }

  .right {
    width: 50px;
  }

  .center {
    flex: 1;
    text-align: center;
  }
</style>
