<template>
  <div class="mine-wrap">
    <div class="mine-box">
      <p style="color:#fff">
        <i class="iconfont icon-xiangzuo"></i>
        <i class="iconfont icon-naoling"></i>
      </p>
      <h6>
        <b>
          <img v-show="msg" :src="avator" alt>
          <i class="iconfont icon-touxiang"></i>
        </b>
      </h6>
      <p class="mine-login" v-show="ishow">
        <router-link @click="login" tag="b" to="/team/mine/login">登录</router-link>
        <router-link @click="register" tag="b" to="/team/mine/register">注册</router-link>
      </p>
    </div>
    <div class="tab">
      <router-view></router-view>
    </div>
    <div v-show="msg" class="mine-ul">
      <ul v-for="(item,index) in userInfo" :key="index">
        <li>
          <i class="iconfont icon-huli-"></i>
          <b>{{item.username}}</b>
        </li>
        <li class="li" @click="alterphone">
          <i class="iconfont icon-huli-"></i>
          <b>{{item.phone}}</b>
        </li>
        <li @click="revision">
          <i class="iconfont icon-huli-"></i>
          <b>修改密码</b>
        </li>
        <li @click="lease">
          <i class="iconfont icon-huli-"></i>
          <b>我的租约</b>
        </li>
        <li @click="tomsg">
          <i class="iconfont icon-huli-"></i>
          <b>信息反馈</b>
        </li>
        <li>
          <i class="iconfont icon-huli-"></i>
          <el-button class="el-btn" type="text" @click="open7">退出登录</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      ishow: true,
      msg: false,
      userInfo: [],
      avator:""
    };
  },
  mounted() {
    this.isflag();
    let data = JSON.parse(localStorage.getItem("userInfo"));
    if(this.avator===null){
      this.avator ="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1992781492,3794471700&fm=26&gp=0.jpg";
    }else{
      this.avator= data.avator
    }
    this.userInfo.push(data);
  },
  methods: {
    isflag() {
      let token = this.$cookie.get("token");
      if (token) {
        this.msg = true;
        this.ishow = false;
      } else {
        this.msg = false;
      }
    },
    alterphone() {
      this.$router.push("/alterphone");
    },
    lease() {
      this.$router.push("/lease/leaseing");
    },
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    revision() {
      this.$router.push("/altercode");
    },
    tomsg() {
      this.$router.push("/lease/feedback");
    },
    open7() {
      let flag = this.flag;
      this.$confirm("你确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.ishow = true;
          this.msg = false;
          this.$cookie.delete("token");
          this.$message({
            type: "success",
            message: "退出成功"
          });
        })
        .catch(() => {
          this.ishow = false;
          this.$message({
            type: "info",
            message: "未退出"
          });
        });
    }
  }
};
</script>
<style>
.tab {
  width: 100%;
  height: auto;
}
.login {
  margin-top: 0.5rem;
}
.mine-login {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: center;
}
.mine-login b {
  display: inline-block;
  width: 50%;
  font-weight: 400;
  display: flex;
  justify-content: center;
  color: #fff;
}
.mine-wrap {
  overflow: hidden;
}
.mine-wrap p {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
}
.mine-box {
  background: #fb6e21;
}
.mine-box h6 b {
  width: 1.2rem;
  height: 1.2rem;
  background: #ccc;
  position: relative;
  right: 0.2rem;
}
.mine-box h6 b img {
  position: relative;
  right: 0.2rem;
  top: -0.2rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
}
.mine-wrap p i {
  font-size: 0.2rem;
}
.mine-wrap h6 {
  width: 50%;
  position: relative;
  left: 35%;
  margin: 0 0.2rem;
  padding: 0.1rem 0;
}
.mine-wrap h6 i {
  font-size: 0.4rem;
}
.mine-wrap h6 b {
  display: inline-block;

  padding: 0.2rem;
  background: #ccc;
  border-radius: 50%;
  text-align: center;
}
.mine-ul {
  line-height: 3;
  padding: 0 0.1rem;
}
.mine-ul .li {
  border-bottom: 10px solid #eee;
}
.mine-ul i {
  margin: 0 0.1rem;
}
.el-btn {
  color: #000;
  font-weight: 600;
}
</style>