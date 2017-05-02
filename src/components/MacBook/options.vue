<template>
    <section class="options">
        <div class="wrapper">
            <ul>
                <li>
                    <img src="./../../assets/apple-img/mac/icon_shipping_large_2x.png"/>
                    <h4>Free two-day delivery</h4>
                    <p>On in-stock items ordered by 5 p.m.</p>
                    <span> Learn more ></span>
                </li>
                <li>
                    <img src="./../../assets/apple-img/mac/icon_pickup_large_2x.png"/>
                    <h4>Pick up at the Apple Store today</h4>
                    <p>Buy online and pick up available items in an hour.</p>
                    <span> Learn more ></span>
                </li>
                <li>
                    <img src="./../../assets/apple-img/mac/icon_shipping_large_2x.png"/>
                    <h4>Special financing</h4>
                    <p>Apply for special financing and earn rewards.</p>
                    <span> Learn more ></span>
                </li>
                <li>
                    <img src="./../../assets/apple-img/mac/icon_shipping_large_2x.png"/>
                    <h4>Get help buying</h4>
                    <p>Have a questions? Call a specialist or chat online.<br> Call 1-800-MY-APPLE.</p>
                    <span> Chat now ></span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default{
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .options{
        .wrapper{
            margin: auto;
            width: 900px;
            padding-top: 50px;

            ul{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                list-style: none;
                width: 100%;

                li{
                    text-align: center;
                    width: 200px;

                    img{
                        width: 40px;
                    }
                    span{
                        cursor: pointer;
                        color: #0070C9;
                    }
                }
            }
        }
    }
</style>