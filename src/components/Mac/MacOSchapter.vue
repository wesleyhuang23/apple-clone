<template>
    <div class="macos">
        <div class="img">
            <img src="./../../assets/apple-img/mac/macos_finder_icloud_large_2x.png"/> 
        </div>
        <div class="second-row">
            <div class="sierra">
                <h1>macOS Sierra</h1>
                <p>macOS is the operating system that powers everything you do on a Mac. macOS Sierra introduces Siri to Mac -- along with new ways to enjoy your photos, shop more securely online, and work omre seamlessly between devices.</p>
                <p>Learn more ></p>
            </div>
            <div class="icloud">
                <h1>iCloud</h1>
                <p>With iCloud, you always have the latest versions of your most important things -- like documents, apps, notes, and contacts -- on whatever device your're using.</p>
                <p>Learn more ></p>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    .macos{
        height: 90vh;
        background: linear-gradient(#fff, #FDFDFD, #F7F7F7);
    }
    .img{
        width: 630px;
        margin: auto;
        padding-bottom: 40px;
        padding-top: 90px;
        img{
            width: 100%;
        }
    }
    .second-row{
        width: 800px;
        margin: auto;
        display: flex;
        justify-content: space-between;

        p{
            width: 350px;
            font-weight: lighter;
            font-size: 18px;

            &:last-child{
                color: #0070C9;
                cursor: pointer;
            }
        }
    }
</style>