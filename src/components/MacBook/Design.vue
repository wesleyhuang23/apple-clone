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
</style>