<template>
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

      <div class="legal">
        <p>More ways to shop: Visit an <a href="#"> Apple Store</a>, call 1-800-MY-APPLE, or <a href="#">find a reseller.</a></p>
        <hr>
        <div class="bottom">
          
          <p>Copyright 2017 Apple Inc. All rights reserved.</p>
          <div>
            <ul id="list">
              <li style="font-weight: lighter;">Privacy Policy |</li>
              <li>Terms of Use |</li>
              <li>Sale and Refunds |</li>
              <li>Legal |</li>
              <li>Site Map</li>
            </ul>
          </div>
          <p class="country">United States</p>

        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'Foot',
}
</script>

<style lang="scss" scoped>
footer{
    height: 50vh;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
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
  .legal{
    width: 820px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    p{
      font-size: 12px;
      font-weight: lighter;
      color: #888888;
    }
  }
  #list{
    display: flex;
    flex-direction: row;

    li{
      margin-left: 5px;
      cursor: pointer;
      color: #5B5B5B;

      &:hover{
        text-decoration: underline;
      }
    }
  }
  hr{
    margin-top: 10px;
    margin-bottom: 10px;
    height: 2px;
  }
  .bottom{
    width: 100%;
    display: flex;
  }
  .country{
    position: relative;
    right: -150px;
  }
</style>