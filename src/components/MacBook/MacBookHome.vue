<template>
    <section class="macbook">
        <MacBookNav></MacBookNav>
        <router-view></router-view>
    </section>
</template>

<script>
import MacBookNav from './MacBookNav';

    export default{
        components:{
            MacBookNav,
        },
        data () {
            return {

            }
        }
    }
</script>

<style>
</style>