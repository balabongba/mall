<template>
  <div id="bottom-bar">
    <div @click="changeAll"  class="check-content">
      <check-button :isChecked="allTrue" class="button" />
      <span>全选</span>
    </div>
    <div class="price">
      合计：￥{{totalPrice}}
    </div>
    <div class="account">
      去结算({{account}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/common/checkbutton/CheckButton'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton,
    },
    data() {
      return {
        // allTrue: false
      }
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(item => item.checked).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      account() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      allTrue() {
        if(this.$store.state.cartList.length === 0) return false
        // return this.account === this.$store.state.cartList.length
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods: {
      changeAll() {
        if(this.allTrue) {
          // for(let item of this.$store.state.cartList) {
          //   item.checked = false
          // }
          for(let i = 0, len = this.$store.state.cartList.length; i < len; i++) {
            this.$store.state.cartList[i].checked = false
          }
        } else {
          // for(let item of this.$store.state.cartList) {
          //   item.checked = true
          // }
          for(let i = 0, len = this.$store.state.cartList.length; i < len; i++) {
            this.$store.state.cartList[i].checked = true
          }
        }
      }
    }
  }
</script>

<style scoped>
  #bottom-bar {
    height: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
  }

  .check-content {
    height: 100%;
    width: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 7px;
  }

  .button {
    display: inline-block;
    height: 21px;
    width: 21px;
  }

  .price {
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  .account {
    height: 100%;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff5777;
    color: #fff;
    font-size: 16px;
  }
</style>
