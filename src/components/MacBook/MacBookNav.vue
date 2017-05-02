<template>
    <div class="nav">     
        <div class="nav-contents">
            <h1><router-link to="/macbook">MacBook</router-link></h1>
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
        width: 1000px;
        // position: fixed;
        // top: 57px;
        // left: 470px;
        background-color: rgba(256,256,256, .4);
        margin: auto;
        padding-top: 55px;
        // border: 1px solid red;
    }
    .nav-contents{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        width: 425px;
        padding-top: 20px;

        li{
           font-weight: lighter;

           &:last-child{
               background-color: #2189db;
               background: linear-gradient(#42a1ec, #0070c9);
               border-color: #07c;
               color: white;
               text-align: center;
               border-radius: 5px;
               width: 40px;
               text-shadow: 0 1px 1px rgba(28,115,184,0.64);
           }
        }
    }
</style>