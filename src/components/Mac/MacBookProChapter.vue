<template>
    <div class="mbp-chapter">
        <div class="header">
            <h2>Macbook Pro</h2>
            <h1>A touch of genius.</h1>
            <p><span>Learn more ></span><span>Buy ></span></p>
        </div>
        <div class="img">
            <img src="./../../assets/apple-img/mac/macbookpro_large_2x.png"/> 
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    .mbp-chapter{
        height: 80vh;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .header{
        text-align: center;
        padding-top: 100px;

        h1{
            font-size:55px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        span{
            padding-right: 20px;
            font-size: 20px;
            font-weight: lighter;
            color: #0070C9;
        }
    }
    .img{
        position: absolute;
        bottom: 0px;
        width: 175%;

        img{
            width: 100%;
        }
    }
</style>