<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="pay-success">
            <img :src="require('./img/QQ图片20190219203948.png')" alt="">
        </div>
         <div class="surrender">
            <p><b>套餐</b><span>11.8/天</span></p>
            <p><b>申请日期</b><span>2020/1/1</span></p>
            <p><b>联系人</b><span>刘佳旭</span></p>
            <p><b>联系电话</b><span>17614217719</span></p>
            <p><b>退租状态</b><span>退租完毕/正在退返押金</span></p>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            title:{
                a:"申请成功",
            }
        }
    }
}
</script>
<style scoped>
.pay-success{
    width: 100%;
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
.surrender{
        width: 100%;
        margin-top: .1rem;
    }
    .surrender p{
        display: flex;
        height: .4rem;
        line-height: .4rem;
        padding: 0 .2rem;
        border-bottom: 1px solid #ccc;
    }
    .surrender p b{
        display: inline-block;
        width: 1rem;
    }
    .surrender p span{
        margin: 0 .3rem;
    }
</style>