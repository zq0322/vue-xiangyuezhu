<template>
  <div class="combo">
    <div v-for="(item,index) of comboList" :key="index">
      <div class="item">
        <!-- 热门套餐列表 -->
        <ComboList :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import ComboList from 'comp/comboList/index'
export default {
  props: {
    comboList: Array
  },
  data() {
    return {};
  },
  components:{
    ComboList
  }
};
</script>
<style scoped  lang="css">
.combo {
  width: 100%;
  height: auto;
}
.item {
  width: 100%;
  height: 2.5rem;
  padding: 0.15rem;
}

</style>