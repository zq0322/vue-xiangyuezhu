<template>
  
    <footer>
      <ul>
        <li>
          <router-link to="/team/home" tag="p">
            <span class="icon iconfont myicon">&#xe67e;</span>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/team/statement" tag="p">
            <span class="icon iconfont myicon">&#xe600;</span>
            <span>结算单</span>
          </router-link>
        </li>
        <li>
          <router-link to="/team/mine" tag="p">
            <span class="icon iconfont myicon">&#xe64f;</span>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </footer>
  
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped  lang="css">
  .router-link-active{
    color:#FB6E21;
  }
</style>