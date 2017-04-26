<template>
    <div class="nav">
        <h1><router-link to="/macbook">MacBook</router-link></h1>
        <div>
            <ul>
                <li><router-link to="/macbook/design">Design</router-link></li>
                <li><router-link to="/macbook/wireless">Wireless</router-link></li>
                <li><router-link to="/macbook/macos">macOS</router-link></li>
                <li><router-link to="/macbook/techspecs">Tech Specs</router-link></li>
                <li><router-link to="/macbook/buy">Buy</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    h1{
        font-weight: lighter;
        font-size: 30px;
    }
    .nav{
        border-bottom: 1px solid #EFEFEF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 44px;
        width: 700px;
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