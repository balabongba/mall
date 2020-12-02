<template>
  <div id="profile-nav">
    <div class="nav-top">
      <img src="~assets/img/profile/nav/setup.png" alt="">
    </div>
    <div class="nav-center">
      <div class="center-img">
        <img src="~assets/img/profile/nav/user.png" alt="">
      </div>
      <div class="center-text">
        登录/注册
      </div>
    </div>
    <div class="nav-bottom">
      <div class="item" v-for="item of list" :key="item.title">
        <div class="number">{{item.number}}</div>
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileNavBar',
    data() {
      return {
        list: [
          {
            title: '收藏夹',
            number: 0
          },
          {
            title: '关注店铺',
            number: 0
          },
          {
            title: '红包卡券',
            number: 0
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #profile-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .nav-top {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin: 5px 5px 0 0;
  }

  .nav-top img {
    height: 30px;
    width: 30px;
  }

  .nav-center {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .center-img {
    margin: 0 7px 0 15px;
  }

  .center-img img {
    height: 70px;
    width: 70px;
  }

  .center-text {
    display: flex;
    flex: 1;
    align-items: center;
    font-size: 23px;
    color: var(--color-text);
  }

  .nav-bottom {
    width: 100%;
    display: flex;
  }

  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    font-size: 14px;
    padding: 10px 0 15px;
  }

  .number {
    margin-bottom: 3px;
  }
</style>
