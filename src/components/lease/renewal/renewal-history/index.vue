<template>
    <div class="wrap">
        <mheader :title='title'></mheader>
        <section>
            <ul class="content">
                <li>
                    <p>起租日期:</p>
                    <span>2019-02-19</span>
                </li>
                <li>
                    <p>续租日期:</p>
                    <span>2019-02-19</span>
                </li>
                <li>
                    <p>租金到期:</p>
                    <span>2019-02-19</span>
                </li>
                <li>
                    <p>日租金:</p>
                    <span>6.1元/天</span>
                </li>
                <li>
                    <p>租期:</p>
                    <span>1年</span>
                </li>
                 <li>
                    <p>总租金:</p>
                    <span>2196元</span>
                </li>
                 <li>
                    <p>已缴租金:</p>
                    <span>549元</span>
                </li>
                 <li>
                    <p>租金方式:</p>
                    <span>按季支付</span>
                </li>
                 <li>
                    <p>赠送天数:</p>
                    <span>十天</span>
                </li>
                 <li>
                    <p>缴费日期:</p>
                    <span>2019-02-19</span>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import '@/common/font/iconfont.css'
import mheader from "@/components/header"
export default {
    data(){
        return {
            title:{
                a:'续租记录'
            }
        }
    },
    methods:{
        goback(){
             this.$router.push('/lease/management')
        }
    },
    components:{
        mheader
    }
}
</script>
<style scoped>

    section{
        background:  #F2F2F2;
    }
    .content{
       margin-top:.1rem;
       background: #fff;
       margin-bottom:.4rem;
    }
     .content li{
          padding: 0 .15rem;
         border-bottom: .01rem solid #ccc;
         display: flex;
         height: .4rem;
         align-items: center;
         justify-content: space-between;
     }
</style>