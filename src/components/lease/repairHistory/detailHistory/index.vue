<template>
    <div class="wrap">
         <Header :title="title"/>
         <section>
             
            <ul class="sec-box">
                <li>
                    <span>报修物品:</span>
                    <span>空调</span>
                </li>
                <li>
                    <span>报修描述:</span>
                    <span>空调不制冷，外部有裂痕W</span>
                </li>
                <li>
                    <span>申请日期:</span>
                    <span>2017年2月21日</span>
                </li>
            </ul>

         </section>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title:{
                a:'报修记录详情'
            }
        }
    },
    methods:{
        
    }
}
</script>
<style scoped  lang="">
.wrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
}
    section {
        flex:1;
  background: #f2f2f2;
}
.sec-box{
    margin-top:.15rem;
    background: #fff;
}
.sec-box li{
    padding:0 .15rem;
    line-height: .4rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
</style>
