<template>
  <div class="home">
    <Header :title="title"/>
    <section>
      <!-- 轮播图 -->
      <Carousel :carouselList="carouselList"/>
      <div class="sec-wrop">
        <ul class="wrop-top">
          <li
            :class="num===index?'current':''"
            @click="clickHandle(item,index)"
            v-for="(item,index) of productList"
            :key="index"
          >{{item.name}}</li>
        </ul>
        <div class="wrop-cont">
          <!-- 热门套餐组件 -->
          <Combo v-if="num===0" :comboList="comboList"></Combo>
          <!-- 自选组合组件 -->
          <Group v-if="num===1" :groupList="groupList"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "comp/carousel/index"; //轮播图
import Combo from "comp/combo/index"; //热门套餐组件
import Group from "comp/group/index"; //自选组合组件

import { getCarouselList, getComboList } from "api/home.js";
export default {
  data() {
    return {
      title: {
        a: "享悦猪"
      },
      carouselList: [],
      productList: [],
      comboList: [],
      groupList: [],
      recommendList: [],
      num: 0,
      data: []
    };
  },
  created() {
    this._getCarouselList();
    this._getComboList();
  },
  methods: {
    _getCarouselList() {
      getCarouselList().then(res => {
        this.carouselList = res.data.currentUser;
      });
    },
    _getComboList() {
      getComboList().then(res => {
        //console.log(res)
        this.productList = res;
        this.comboList = this.productList[0].currentUser;
      });
    },
    clickHandle(item, index) {
      if (item.name === "热门套餐") {
        this.comboList = item.currentUser;
      } else if (item.name === "自选组合") {
        this.groupList = item.currentUser;
      } else {
        this.recommendList = item.currentUser;
      }
      this.num = index;
    },
    isLogin() {}
  },
  components: {
    Carousel,

    Combo,
    Group
  }
};
</script>
<style scoped  lang="css">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
}
.sec-wrop {
  width: 100%;
  height: auto;
}
.wrop-top {
  width: 100%;
  height: 0.4rem;
  display: flex;
}
.wrop-top li {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrop-top .current {
  border-bottom: 0.02rem solid lightcoral;
}
.wrop-cont {
  width: 100%;
  height: auto;
}
</style>