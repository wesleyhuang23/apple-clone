<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Foot from './components/Foot.vue';

export default {
  components: {
    Navigation,
    Foot
},
  name: 'app'
}
</script>

<style lang="scss">
  *{
    margin: 0;
    font-family: "Myriad Set Pro","Helvetica Neue","Helvetica","Arial", sans-serif;
  }
  .carousel-indicators{
    display: flex;
    justify-content: center;
  }
  a{
    color: inherit;
  }
  a:hover{
    color: inherit;
    text-decoration: none;
  }
</style>
