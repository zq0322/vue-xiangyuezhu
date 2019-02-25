/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-02-22 11:21:11 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-02-23 08:56:32
 */
<template>
  <div class="wrap">
    <Header :title="title"></Header>
    <section>
      <div v-for="(item,index) of data" :key="index">
        <dl class="group-item">
          <div class="radio">
            <input type="checkbox" ref="input" :checked="item.checked" @click="eventCheck(index)">
          </div>
          <dt>
            <img :src="item.photos" alt>
          </dt>
          <dd>
            <div class="left">
              <p class="span">
                <span>{{item.Name}}</span>
              </p>
              <p>
                <span>￥{{item.dayRent}}/天</span>
              </p>
            </div>
          </dd>
          <dd class="end">
            <p>
              <b @click="minusb(item)">-</b>
              <span>{{item.count}}</span>
              <b @click="addb(item)">+</b>
            </p>
          </dd>
        </dl>
      </div>
      <div v-for="(item,index) of lists" :key="index">
        <dl class="group-item">
          <div class="radio">
            <input type="checkbox" ref="input" :checked="item.checked" @click="eventChecked(index)">
          </div>
          <dt>
            <img :src="item.PicFile" alt>
          </dt>
          <dd>
            <div class="left">
              <p class="span">
                <span>{{item.Name}}</span>
              </p>
              <p>
                <span>￥{{item.PreRent}}/天</span>
              </p>
            </div>
          </dd>
          <dd class="end">
            <p>
              <b @click="minusB(item)">-</b>
              <span>{{item.count}}</span>
              <b @click="addB(item)">+</b>
            </p>
          </dd>
        </dl>
      </div>
    </section>
    <footer class="footer">
      <p>价钱：
        ￥<b>{{(initPirce+Pirce).toFixed(2)}}</b>
      </p>
      <button @click="pay">结算</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      lists: {},
      flag: false,
      title: {
        a: "购物车"
      }
    };
  },
  mounted() {
    this.data = { ...this.$store.state.data };
    this.lists = { ...this.$store.state.lists };
  },
  computed: {
    initPirce() {
      let num = 0;
      let data = Object.values(this.$store.state.lists);
      data.map(item => {
        if (item.checked === true) {
          num += item.PreRent * item.count;
        }
      });
      return num;
    },
    Pirce() {
      let num = 0;
      let data = Object.values(this.$store.state.data);
      data.map(item => {
        if (item.checked === true) {
          num += item.dayRent * item.count;
        }
      });
      return num;
    },
    init() {}
  },
  methods: {
     pay(){
        const { state, commit } = this.$store;
        commit("cont", (this.initPirce+this.Pirce).toFixed(2));     
     if(Number(this.initPirce)!==0){
       this.$router.push('/Payment')
     }else{
       alert('亲!,请选购商品')
     }
    },
    eventChecked(key) {
      const { state, commit } = this.$store;
      if (this.lists[key].checked == undefined) {
        this.lists[key].checked = true;
      } else {
        this.lists[key].checked = !this.lists[key].checked;
      }
      let lists = { ...this.lists, [key]: this.lists[key] };
      commit("updata", lists);
    },
    //自选
    eventCheck(key) {
      const { state, commit } = this.$store;
      if (this.data[key].checked == undefined) {
        this.data[key].checked = true;
      } else {
        this.data[key].checked = !this.data[key].checked;
      }
      let data = { ...this.data, [key]: this.data[key] };
      commit("add", data);
    },
    //增加
    addB(item) {
      const { state, commit } = this.$store;
      item.count++;
      let key = item.Name;
      let lists = { ...this.lists, [key]: item };
      commit("updata", lists);
      this.lists = { ...this.$store.state.lists };
    },
    addb(item) {
      const { state, commit } = this.$store;
      item.count++;
      let key = item.id;
      let data = { ...this.data, [key]: item };
      commit("add", data);
      this.data = { ...this.$store.state.data };
    },
    //减少
    minusB(item) {
      const { state, commit } = this.$store;
      item.count--;
      if (item.count <= 0) {
        item.count = 0;
      }
      let key = item.Name;
      let lists = { ...this.lists, [key]: item };
      commit("updata", lists);
      this.lists = { ...this.$store.state.lists };
    },
    //groupList减少
    minusb(item) {
      const { state, commit } = this.$store;
      item.count--;
      if (item.count <= 0) {
        item.count = 0;
      }
      let key = item.id;
      let data = { ...this.data, [key]: item };
      commit("add", data);
      this.data = { ...this.$store.state.data };
    }
  }
};
</script>
<style scoped  lang="css">
.footer {
  background: #ccc;
}
.footer button {
  padding: 0.1rem 0.25rem;
  background: orange;
  outline: 0;
  border: 0;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  color: #fff;
}
.checkbox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 0.5rem;
  align-items: center;
  padding: 0 0.2rem;
}
.radio input {
  position: relative;
  top: 0.35rem;
  zoom: 150%;
  outline: 0;
}
.end {
  display: flex;
  justify-content: center;
  -ms-flex-item-align: center;
}
.end b {
  background: #ccc;
  width: 0.15rem;
  height: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
  display: inline-block;
}
.group-item {
  width: 100%;
  height: 1rem;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
  background: #eee;
  border-bottom: 3px solid #efefef;
}
.group-item dt {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 0.2rem;
}
.group-item dt img {
  width: 100%;
  height: 100%;
}
.group-item dd .span {
  display: inline-block;
  line-height: 2;
  width: 1.2rem;
}
.group-item dd {
  justify-content: center;
  align-items: center;
  display: flex;
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
</style>