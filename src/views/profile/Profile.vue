<template>
  <div id="profile">
    <profile-nav-bar />
    <profile-order />
    <profile-info :points="$store.state.points" />
  </div>
</template>

<script>
  import ProfileNavBar from './childComps/ProfileNavBar'
  import ProfileOrder from './childComps/ProfileOrder'
  import ProfileInfo from './childComps/ProfileInfo'

  export default {
    name: 'Profile',
    components: {
      ProfileNavBar,
      ProfileOrder,
      ProfileInfo
    }
  }
</script>

<style scoped>
  #profile {
    height: 100vh;
    background-color: #eaeaea;
  }
</style>
