<template>
    <div class="detail">
        <Header :title="title"/>
        <section>
            <div class="sec-detail">
                <dl>
                    <dt>
                        <img :src="detailData.photos" alt="">
                    </dt>
                    <dd>
                        <p class="name">
                            <span>{{detailData.shortName}}</span>
                            <span>{{detailData.subTitle}}</span>
                        </p>
                        <p class="button"><span>加入结算单</span></p>
                    </dd>
                </dl>
            </div>
        </section>
    </div>
</template>

<script>
import Header from 'comp/header/index'
export default {
    data(){
        return {
            title:{
                a:'商品详情',
            },
            detailData:{}
        }
    },
    mounted(){
        this.detailData = this.$route.params.data
    },
    components:{
        Header
    }
}
</script>
<style scoped  lang="css">
    .detail{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
    }
    section{
        flex:1;
    }
    .sec-detail{
        width:100%;
        height:auto;
    }
    .sec-detail dl{
        width:100%;
        height:3.6rem;
    }
    .sec-detail dl dt{
        width:100%;
        height:3rem;
    }
    .sec-detail dl dt img{
        width:100%;
        height:100%;
    }
    .sec-detail dl dd{
        width:100%;
        height:.6rem;
        display:flex;
        padding:0 .15rem;
    }
    .name{
        flex:1;
        display:flex;
        flex-direction: column;
    }
    .name span{
        display:block;
        line-height: .3rem;
    }
    .name span:nth-of-type(2){
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
    .button{
        flex:1;
        display: flex;
        justify-content:center;
        align-items: center;
        
    }
    .button span{
        padding:.02rem .03rem;
        background: lightcoral;
    }
</style>