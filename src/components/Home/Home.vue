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
            <div class="heading-wrapper">
              <div class="first-row">
              <p>Special Edition</p>
              <h1>iPhone 7</h1>
              </div>
              <div class="heading">
                <span> Now in</span>
                <img id="product-red" src="./../../assets/apple-img/home/productred_logo_medium_2x.png"/>
              </div>
            </div>
            <img src="./../../assets/apple-img/home/iphone7_productred_medium_2x.png" alt="Chania">
          </div>

          <div class="item" id="w">
            <div class="w-heading">
              <div class="watch-logo"></div>
              <h1>Live a Better day.</h1> 
            </div>
            <img src="./../../assets/apple-img/home/watch_medium_2x.jpg" alt="Chania">
          </div>

          <div class="item" id="pad">
            <div class="pad-header">
              <h1>iPad</h1>
              <h2>Flat-out fun.</h2>
            </div>
            <img src="./../../assets/apple-img/home/ipad_availability_medium_2x.jpg" alt="Flower">
          </div>

        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next" id="right">
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
    height: 90vh;
    overflow: hidden;
  }
  #red{
    background-color: #CC3341;
    img{
      width: 850px;
      margin: auto;
    }
    #product-red{
      width: 240px;
      margin-left: 20px;
    }
    
  }
  .first-row{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 10%;

    h1{
      color: white;
      text-align: center;
    }
    p{
      margin: auto;
      font-size: 10px;
      color: white;
      border: 1px solid white;
      border-radius: 5px;
      padding: 2px 8px;
    }
  }
  .heading{
    display: flex;
    justify-content: center;
    width: 408px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 160px;

    span{
      font-size: 45px;
      color: white;
      padding-top: 32px;
      padding-left: 10px;
    }
  }
 
  #w{
    background-color: #F2F2F2;
    img{
      width: 850px;
      margin: auto;
      padding-top: 30px;
    }
  }
  .watch-logo{
    width: 122px;
    height: 44px;
    background-image: url("https://images.apple.com/v/home/df/images/shared/watch_logo_large_2x.png");
    background-size: contain;
    margin: auto;
  }
  .w-heading{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 12%;

    h1{
      font-size: 40px;
      font-weight: 500;
    }
  }
  #pad{
    background-color: #FAFAFA;
    img{
      padding-top: 280px;
      margin: auto;
      width: 1000px;
    }
  }
  #myCarousel{
    background-color:#FAFAFA;
  }
  .pad-header{
    width: 100%;
    position: absolute;
    top: 15%;
    h1{
      text-align: center;
    }
    h2{
      text-align: center;
      font-size: 50px;
    }
  }
  .carousel-control.right{
    background-image: none;
  }
  .carousel-control.left{
    background-image: none;
  }
  .carousel-indicators{
    li{
      width: 50px;
      height: 5px;
      margin-left: 5px;
      border: 1px solid gray;
      border-radius: 100px;
    }
  }
</style>
