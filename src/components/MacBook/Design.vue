<template>
    <section>
        <div class="hero">
            <div class="img-hero">
                <figure class="image-hero"></figure>
            </div>
            <h1>Pure invention.</h1>
            <br>
            <p>We designed MacBook to be not only thinner and lighter, but more functional and intuitive than ever before. To do that, we couldn’t just shave a millimeter here, a gram there. So we started from scratch, reinventing each essential element as part of a singular, deceptively simple design. It’s everything there is to love about Mac. In its purest form ever.</p>
        </div>
        <section class="front">
            <div class="img">
                <img src="./../../assets/apple-img/mac/macbook/design/design_360_static_large_2x.jpg"/>
            </div>
        </section>
        <section class="keys">
            <div class="line"></div>
            <h1>A keyboard reimagined from <br> A to Z.</h1>
            <p>From the beginning, our goal was to design a full, uncompromising Mac experience. And a full-size keyboard is an essential part of that. In order to fit a full-size keyboard in the incredibly thin MacBook, we designed the keyboard from the ground up. Each component has been rethought, from the underlying mechanism to the curvature of the surface of each key to the distinctive new typeface. The result is a keyboard dramatically thinner than its predecessor. Now when your finger strikes the key, it goes down and bounces back with a crisp, consistent motion that makes typing with precision a breeze.</p>
            <div class="img">
                <img src="./../../assets/apple-img/mac/macbook/design/design_keyboard_large_2x.jpg"/>
            </div> 
            <div class="butterfly">
                <h2>Butterfly mechanism</h2>
                <p>Traditional keyboards use a scissor mechanism, which tends to wobble around the edges. This creates a lack of precision when you strike anywhere except the center of the key. We needed to reduce key wobbling for a keyboard this thin; otherwise, striking a key off-center could result in the keycap hitting bottom before a keystroke registers. So we designed a unique butterfly mechanism, which is wider than the scissor mechanism and has a single assembly made from a stiffer material — allowing for a more stable, responsive key that takes up less vertical space. This innovative design improves stability, uniformity, and control — no matter where you press on the key.</p>
            </div>
            <div class="row">
                <div class="traditional"> 
                    <figure></figure>
                </div>
                <div class="new">
                    <figure></figure>
                </div>
            </div>
            <section class="keyboard-design">
                <div class="key-design">
                    <div class="info">
                        <h2>Key Design</h2>
                        <p>The redesigned keys on MacBook feature a larger surface area, a thinner construction, and a deeper curvature, creating a more defined space for your fingertip to naturally find and press the keys. These refinements may be subtle, but the feel is distinct and intuitive. Combined with the butterfly mechanism, the design allows for much greater control when typing.</p>
                    </div>
                    <figure class="specs">
                        <div class="badge-content">
                            <span class="badge-large">17<span class="badge-half">%</span></span><br>
                            <span>Larger Keys</span>
                        </div>
                        <div class="badge-content">
                            <span class="badge-large">40<span class="badge-half">%</span></span><br>
                            <span>Thinner Key Assembly</span>
                        </div>
                    </figure>
                </div>
            </section>
        </section>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
    h1{
        font-size: 50px;
        font-weight: lighter;
        text-align: center;
    }
    h2{
        font-weight: lighter;
    }
    p{
        width: 800px;
        font-weight: lighter;
        text-align: center;
        margin: auto;
        font-size: 23px;
    }
    .hero{

        h1{
            position: relative;
            top: -150px;
        }
        p{
            position: relative;
            top: -150px;
        }
        .img-hero{
            height: 65vh;
            position: relative;

            figure{
                background-image: url('./../../assets/apple-img/mac/macbook/design/design_hero_large_2x.jpg');
                background-size: 1826px 1109px;
                background-repeat: no-repeat;
                height: 1109px;
                width: 1826px;
                position: relative;
                top: -350px;
                left: 30px;
                z-index: -1;
            }
        }
    }
    .front{
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F2F2F2;

        .img{
            width: 1200px;
            height: 50px;

            img{
                width: 100%;
                background-color: #F2F2F2;
            }
        }
    }
    .keys{
        padding-top: 110px;

        .line{
            margin-bottom: 50px;
        }

        h1{
            font-weight: lighter;
            margin-bottom: 33.8;
            margin: auto;
            text-align: center;
        }

        p{
            text-align: left;
            margin-top: 18px;
            font-size: 17px;
            margin-bottom: 100px;
        }
        .img{
            width: 1200px;
            margin:auto;

            img{
                width: 100%;
            }
        }
        .butterfly{
            margin-top: 100px;
            width: 800px;
            margin: auto;
        }
        .keyboard-design{
            background-color: #F2F2F2;
            padding-top: 110px;
            padding-bottom: 110px;
        }
        .key-design{
            display: flex;
            justify-content: space-between;
            width: 800px;
            margin: auto;
            
            .info{
                p{
                    width: 350px;
                    margin-bottom: 0px;
                }
            }
            .specs{
                display: flex;
                align-items: center;

                .badge-content{
                    display: block;
                    margin-left: 50px;

                    .badge-large{
                        font-size: 90px;
                        font-weight: lighter;
                        color: #BEB19A;
                    }
                    .badge-half{
                        font-size: 50px;
                        font-weight: lighter;
                    }
                    span{
                        &:last-child{
                            font-size: 15px;
                            font-weight: lighter;
                            text-transform: uppercase;
                        }
                    }
                }
            }
        }
    }
</style>