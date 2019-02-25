<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="alter-code">
            <div class="alterc-inp">
                <p>
                    <input type="password" placeholder="请输入原密码" v-model="pwd">
                </p>
            </div>
            <div class="alterc-inp">
                <p>
                    <input type="password" placeholder="6位以上新密码" v-model="npwd">
                </p>
            </div>
            <div class="alterc-inp">
                <p>
                    <input type="password" placeholder="确认新密码" v-model="npwd1">
                </p>
            </div>
            <button class="alterc-but" type="button" @click="alertcode">修改</button>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data(){
        return {
            title:{
                a:"修改密码",
            },
            userInfo:{},
            pass:'',
            pwd:'',
            npwd:'',
            npwd1:''
        }
    },
    mounted(){
         let data=JSON.parse(localStorage.getItem('userInfo'));
        this.userInfo=data
        this.pass=data.password
    },
    methods:{
        alertcode(){
            if(this.pwd!==this.pass){ 
                alert("原密码有误，请重填");  
                return false; 
            }else{
                
                if(/^[\w_-]{6,16}$/.test(this.npwd)){
                     if(this.npwd===this.npwd1){
                     Axios.get('/getalertcode',{
                    params:{
                        id:this.userInfo.id,
                        password:Number(this.npwd)
                    }
                    }).then(res=>{
                        console.log(res)
                        if(res.data.code===0){
                            alert("更新成功");  
                        }
                    })
                }else{
                    alert('密码格式不正确')
                }
                }
               
               
            } 
        }
    }
}
</script>
<style scoped>
.alter-code{
    width: 100%;height: 100%;
    background: #f2f2f2;
    padding:.15rem 0;
}
.alterc-inp{
    background: #fff;
    width: 100%;
    height:auto;
    padding: 0 .15rem;
}
.alterc-inp p{
    width: 100%;
    height: .5rem;
    border-bottom:thin solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.alterc-inp p input{
    width: 70%;
    border:0;
}
.alterc-but{
    width: 70%;height: .5rem;
    background: #fa9246;
    color:#fff;
    border:none;
    margin:.4rem 15%;
    border-radius: .1rem;
}
</style>