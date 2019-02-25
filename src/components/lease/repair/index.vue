<template>
  <div class="wrap">
   <header>
           <span><i class="iconfont icon-xiangzuo" @click="goback"></i></span>
           <span class="leaseing">报修</span>
           <span @click="goHistory">报修记录</span>
    </header>
    <section>
      <el-select class="selects" v-model="value" placeholder="请选择需要报修的物品">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="fullup">
        <h3 style=" padding: 0 .15rem;line-height:2;">请上传图片</h3>
        <p style="display:flex;background:#fff;">
          <span style="line-height:6;">物品大图</span>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </p>
        <p style="display:flex;background:#fff;">
          <span style="line-height:6;">细节损坏处</span>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </p>
      </div>
      <div class="text" style="position:relative;">
        <textarea
          class="textarea"
          onfocus="document.getElementById('note').style.display='none'"
          onblur="if(value=='')document.getElementById('note').style.display='block'"
        ></textarea>
        <div id="note" class="note">
          <font color="#777">请描述保修问题，至少输入20个字</font>
        </div>
        <div class="msg">
          <input type="text" placeholder="请输入联系人" ref="pepo">
          <hr>
          <input type="text" placeholder="请输入联系电话" ref="pepo">
          <p style="background:pink;line-height:2;">请电话保持畅通</p>
          <!-- <button type='button' @click="sub">提交</button> -->
          <el-button type="text" @click="open2">提交</el-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        a: "报修",
        b: "报修记录"
      },
      options: [
        {
          value: "选项1",
          label: "空调"
        },
        {
          value: "选项2",
          label: "电视剧"
        },
        {
          value: "选项3",
          label: "洗衣机"
        },
        {
          value: "选项4",
          label: "电冰箱"
        }
      ],
      value: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    open2() {
      this.$confirm("您是否确定报修?", "提醒", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功!"
          });

        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消提交"
          });
        });
    },
    goHistory(){
        this.$router.push('/lease/repairHistory')
    },
    goback(){
         this.$router.go(-1)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped  lang="">
section {
  background: #f2f2f2;
}
textarea {
  margin: 0.1rem 0;
  width: 100%;
  height: 1rem;
  position: relative;
  background: none;
  z-index: 9;
  background: #fff;
}
.note {
  position: absolute;
  z-index: 999;
  top: 0.15rem;
  line-height: 20px;
  padding: 3px 5px;
}
.selects {
  width: 100%;
  margin: 0.1rem;
  position: relative;
  left: -0.1rem;
  line-height: 4;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.fullup p {
  padding: 0 0.15rem;
  border-bottom: 0.01rem solid #ccc;
}
.msg {
  text-align: center;
}
.msg input {
  width: 100%;
  height: 0.35rem;
  border: 0;
  outline: none;
  background: #fff;
}
.msg button {
  width: 2.5rem;
  height: 0.35rem;
  background: #f60;
  color: #fff;
  margin: 0.2rem 0;
  border-radius: 0.05rem;
  outline: none;
  border: 0;
}
</style>