<template>
    <div class="nav">
        <h1>MacBook</h1>
        <div>
            <ul>
                <li><router-link to="/macbook/design">Design</router-link></li>
                <li>Wireless</li>
                <li>macOS</li>
                <li>Tech Specs</li>
                <li>Buy</li>
            </ul>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    h1{
        font-weight: lighter;
    }
    .nav{
        border-bottom: 1px solid grey;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 44px;
        width: 800px;
        margin: auto;
    }
    ul{
        display: flex;
        justify-content: space-between;
        list-style: none;
        width: 425px;
        padding-top: 20px;

        li{
           font-weight: lighter;

           &:last-child{
               background-color: #1680D5;
               color: white;
               text-align: center;
               border-radius: 5px;
               width: 40px;
           }
        }
    }
</style>