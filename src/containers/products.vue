<template>
  <div class="product">
    <Header :title="title"/>
    <section>
      <div class="sec-top"><img src="../assets/img/logo.png" alt=""></div>
      <div class="sec-name">什么是享悦猪</div>
      <div class="sec-title">
        <p>通过乐开花提供的家具家电套餐达到公寓式条件，实现公租房拎包入住的水平。</p>
        <p>用户使用共享家具家电的方式，开启“享悦猪”共享经济模式。</p>
        <p>用户通过乐开花服务号的 “我要租” 页面进行共享家具家电。</p>
        <p>选择家具家电含有自选组合类型与套餐类型，套餐类型含所有家具家电，组合性套餐可以根据自己缺少的家具家电进行选择。</p>       
      </div>
      <div class="sec-name">享悦猪优势</div>
      <div class="sec-img">
        <img src="../assets/img/pic.png" alt="">
      </div>
      <div class="sec-img">
        <img src="../assets/img/pic2.png" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import Header from 'comp/header'
export default {
  data(){
    return {
        title:{
          a:'产品介绍'
        }
    }
  },
  components:{
    Header
  }
}
</script>
<style scoped  lang="css">
    .product{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
        background: #f2f2f2;
    }
    section{
      flex:1;
    }
    .sec-top{
      width:100%;
      height:auto;
    }
    .sec-top img{
      width:100%;
      height:auto;
    }
    .sec-name{
      width:100%;
      height:.2rem;
      text-align: center;
      color:#B89144;
      font-size:.2rem;
      margin-top:.2rem;
      margin-bottom: .3rem;
    }
    .sec-title{
      width:100%;
      height:2.2rem;
      padding:0 .28rem 0 .28rem;
      background: #f2f2f2;
    }
    .sec-title p{
      font-size:.12rem;
      text-indent: .24rem;
      line-height: .24rem;
    }
    .sec-img{
      width:100%;
      height:auto;
    }
    .sec-img img{
      width:100%;
      height:auto;
    }
</style>