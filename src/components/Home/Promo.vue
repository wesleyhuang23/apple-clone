<template>
    <div class="promo">
        <div class="mbp">
        </div>
        <div class="iphone">
        </div>
        <div class="airpods">
        </div>
        <div class="accessories">
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'promo',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .promo{
        height: 20vh;
        display: flex;

        div{
            height: 100%;
            width: (100% / 4);
            margin-top: 2px;
            margin-bottom: 2px;
            cursor: pointer;
            margin-right: 2px;

            &:last-child{
                margin-right: 0px;
            }
        }
    }
    .mbp{
        background-image: url('./../../assets/apple-img/home/macbook_pro_large_2x.jpg');
        background-size: cover;
        background-position: center;
    }
    .iphone{
        background-image: url('./../../assets/apple-img/home/iphone_large_2x.jpg');
        background-size: cover;
        background-position: center;
    }
    .airpods{
        background-image: url('./../../assets/apple-img/home/airpods_large_2x.jpg');
        background-size: cover;
        background-position: center;
    }
    .accessories{
        background-image: url('./../../assets/apple-img/home/accessories_large_2x.jpg');
        background-size: cover;
        background-position: center;
    }
</style>