<template>
    <div class="navigation">
        <ul>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png" style="height: 20px; width: 20px; filter: invert(100%)"/> </li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>TV</li>
            <li>Music</li>
            <li>Support</li>
            <li class="search"><img src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-30-512.png" style="width: 15px; height: 15px; filter: invert(100%)"/></li>
            <li><div class="bag-wrapper"><img src="https://images.apple.com/support/assets/images/home/2015/store_bag_icon_2x.png" style="height: 31px; width: 31px; filter: invert(100%)"></div></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .navigation{
        background-color: #323232;
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            color: white;
            list-style: none;
            font-weight: 100;
            font-size: 15px;
            display: flex;
            justify-content: center;
            width: (100% / 10);
            cursor: pointer;
            transition: opacity .5s;
        }
        li:hover{
            opacity: .5;
        }
    }
    ul{
        display: flex;
        flex-direction: row;
        width: 1000px;
    }
    .search{
        img{
            position: absolute;
            top: 16px;
        }   
    }
    .bag-wrapper{
        width:20px;
        height: 20px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>