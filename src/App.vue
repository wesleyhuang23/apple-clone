<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation,
},
  name: 'app'
}
</script>

<style lang="scss">
  *{
    margin: 0;
    font-family: Helvetica, sans-serif
  }
  .carousel-indicators{
    display: flex;
    justify-content: center;
  }
</style>
