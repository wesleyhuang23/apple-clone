<template>
  <div class="home">
    <div class="carousel">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active" id="red">
            <img src="./../../assets/apple-img/home/iphone7_productred_medium_2x.png" alt="Chania">
          </div>

          <div class="item" id="w">
            <img src="./../../assets/apple-img/home/watch_medium_2x.jpg" alt="Chania">
          </div>

          <div class="item" id="pad">
            <img src="./../../assets/apple-img/home/ipad_availability_medium_2x.jpg" alt="Flower">
          </div>

        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <Promo></Promo>
  </div>
</template>

<script>
import Promo from './Promo';
export default {
  components:{
    Promo,
  },
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style lang="scss" scoped>
  .carousel{
    height: 80vh;
    overflow: hidden;
  }
  #red{
    img{
      position: relative;
      top: 200px;
      
    }
  }
  #w{
    img{
      width: 950px;
      margin: auto;
    }
  }
  #pad{
    img{
      padding-top: 300px;
      margin: auto;
      width: 900px;
    }
  }
  
</style>
