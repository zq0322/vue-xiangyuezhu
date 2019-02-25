<template>
  <div class="wrap">
    <Header :title="title"></Header>
    <section>
      <div class="text" style="position:relative;">
        <textarea
          class="textarea"
          onfocus="document.getElementById('note').style.display='none'"
          onblur="if(value=='')document.getElementById('note').style.display='block'"
        ></textarea>
        <div id="note" class="note">
          <font color="#777">我们盼着您给我们些建议</font>
        </div>
       
      </div>
       <p class="phone">
          <input type="text" placeholder="请输入手机号或者邮箱">
          <button type="button">提交</button>
         </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        a: "信息反馈"
      }
    };
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
  height: 1.5rem;
  position: absolute;
  background: none;
  z-index: 9;
 background: #fff;
}
.note {
  position: absolute;
   z-index: 999;
  top:.15rem;
  line-height: 20px;
  padding: 3px 5px;
}
.phone{
    position: absolute;
    top:2.5rem;
   width: 100%;
   text-align: center;
}
.phone input{
    width: 100%;
    height: .35rem;
    background: #fff;
    border:0;
}
.phone button{
    margin-top: .3rem;
    width: 2rem;
    height: .35rem;
    background: #f60;
    color:#fff;
    border:0;
    outline: none;
    border-radius: .05rem;
}
</style>