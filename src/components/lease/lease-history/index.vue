<template>
    <div class="wrap">
         <Header :title="title"></Header>
        <section>
            <ul class="content">
                <li>
                    <p>套餐:</p>
                    <span>11.8/天</span>
                </li>
                <li>
                    <p>租期:</p>
                    <span>1年</span>
                </li>
                <li>
                    <p>支付租金:<b>登录</b></p>
                    <span><b>注册</b>587元</span>
                </li>
                <li>
                    <p>租金:</p>
                    <span>按季支付</span>
                </li>
                <li>
                    <p>赠送天数:</p>
                    <span>十天</span>
                </li>
                <li>
                    <p>起租日期:</p>
                    <span>2019-02-19</span>
                </li>
                 <li>
                    <p>租期结束:</p>
                    <span>2019-02-19</span>
                </li>
                 <li>
                    <p>租金日期:</p>
                    <span>2019-02-19</span>
                </li>
                 <li>
                    <p>缴租日期:</p>
                    <span>2019-02-19</span>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>

import '@/common/font/iconfont.css'
export default {
    data(){
        return {
            title:{
                a:'租缴记录'
            }
        }
    },
    methods:{
        
    },
    components:{
       
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