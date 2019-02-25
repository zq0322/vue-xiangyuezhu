<template>
    <div class="wrap">
        <Header :title="title"></Header>
        <div class="pay-success">
            <img :src="require('./img/QQ图片20190219203948.png')" alt="">
            <p style="text-align:center">感谢你的建议</p>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title:{
                a:'提交成功'
            }
        }
    }
}
</script>
<style scoped  lang="">
.pay-success{
    width: 100%;height: 100%;
}
.pay-success img{
    width: 100%;height:auto;
    display:block;
}
.paysuc-but{
    width: 70%;height: .5rem;
    background: #fa9246;
    color:#fff;
    border:none;
    margin:.4rem 15%;
    border-radius: .1rem;
}
</style>