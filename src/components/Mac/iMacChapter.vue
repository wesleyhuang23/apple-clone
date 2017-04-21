<template>
    <div class="imac-chapter">
        <div class="header">
            <h1>iMac</h1>
            <h2>Retina. In colossal and ginormous.</h2>
            <p><span>Learn more ></span><span>Buy ></span></p>
        </div>
        <div class="img">
            <img src="./../../assets/apple-img/mac/imac_large_2x.png" />
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    .imac-chapter{
        height: 67vh;
        background: linear-gradient(#fff, #FDFDFD, #F7F7F7);
    }
    .header{
        text-align: center;
        margin-top: 100px;
        margin-bottom: 70px;
        

        h1{
            font-size: 30px;
        }
        h2{
            margin-bottom: 20px;
            font-size: 40px
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
        width: 1150px;
        margin: auto;

        img{
            width: 100%;
        }
    }
</style>