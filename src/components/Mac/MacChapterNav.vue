<template>
    <div class="mac-chapter-nav">
        <ul>
            <li><img src="./../../assets/apple-img/mac/macbook_large.svg"/>MacBook</li>
            <li><img src="./../../assets/apple-img/mac/macbookair_large.svg"/>MacBook Air</li>
            <li><img src="./../../assets/apple-img/mac/macbookpro_large.svg"/>MacBook Pro<p>New</p></li>
            <li><img src="./../../assets/apple-img/mac/imac_large.svg"/>iMac</li>
            <li><img src="./../../assets/apple-img/mac/macpro_large.svg"/>Mac Pro</li>
            <li><img src="./../../assets/apple-img/mac/macmini_large.svg"/>Mac mini</li>
            <li><img src="./../../assets/apple-img/mac/mac_acc_large.svg"/>Accessories</li>
            <li><img src="./../../assets/apple-img/mac/mac_osx_large.svg"/>macOS Sierra</li>
            <li><img src="./../../assets/apple-img/mac/mac_comp_large.svg"/>Compare</li>
        </ul>
    </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.mac-chapter-nav{
    background-color: #F6F6F6;
}
ul{
    list-style: none;
    padding-top: 55px;
    display: flex;
    width: 890px;
    margin: auto;
    padding-bottom: 10px;

    li{
        display: flex;
        flex-direction: column;
        text-align: center;
        width: (100% / 9);
        font-size: 11px;
        font-weight: lighter;
        cursor: pointer;

        &:hover{
            color: #3B91D5;
        }

        p{
            margin: 0px;
            color: #EC8846;
        }

        img{
            margin-bottom: 5px;
        }
    }
}
</style>