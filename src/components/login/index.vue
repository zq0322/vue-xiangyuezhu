/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-02-22 10:52:00 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2019-02-22 10:52:00 
 */

<template>
<div class="wrap">
    <section style="padding-top:50px;padding-right:40px">
        <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </el-row>
    </section>
</div>
</template>

<script>
import Axios from 'axios';
    export default {
        methods: {
            login () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.goLogin()
                    }
                    else {
                        return false
                    }
                })
            },
            goLogin(){
                Axios.get('/getLoginInfo',{
                    params:{
                        username:this.user.name,
                         password:this.user.pass
                    }
                }).then(res=>{
                    //console.log(res.data.data)
                    if(res.data.code===0){
                        this.$notify({
                            type: 'success',
                            message: '欢迎你,' + this.user.name + '!',
                            duration: 3000 
                        })
                         window.localStorage.setItem('userInfo',JSON.stringify(res.data.data))
                        this.$cookie.set('token',res.data.token)
                            this.$router.replace('/team/home') 
                    }else{
                        this.$message({
                            type: 'error',
                            message: '用户名或密码错误',
                            showClose: true
                        })
                    }
                })
            }
        },
        mounted(){
            //console.log(this.$route.query.route)
        },
        data () {
            return {
                user: {},
                title:{
                    a:'登录'
                },
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>
