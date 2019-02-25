<template>
  <div class="wrap">
    <Header :title="title"/>
    <div class="payment">
      <div class="payment-money">
        <span>支付金额</span>
        <span>￥{{cont}}</span>
      </div>
      <div class="payment-detail">
        <span>支付详情</span>
        <span>
          <b>押金：￥2500</b>
          <b>租金：￥2500</b>
          <b>(押金：￥2500)</b>
        </span>
      </div>
      <div class="pay">
        <h3>支付方式</h3>
        <el-radio-group v-model="radio2" class="pay-radio">
          <p>
            <el-radio :label="3">
              <b>微信</b>
            </el-radio>
          </p>
          <p>
            <el-radio :label="6">
              <b>支付宝</b>
            </el-radio>
          </p>
          <p>
            <el-radio :label="9">
              <b>一网通</b>
            </el-radio>
          </p>
        </el-radio-group>
      </div>
      <button class="payment-but" type="button" @click="pay">支付</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vueX";
export default {
  data() {
    return {
      title: {
        a: "支付"
      },
      radio2: 3
    };
  },
  mounted() {
    // console.log(this.$store.state.cont)
  },
  methods: {
    pay() {
      this.$router.push("/Paysuccess");
    }
  },
  computed: {
    ...mapState(["cont"])
  }
};
</script>
<style scoped>
.pay p {
  line-height: 4;
}
.pay h3{
  padding: 0 .2rem;
  font-size: .2rem;
}
.pay b {
  font-size: 0.18rem;
}
.payment {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  padding: 0.15rem 0;
}
.payment-money,
.payment-detail {
  width: 100%;
  height: 0.6rem;
  padding: 0 0.15rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.15rem;
}
.payment-money span:nth-of-type(1) {
  font-size: 0.2rem;
  color: #fa9246;
}
.payment-money span:nth-of-type(2) {
  font-size: 0.3rem;
  color: #ff5757;
}
.payment-detail {
  height: 1rem;
}
.payment-detail span:nth-of-type(2) {
  display: flex;
  flex-direction: column;
}
ol {
  width: 100%;
  height: auto;
  padding: 0 0.15rem;
  background: #fff;
}
ol li {
  border-bottom: thin solid #ccc;
  width: 100%;
  height: 0.5rem;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ol li span {
  color: black;
}
.payment-but {
  width: 70%;
  height: 0.5rem;
  background: #fa9246;
  color: #fff;
  border: none;
  margin: 0.4rem 15%;
  border-radius: 0.1rem;
}
.pay-radio p{
  padding: 0 .2rem;
}
</style>