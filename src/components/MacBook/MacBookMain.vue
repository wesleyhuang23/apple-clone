<template>
    <section class="main">
        <div class="intro">
            <h1>MacBook <span>Light. Years ahead.</span></h1>
            <div class="macbook-img">
                <img src="./../../assets/apple-img/mac/macbook/hero_static_large_2x.jpg"/>
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
        <div class="nopad">
            <figure>
            </figure>
            <figcaption>Available in silver, gold, space gray, and all-new rose gold.</figcaption>
        </div>
        <div class="retina">
            <figure></figure>
            <div class="section-content">
                <div class="line"></div>
                <h1>A Retina displat that takes everything to the edge.</h1>
                <p>he moment you open your MacBook, its gorgeous 12-inch Retina display with edge-to-edge glass brings everything into focus. Every photo leaps off the screen in rich, vibrant detail. Over 3 million pixels render each letter with crystal clarity. And it all comes to light on the thinnest Retina display ever on a Mac, meticulously honed to deliver a bold visual experience within an impossibly minimal design.</p>
                <span id="learn">Learn more about Design ></span>
                <aside>
                    <div><span class="badge-large">12<span class="badge-half">-inch</span></span><span class="badge-small">RETINA DISPLAY</span></div>
                    <div><span class="badge-large">2304<span class="badge-half">x</span>1440</span><span class="badge-small">RESOLUTION</span></div>
                    <div><span class="badge-large">16:10</span><span class="badge-small">ASPECT RATION</span></div>
                </aside>
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
        padding-top: 30px;
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
    .nopad{
        height: 100vh;
        figure{
            // border: 1px solid green;
            background-image: url("https://images.apple.com/v/macbook/e/overview/images/overview_colors_large_2x.jpg");
            background-position: center;
            background-size: cover;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
        figcaption{
            text-align: center;
            font-weight: lighter;
            margin-top: 20px;
        }
        img{
            width: 100%;
        }
    }
    .retina{
        padding-top: 208px;
        padding-bottom: 110px;
        background-color: #FAFAFA;

        figure{
            // border: 1px solid green;
            height: 640px;
            margin: auto;
            width: 100%;
            position: relative;
            background-image: url('./../../assets/apple-img/Mac/macbook/overview_retina_large_2x.jpg');
            background-size: cover;
            background-position: center;
        }
        .section-content{
            width: 980px;
            margin: auto;
            
            #learn{
                cursor: pointer;
                color: #0070C9;
            }
            aside{
                display: flex;
                padding-top: 50px;
                width: 700px;
                justify-content: space-between;
            }
            div{
                display: flex;
                flex-direction: column;
            }
            #line{
                border-bottom: 1px solid gray;
                width: 50px;
            }
            h1{
                width: 600px;
                text-align: left;
                font-size: 40px;
            }
            p{
                width: 600px;
                text-align: left;
                margin: 0px;
                font-size: 18px;
                font-weight: lighter;
                padding-bottom: 10px;
            }
            .badge-large{
                color: #BDB099;
                font-size: 60px;
                font-weight: lighter;
            }
            .badge-half{
                font-size: 25px;
                padding-left: 5px;
            }
            .badge-small{
                font-size: 15px;
                padding-left: 10px;
                font-weight: lighter;
                color: #B0B0B0;
            }
        }
        
    }
</style>