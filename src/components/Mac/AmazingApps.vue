<template>
    <section class="amazing-apps">
        <h1>Built-in Apps</h1>
        <p>Powerful creativity and productivity tools live inside every Mac -- apps that help you explore, connect, and work more efficiently. Discover thousands more in the Mac App Store.
        <div class="nav">
            <ul>
                <li v-on:click="changeView(0)"><img src="./../../assets/apple-img/mac/bia_photos_header_large_2x.png"/> Photos</li>
                <li v-on:click="changeView(1)"><img src="./../../assets/apple-img/mac/bia_imovie_header_large_2x.png"/> iMovie</li>
                <li v-on:click="changeView(2)"><img src="./../../assets/apple-img/mac/bia_garageband_header_large_2x.png"/> GarageBand</li>
                <li v-on:click="changeView(3)"><img src="./../../assets/apple-img/mac/bia_pages_header_large_2x.png"/> Pages</li>
                <li v-on:click="changeView(4)"><img src="./../../assets/apple-img/mac/bia_numbers_header_large_2x.png"/> Numbers</li>
                <li v-on:click="changeView(5)"><img src="./../../assets/apple-img/mac/bia_keynote_header_large_2x.png"/> Keynote</li>
                <li v-on:click="changeView(6)"><img src="./../../assets/apple-img/mac/bia_safari_header_large_2x.png"/> Safari</li>
            </ul>
        </div>
        <div class="apps">
            <div class="img">
                <img v-bind:src="appImage[count]()"/>
            </div>
            <div class="info">
                <img v-bind:src="appIcon[count]()"/>
                <h1>{{appTitle[count]}}</h1>
                <p>{{appDescription[count]}}</p>
                <span>Learn more ></span> 
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data () {
        return {
            count: 0,
            appTitle: ['Photos','iMovie','GarageBand','Pages','Numbers','Keynote','Safari',],
            appDescription: [
                'Keep your growing library organized and accessible. Perfect your images and create beautiful gifts for sharing. And with iCloud Photo Library, you can store a lifetime’s worth of photos and videos in the cloud.',
                'Tell stories like never before. A simple design and intuitive editing features make it easy to create beautiful 4K movies and Hollywood-style trailers. And with iMovie Theater, you can enjoy them on all your devices.',
                'The easiest way to create great-sounding songs on your Mac. With an intuitive interface and access to a complete sound library, it’s never been easier to learn, play, record, and share music like a pro.',
                'This powerful word processor gives you everything you need to create documents that look beautiful. And read beautifully. It lets you work seamlessly between Mac and iOS devices. And work effortlessly with people who use Microsoft Word.',
                'Create sophisticated spreadsheets with dramatic interactive charts, tables, and images that paint a revealing picture of your data. Work seamlessly between Mac and iOS devices. And work effortlessly with people who use Microsoft Excel.',
                'Bring your ideas to life with beautiful presentations. Employ powerful tools and dazzling effects that keep your audience engaged. Work seamlessly between Mac and iOS devices. And work effortlessly with people who use Microsoft PowerPoint.',
                'Safari has all kinds of innovative features that let you enjoy more of the web. Energy‑saving technologies let you surf longer. Built-in privacy is stronger than ever. You can browse seamlessly across all your devices. And it’s easy to share your favorite pages.',
            ],
            appImage: [
                function(){return require('./../../assets/apple-img/mac/bia_photos_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_imovie_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_garageband_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_pages_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_numbers_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_keynote_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_safari_large_2x.png')},
            ],
            appIcon: [
                function(){return require('./../../assets/apple-img/mac/bia_photos_header_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_imovie_header_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_garageband_header_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_pages_header_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_numbers_header_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_keynote_header_large_2x.png')},
                function(){return require('./../../assets/apple-img/mac/bia_safari_header_large_2x.png')}
            ],
        }
    },
    methods: {
        changeView: function(id){
            this.count = id;
        }
    }
}
</script>

<style lang="scss" scoped>
    .amazing-apps{
        text-align: center;
        p{
            width: 570px;
            margin: auto;
            padding-bottom: 50px;
        }
        height: 200vh;
        background: linear-gradient(#fff, #FDFDFD, #F7F7F7);

        h1{
            padding-top: 100px;
        }
        
    }
    .nav{
        margin: auto;
        width: 700px;
    }
    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        li{
            display: flex;
            flex-direction: column;
            text-align: center;
            position: relative;
            bottom: 0px;
            cursor: pointer;
            font-weight: lighter;
            
            img{
                width: 45px;
                margin: auto;
                padding-bottom: 20px;
            }
        }
    }
    .apps{
        margin: auto;
        display: flex;
        justify-content: space-between;
        width: 1050px;
        padding-top: 80px;
    }
    .img{
        width: 700px;

        img{
            width: 100%;
        }
    }
    .info{
        text-align: left;
        margin-top: 40px;

        h1{
            padding-top: 10px;
        }
        p{
            width: 300px;
            font-weight: lighter;
        }
        img{
            width: 90px;
        }
        span{
            color: #0070C9;
            cursor: pointer;
        }
    }
</style>