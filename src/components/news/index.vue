<template>
    <div class="wrap">
         <Header :title="title"></Header>
        <div class="news">
            <div class="all-news">
                <p>尊敬的用户，您好，您正在使用的共享家具家电还有7天到期缴费，请及时交租金。</p>
                <img src="http://img.zcool.cn/community/016aa0582ed153a84a0e282b8b56b5.jpg@1280w_1l_2o_100sh.png" alt="">
                <ol>
                    <li><span>套餐：安居六件套   6.8/天</span></li>
                    <li><span>起租日期：2017年10月20日</span></li>
                    <li><span>租期结束：2018年10月20日</span> </li>
                       
                    <li><span>租金到期：2017年11月20日</span>
                        <button class="news-but" type="button" @click="goLease">去缴租</button>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            imgs:'http://img.zcool.cn/community/016aa0582ed153a84a0e282b8b56b5.jpg@1280w_1l_2o_100sh.png',
            title:{
                a:'消息',
            }
        }
    },
    methods:{
        goLease(){
            this.$router.push('/lease/Management')
        }
    }
}
</script>
<style scoped  lang="">
.news{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    padding:.15rem;
}
.all-news{
    width: 100%;
    height: auto;
    background: #fff;
    padding: .15rem;
}
.all-news img{
    width: 100%;height: auto;
    display: block;
    margin:.2rem 0;
}
ol li{
    line-height: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.news-but{
    background: #fa9246;
    color:#fff;
    border:none;
    padding:.05rem .15rem;
    border-radius: .04rem;
}
</style>