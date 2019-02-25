<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="alter-phone">
            <p class="alter-p">当前已绑定手机号：<span>{{phone}}</span></p>
            <div class="alter-inp">
                <p>
                    <input type="text" placeholder="请输入新的手机号" v-model="newPhone">
                </p>
            </div>
            <div class="alter-inp">
                <p>
                    <input type="text" placeholder="请输入验证码">
                    <span id="alter-span">获取验证码</span>
                </p>
            </div>
            <button class="alter-but" type="button" @click="alertphone">确认修改手机号</button>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data(){
        return {
            title:{
                a:'修改手机号'
            },
            phone:1,
            newPhone:'',
            userInfo:{}
        }
    },
    mounted(){
        let data=JSON.parse(localStorage.getItem('userInfo'));
        this.userInfo=data
        this.phone=data.phone
    },
    methods:{
        alertphone(){
            //console.log(this.newPhone)
           if(!(/^1[34578]\d{9}$/.test(this.newPhone))){ 
                alert("手机号码有误，请重填");  
                return false; 
            }else{
                Axios.get('/getalertphone',{
                params:{
                    id:this.userInfo.id,
                    phone:this.newPhone
                }
                }).then(res=>{
                    console.log(res)
                    if(res.data.code===0){
                         alert("更新成功");  
                    }
                })
            } 
            
        }
    },
    computed:{
       
    }
}
</script>
<style scoped>
.alter-phone{
    width: 100%;height: 100%;
    background: #f2f2f2;
}
.alter-p{
    font-size: .16rem;
    text-indent: .2rem;
    margin:.2rem 0;
}
.alter-p span{
    color:#ff5757;
    font-size: .16rem;
}
.alter-inp{
    background: #fff;
    width: 100%;
    height:auto;
    padding: 0 .15rem;
}
.alter-inp p{
    width: 100%;
    height: .5rem;
    border-bottom:thin solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.alter-inp p input{
    width: 70%;
    border:0;
}
#alter-span{
    width: 1rem;height: .3rem;
    text-align: center;
    font-size: .16rem;
    background: #eee;
    color:black;
    line-height: .3rem;
    border-radius: .2rem;
}
.alter-but{
    width: 70%;height: .5rem;
    background: #fa9246;
    color:#fff;
    border:none;
    margin:.4rem 15%;
    border-radius: .1rem;
}
</style>