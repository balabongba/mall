<template>
  <div class="check-button" :class="{checked: isChecked}">
    <img
      src="~assets/img/common/select.png"
      alt=""
    />
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check-button img {
    height: 18px;
    width:18px;
  }

  .checked {
    border-color: red;
    background-color: red;
  }
</style>
