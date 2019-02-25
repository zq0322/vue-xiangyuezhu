<template>
    <div>
        <mheader :title="title"></mheader>
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
import mheader from "comp/header"
export default {
    data(){
        return {
            title:{
                a:"退租"
            }
        }
    },
    components:{
        mheader
    }
}
</script>
<style scoped  lang="css">
    .surrender{
        width: 100%;
        margin-top: .1rem;
    }
    .surrender p{
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