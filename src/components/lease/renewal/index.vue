<template>
    <div class="wrap">
         <header>
           <span><i class="iconfont icon-xiangzuo" @click="goback"></i></span>
           <span class="leaseing">续租</span>
           <span @click="renewalHistory">续租记录</span>
        </header>
        <section>
           <ul class="renewal">
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
            </ul> 
            <div>
                 <el-select class="selects" v-model="value" placeholder="请选择支付周期/全部/整年/半年/季度">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    ></el-option>
                </el-select>
            </div>
            <div class="toLease">
                <button type="button" @click="toLease">缴租金</button>
            </div>
        </section>
    </div>
</template>

<script>
import '@/common/font/iconfont.css'

export default {
    data(){
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
       
        }
    },
    methods:{
        goback(){
             this.$router.go(-1)
        },
        renewalHistory(){
             this.$router.push('/lease/renewalHistory')
        },
        toLease(){
            this.$router.push('/lease/management')
        }
    },
    components:{
      
    }
}
</script>
<style scoped>
.selects{
    width: 100%;
    outline: none;
}
    section{
        background:  #F2F2F2;
    }
    .renewal{
        background: #fff;
        margin:.15rem 0;
    }
    .renewal li{
        line-height: .3rem;
        padding:0 .15rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .toLease{
        width:100%;
        height:.4rem;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top:.2rem;
    }
    .toLease button{
        width:75%;
        height:100%;
        background: #FB6E21;
        text-align: center;
        outline: none;
        border:0;
        border-radius: .1rem;
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