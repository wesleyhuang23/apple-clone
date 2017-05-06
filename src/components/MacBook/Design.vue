<template>
    <section>
        <div class="hero">
            <div class="img-hero">
                <figure class="image-hero"></figure>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
    .img-hero{
        height: 90vh;
        position: relative;

        figure{
            background-image: url('./../../assets/apple-img/mac/macbook/design/design_hero_large_2x.jpg');
            background-size: 1826px 1109px;
            background-repeat: no-repeat;
            height: 1109px;
            width: 1826px;
            position: relative;
            top: -350px;
            z-index: -1;
        }
    }
</style>