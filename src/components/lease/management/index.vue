<template>
  <div class="wrap">
      <header>
           <span><i class="iconfont icon-xiangzuo" @click="goback"></i></span>
           <span class="leaseing">缴租金管理</span>
           <span @click="goLeasrHistory">缴租记录</span>
        </header>
    <section>
      <ul class="content">
        <li>
          <p>套餐:</p>
          <span>11.8/天</span>
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
          <p>租金到期:</p>
          <span>2019-02-19</span>
        </li>
      </ul>
      <el-select class="selects" v-model="value" placeholder="请选择支付周期/全部/整年/半年/季度">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="cont">
          <h3>合计: <b>2580</b>元</h3>
      </div>
     <div class="btn">
          <button type="button" @click='toLease'>缴租金</button>
     </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
         options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '整年'
        }, {
          value: '选项3',
          label: '半年'
        }, {
          value: '选项4',
          label: '季度'
        }],
        value:'',
       
    };
  },
  methods:{
    goback(){
       this.$router.go(-1)
    },
    goLeasrHistory(){
      this.$router.push('/lease/leaseHistory')
    },
    toLease(){
      this.$router.push('/Payment')
    }
  },
  components:{
   
  }
};
</script>
<style scoped  lang="">
section {
  background: #f2f2f2;
}
.content {
  margin-top: 0.1rem;
  background: #fff;
  margin-bottom: 0.4rem;
}
.content li {
  padding: 0 0.15rem;
  display: flex;
  height: 0.4rem;
  align-items: center;
  justify-content: space-between;
}
.selects{
    width: 100%;
  
}
.cont{
    width: 100%;
    height: .5rem;
    background: #fff;
    margin-top:.1rem ;
    line-height: .5rem;
    padding-left: .15rem;
}
.cont b{
    padding: 0 .1rem;
    color:red;
    font-size: .18rem;
}
.btn{
    width: 100%;
    text-align: center;
    margin-top: .2rem;
}
button{
    width: 2rem;
    height: .4rem;
    background: #f60;
    color:#fff;
    outline: 0;
    border:0;
    border-radius: .05rem;
    
}
</style>