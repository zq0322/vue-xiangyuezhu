<template>
    <dl class="item-dl">
          <dt>
            <img :src="item.PicFile" alt>
          </dt>
          <dd>
            <p class="name">{{item.Name}}</p>
            <p class="ption">{{item.Description}}</p>
            <div>
              <p class="left">
                <span>￥{{item.PreRent}}/天</span>
                <span>日租金</span>
              </p>
              <p class="right">
                <span @click="addShopping(item)">加入结算清单</span>
              </p>
            </div>
          </dd>
        </dl>
</template>

<script>
export default {
    props:{
        item:Object 
    },
    data(){
        return {

        }
    },
    methods: {
      addShopping(item){
        this.add(item)
      },
      add(item){
        const {state,commit}=this.$store
          if(item.count){
            item.count++
          } else {
            item.count=1
          }
         commit("updata",{...state.lists,[item.Name]:item})
         this.isLogin()
      },
       isLogin(){
            //console.log(this.$cookie.get('token'))
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
    },
}
</script>
<style scoped  lang="css">
.item-dl {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.item-dl dt {
  width: 100%;
  height: 1.3rem;
}
.item-dl dt img {
  width: 100%;
  height: 100%;
}
.name {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  font-weight: bold;
}
.ption {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  line-height: .3rem;
}
.item-dl dd div {
  width: 100%;
  height: .5rem;
  margin-top:.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left{
    flex:1;
    display: flex;
    flex-direction:column;
}
.left span{
    display:block;
    line-height: .25rem;
}
.right{
    flex:1;
    display:flex;
    justify-content: flex-end;
    align-items: center;
}
.right span{
    padding:.02rem .03rem;
    background: lightcoral;
    border-radius: .01rem;
}
</style>