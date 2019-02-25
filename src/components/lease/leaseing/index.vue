<template>
  <div class="wrap">
 <Header :title="title"></Header>
    <section>
      <div class="easeholder">
        <h3>租赁人信息</h3>
        <ul class="msg">
          <li>
            <p>租赁人:</p>
            <span>张三</span>
          </li>
          <li>
            <p>手机号码:</p>
            <span>134567866554</span>
          </li>
          <li>
            <p>身份证号:</p>
            <span>142563288882004</span>
          </li>
          <li>
            <p>地址:</p>
            <span>小区1 9-2-1102</span>
          </li>
        </ul>
      </div>
      <div class="preferential">
        <h3>享悦猪八件套</h3>
        <!-- 八件套 -->
        <ul class="eight-piece-suit">
          <li>
              <i class="iconfont icon-niao-"></i>
              <p>空调</p>
          </li>
          <li>
              <i class="iconfont icon-niao-"></i>
              <p>洗衣机</p>
          </li>
          <li>
              <i class="iconfont icon-niao-"></i>
              <p>热水器</p>
          </li>
          <li>
            <i class="iconfont icon-niao-"></i>
            <p>电冰箱</p>
          </li>
          <li>
            <i class="iconfont icon-niao-"></i>
            <p>衣柜</p>
          </li>
          <li>
            <i class="iconfont icon-niao-"></i>
            <p>床</p>
          </li>
        </ul>
        <div class="leaseInfo">
            <ul class="lease">
                <li>
                    <p>日租金:</p>
                    <span>11.8/天</span>
                </li>
                <li>
                    <p>租期:</p>
                    <span>1年</span>
                </li>
                <li>
                    <p>总租金:</p>
                    <span>2448元</span>
                </li>
                <li>
                    <p>押金:</p>
                    <span>2500元</span>
                </li>
                <li>
                    <p>已缴租金:</p>
                    <span>612元</span>
                </li>
                <li>
                    <p>支付周期:</p>
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
                    <p>起租结束:</p>
                    <span>2019-02-19</span>
                </li>
                <li>
                    <p>租金到期:</p>
                    <span>2019-02-19</span>
                </li>
                <li>
                    <p>缴费到期:</p>
                    <span>2019-02-19</span>
                </li>
            </ul>
        </div>
      </div>
      <div class="operation">
        <button type="button" class="renewal" @click="renewal">续租器</button>
        <button type='button' class="repair" @click="repair">报修</button>
      </div>
    </section>
  </div>
</template>

<script>
import "@/common/font/iconfont.css";

export default {
  data() {
    return {
      title:{
        a:'租约进行中'
      }
    };
  },
  components:{
   
  },
  methods:{
    renewal(){
      this.$router.push('/lease/renewal')
    },
    repair(){
      this.$router.push('/lease/repair')
    }
  }
};
</script>
<style scoped >



section{
        background:  #F2F2F2;
    }

h3{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    padding:0 .15rem;
    border-top:.01rem solid #999;
        border-bottom:.01rem solid #999;
    color:#666;
}
.msg{
    padding:0 .15rem;
    background: #fff;
    line-height: 2;
    color:#666;
}
.msg li{
    display: flex;
    justify-content: space-between;
}
.eight-piece-suit{
    display: flex;
    background: #fff;
    justify-content: space-around;
    height: .8rem;
    align-items: center;
    border-bottom:.01rem solid #999;
}
.eight-piece-suit li{
    text-align: center;
}
.eight-piece-suit li p{
    font-size: .12rem;
    color:#666;
}
.eight-piece-suit li .iconfont{
    font-size: .3rem;
}
.leaseInfo{
    margin-top:.1rem;
    border-top:.01rem solid #999;
    background: #fff;
    padding: 0 .15rem;
    border-bottom: .01rem solid #ccc;
}
.lease li{
    display: flex;
      line-height: 2;
    justify-content: space-between;
}
.lease li p{
    color:#666;
}
.operation{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.operation button{
   width: 1.8rem;
  height: .3rem;
  color:#fff;
  border:none;
  outline: 0;
  border-radius: .05rem;
}
.renewal{
  background: #f60;
  margin:.1rem;
}
.repair{
  background: green;
}
</style>