<template>
  <div class="wrap">
    <section style="padding-top:20px">
      <div class="box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="昵称" prop="user">
            <el-input v-model="ruleForm.user"></el-input>
          </el-form-item>
          <!-- <el-form-item label="头像" prop="avator" >
      <el-input type="file" @change='add_img' ></el-input>
          </el-form-item>-->
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>

            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }

        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      activeName: "second",
      imgs: [],
      imgData: {
        accept: "image/gif, image/jpeg, image/png, image/jpg"
      },
      ruleForm: {
        phone: "",
        user: "",
        pass: "",
        checkPass: ""
      },

      rules: {
        user: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },

          { min: 11, max: 11, message: "输入正确手机号", trigger: "blur" }
        ],

        pass: [{ required: true, validator: validatePass, trigger: "blur" }],

        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm.user);
          this._getRegister();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    _getRegister() {
      Axios.get("/getRegister", {
        params: {
          username: this.ruleForm.user,
          password: this.ruleForm.pass,
          phone: this.ruleForm.phone
        }
      }).then(res => {
        console.log(res);
        if (res.data.code === 0) {
          this.$message({
            type: "success",
            message: "注册成功"
          });
          this.$router.push("/team/mine/login");
        } else {
          this.$message({
            type: "success",
            message: "注册失败"
          });
        }
      });
    },
    add_img(event) {
      console.log(1);
      let reader = new FileReader();
      let img1 = event.target.files[0];
      console.log(img1);
      let type = img1.type; //文件的类型，判断是否是图片
      let size = img1.size; //文件的大小，判断图片的大小
      if (this.imgData.accept.indexOf(type) == -1) {
        alert("请选择我们支持的图片格式！");
        return false;
      }
      if (size > 3145728) {
        alert("请选择3M以内的图片！");
        return false;
      }
      var uri = "";
      let form = new FormData();
      form.append("file", img1, img1.name);
      console.log(form.getAll("file"));

      Axios.post(
        "/file/upload",
        { id: 1 },
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      )
        .then(response => {
          console.log(response);
          uri = response.data.url;
          reader.readAsDataURL(img1);
          var that = this;
          reader.onloadend = function() {
            that.imgs.push(uri);
          };
        })
        .catch(error => {
          alert("上传图片出错！");
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="css" scoped>
.wrap {
  width: 100%;
  height: 100%;
}
section {
  flex: 1;
}
.box {
  width: 100%;
  height: auto;
  padding-right: 0.35rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: center;
}
</style>