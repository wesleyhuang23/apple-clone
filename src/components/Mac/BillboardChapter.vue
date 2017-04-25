<template>
    <section class="billboard">
        <div class="education">
            <h1>Mac for Education</h1>
            <p>Inspire creativity and curiosity in the classroom and beyond.</p>
            <p>
                <span>Learn about Mac in education ></span><span>Shop for College ></span>
            </p>
        </div>
        <div class="business">
            <h1>Mac for Business</h1>
            <p>Get the power to take your business to the next level.</p>
            <p><span>Learn about Mac in business ></span><span>Shop for your business ></span></p>
        </div>
        <div class="workshop">
            <h1>Get the most from Mac at free in-store workshops.</h1>
            <p>Sign up for hands-on Apple Store workshops to learn the basics. Or take your Mac skills to the next level.</p>
            <p><span>Find a Store ></span></p>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            backgrounds: ['./../../assets/apple-img/mac/education_large_2x.jpg', './../../assets/apple-img/mac/business_large_2x.jpg', './../../assets/apple-img/mac/workshops_large_2x.jpg'],
        }
    }
}
</script>

<style lang="scss" scoped>
    .billboard{
        width: 100%;

        div{
            height: 60vh;
            width: 100%;
            margin-bottom: 10px;

            &:last-child{
                margin-bottom: 0px;
            }
        }
    }
    h1{
        color: white;
        text-align: center;
        padding-top: 90px;
        font-size: 40px;
        padding-bottom: 20px;
        margin: 0px;
    }
    p{
        color: white;
        text-align: center;
        font-weight: lighter;
        font-size: 17px;
        padding-bottom: 20px;
    }
    span{
        color: white;
        padding-left: 20px;
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }
    .education{
        background-image: url('./../../assets/apple-img/mac/education_large_2x.jpg');
        background-size: cover;
    }
    .business{
        background-image: url('./../../assets/apple-img/mac/business_large_2x.jpg');
        background-size: cover;
    }
    .workshop{
        background-image: url('./../../assets/apple-img/mac/workshops_large_2x.jpg');
        background-size: cover;

        h1{
            width: 550px;
            margin: auto;
        }
        p{
            width: 500px;
            margin: auto;
        }
    }
</style>