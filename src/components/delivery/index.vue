<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="delivery">
            <img :src="require('./img/QQ图片20190219204525.png')" alt="">
            <button class="delivery-but" type="button">我的家具家电</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title:{
                a:'配送安装中'
            }
        }
    }
}
</script>
<style scoped>
.delivery{
    width: 100%;height: 100%;
}
.delivery img{
    width: 100%;height:auto;
    display:block;
}
.delivery-but{
    width: 70%;height: .5rem;
    background: #fa9246;
    color:#fff;
    border:none;
    margin:.4rem 15%;
    border-radius: .1rem;
}
</style>