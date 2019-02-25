<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="pay-success">
            <img :src="require('./img/QQ图片20190219203948.png')" alt="">
            <button class="paysuc-but" type="button" @click="next">下一步</button>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            title:{
                a:'支付成功'
            }
        }
    },
    methods:{
        next(){
            let rou=this.$route.query.route
            if(rou!==undefined){
                 this.$router.replace('/'+rou)
            }else{
                 this.$router.push('/paycycle')
            }
           
        }
    }
}
</script>
<style scoped>
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