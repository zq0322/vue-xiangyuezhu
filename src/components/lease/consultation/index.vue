<template>
    <div class="wrap">
        <Header :title="title"></Header>
        <section>
            <h3>常见问题</h3>
            <ul v-for="(item,index) in dataList" :key="index" class="tem">
                <li>
                    <p>
                        <span>{{index+1}}.{{item.problem}}</span>
                         <span>〉</span>
                    </p>
                    <div class="answer">{{item.answer}}</div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import {getConsulTation} from 'api/home.js'

export default {
    data(){
        return {
            title:{
                a:'问题咨询'
            },
            dataList:[]
        }
    },
    mounted(){
        this.getDate()
    },
    methods:{
        getDate(){
            getConsulTation().then(res=>{
                //console.log(res)
                this.dataList=res
            })
        }
    }
}
</script>
<style scoped  lang="">
    .answer{
       display: none
    }
      section{
         background:  #F2F2F2;
         
      }
      h3{
           padding: 0 .15rem;
      }
      .tem li{
          line-height: 3;
          background: #fff;
          margin:.1rem 0;
      }
    .tem li p{
        display: flex;
        justify-content: space-between;
        padding:0 .15rem;
    }
</style>
