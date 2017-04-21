<template>
<div class="mb-chapter">
        <div class="header">
            <h1>Compare Mac models.</h1>
            <div><span>Find the best Mac for you ></span></div>
        </div>
        <div class="img">
            <img src="./../../assets/apple-img/mac/compare_large_2x.png"/> 
        </div>
        <hr>
        <div class="second-row">
            <div>
                <img src="./../../assets/apple-img/mac/icon_shipping_large_2x.png" />
                <h1>Free two-day delivery</h1>
                <p>On in-stock items ordered by 5:00 p.m.<p>
                <p>Learn More ></p>
            </div>
            <div> 
                <img src="./../../assets/apple-img/mac/icon_pickup_large_2x.png" />
                <h1>Pick up at the Apple Store Today</h1>
                <p id="second">Buy online and pick up available items in an hour<p>
                <p>Learn More ></p>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    .mb-chapter{
        height: 110vh;
        overflow: hidden;
        background: linear-gradient(#fff, #FDFDFD, #F7F7F7);
    }
    .header{
        text-align: center;
        margin-top: 130px;
        margin-bottom: 50px;
        

        h1{
            font-size: 40px;
        }
  
        span{
            padding-right: 20px;
            font-size: 20px;
            font-weight: lighter;
            color: #0070C9;
            cursor: pointer;
        }
    }
    .img{
        width: 1040px;
        margin: auto;

        img{
            width: 100%;
        }
    }
    hr{
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 80px;
        margin-bottom: 100px;
    }
    .second-row{
        width: 700px;
        margin: auto;
        display: flex;
        justify-content: space-between;

        div{
            display: inline-block;
            text-align: center;

            h1{
                font-size: 18px;
            }
            img{
                width: 35px;
            }
            p{
                width: 150px;
                margin: auto;
            }
            #second{
                width: 200px;
            }
            :last-child{
                color: #0070C9;
                cursor: pointer;
            }
        }
    }
</style>