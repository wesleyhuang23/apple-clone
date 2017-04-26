<template>
    <section class="main">
        <div class="intro">
            <h1>MacBook <span>Light. Years ahead.</span></h1>
            <div class="macbook-img">
                <img src="./../../assets/apple-img/mac/macbook_large_2x.png"/>
            </div>
            <p id="film">Watch the Design film</p>
            <p>Our goal with MacBook was to do the impossible: engineer a full‑size experience into the lightest and most compact Mac notebook ever. That meant reimagining every element to make it not only lighter and thinner but also better. The result is more than just a new notebook. It’s the future of the notebook. And now, with sixth‑generation Intel processors, improved graphics performance, faster flash storage, and up to 10 hours of battery life,* MacBook is even more capable.</p>
            <div class="badge-content">
                <p><span>13.1 <span>mm</span></span><br> THIN</p>
                <p><span>2 <span>Ib</span></span> <br>LIGHT</p> 
                <p><span>12<span>-inch</span></span><br> RETINA DISPLAY</p> 
                <p><span>10<span> hours</span></span><br> BATTERY LIFE*</p> 
            </div>
        </div>
        
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
    h1{
        text-align: center;
        font-weight: lighter;
        font-size:50px;
        padding-top: 50px;
        padding-bottom: 30px;

        span{
            font-size: 30px;    
            display: block;
        }
    }
    #film{
        color: #BDB099;
        padding-bottom: 30px;
        cursor: pointer;
    }
    p{
        font-size: 20px;
        margin: auto;
        font-weight: lighter;
        width: 700px;
        text-align: center;
        color: #666666;
        line-height: 33px;
    }
    .macbook-img{
        width: 850px;
        margin: auto;
        padding-bottom: 45px;

        img{
            width: 100%;
        }
    }
    .badge-content{
        display: flex;
        flex-direction: row;
        width: 750px;
        margin: auto;
        padding-top: 50px;
        padding-bottom: 90px;
        padding-left: 60px;

        p{
            font-weight: lighter;
            text-align: left;
            font-size: 15px;
            // border: 1px solid green;

            &:nth-child(2){
                margin-right: -50px;
            }

            span{
                color: #BDB099;

                &:first-child{
                    font-size: 50px;
                    font-weight: lighter;
                }
                &:last-child{
                    font-size: 25px;
                }
            }
        }
    }
</style>