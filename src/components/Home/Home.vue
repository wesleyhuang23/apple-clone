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
    <footer>
      <div class="more">
        <div class="shop-and-learn"> 
          <ul>
            <li>Shop and Learn</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>TV</li>
            <li>Music</li>
            <li>iTunes</li>
            <li>iPod</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div class="apple-store">
          <ul>
            <li>Apple Store</li>
            <li>Find a Store</li>
            <li>Genius Bar</li>
            <li>Workshops and Learning</li>
            <li>Youth Programs</li>
            <li>Apple Store App</li>
            <li>Refurbished and Clearance</li>
            <li>Financing</li>
            <li>Reuse and Recycling</li>
            <li>Order Status</li>
            <li>Shopping Help</li>
          </ul>
        </div>

        <div class="b+e">

          <div class="for-education">
            <ul>
              <li>For Education</li>
              <li>Apple and Education</li>
              <li>Shop for Change</li>
            </ul>
          </div>
          <div class="for-business"> 
            <ul>
              <li>For Business</li>
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
          </div>

        </div>

        <div class="a+a">

          <div class="account">
            <ul>
              <li>Account</li>
              <li>Manage Your Apple ID</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
          </div>
          <div class="apple-values">
            <ul>
              <li>Apples Values</li>
              <li>Accessibility</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Inclusion and Diversity</li>
              <li>Privacy</li>
              <li>Supplier Responsibility</li>
            </ul>
          </div>
        
        </div>

        <div class="about-apple"> 
          <ul>
              <li>About Apple</li>
              <li>Apple Info</li>
              <li>Newroom</li>
              <li>Job Opportunities</li>
              <li>Press Info</li>
              <li>Investors</li>
              <li>Contact Apple</li>
            </ul>
        </div>
      </div>
    </footer>
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
      padding-top: 200px;
      margin: auto;
      width: 1000px;
    }
  }
  footer{
    height: 30vh;
    background-color: #F2F2F2;
    display: flex;
    justify-content: center;
  }
  .more{
    display: flex;
    justify-content: space-between;
    width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
  }
  ul{
    list-style: none;
  }
  li{
    font-weight: lighter;
    font-size: 10px;
    cursor: pointer;
    display: block;
    margin-bottom: 6px;

    &:first-child{
      font-weight: bold;
      cursor: none;
      text-decoration: none;
    }
    &:hover{
      text-decoration: underline;
    }
  }
</style>
