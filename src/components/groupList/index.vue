<template>
  <dl class="group-item" >
    <dt @click="clickGroup(item)">
      <img :src="item.photos" alt>
    </dt>
    <dd>
      <p class="name">{{item.shortName}}</p>
      <p class="title">{{item.subTitle}}</p>
      <p class="price">
        <span>￥{{item.dayRent}}/天</span>
        <span class="button" @click="addShop(item)">加入结算中</span>
      </p>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  },
  methods: {
    addShop(item) {
      this.adds(item);
    },
    adds(item) {
        const {state,commit}=this.$store
          if(item.count){
            item.count++
          } else {
            item.count=1
          }
         commit("add",{...state.data,[item.id]:item})
         //console.log(state.data)
         this.isLogin()
    },
    isLogin(){
           // console.log(this.$cookie.get('token'))
        if(!this.$cookie.get('token')){
          this.$confirm('此操作需要前去登陆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$router.push({
                path:'mine/login',
                query:{
                    route:'/home'
                }
            })
          this.$message({
            type: 'success',
            message: '前去登陆!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消登录'
          });          
        });
            }
    },
    clickGroup(item) {
        console.log(1)
      this.$router.push({
        name: "Detail",
        params: {
          data: item
        }
      });
    }
  }
};
</script>
<style scoped  lang="css">
.group-item {
  width: 100%;
  height: 1rem;
  padding: 0.1rem;
  display: flex;
}
.group-item dt {
  width: 0.8rem;
  height: 0.8rem;
}
.group-item dt img {
  width: 100%;
  height: 100%;
}
.group-item dd {
  flex: 1;
  margin-left: 0.2rem;
}
.name {
  width: 100%;
  height: 0.25rem;
  line-height: 0.25rem;
}
.title {
  width: 100%;
  line-height: 0.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.price {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  padding: 0.02rem 0.03rem;
  background: lightcoral;
  border-radius: 0.01rem;
}
.el-message-box{
  position: relative !important;
  top:50%;
}
</style>