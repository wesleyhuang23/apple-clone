<template>
    <div class="mb-chapter">
        <div class="header">
            <h1>MacBook</h1>
            <h2>Light. Years ahead.</h2>
            <div><span>Learn More ></span><span>Buy ></span></div>
        </div>
        <div class="img">
            <img src="./../../assets/apple-img/mac/macbook_large_2x.png"/> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .mb-chapter {
        height: 85vh;
        position: relative;
        overflow: hidden;
        background-color: #FEFEFE;
    }
    .header{
        text-align: center;
        margin-top: 100px;
        margin-bottom: 150px;

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
        width: 950px;
        position: relative;
        margin: auto;
        bottom: 0px;

        img{
            width: 100%;
        }
    }
</style>