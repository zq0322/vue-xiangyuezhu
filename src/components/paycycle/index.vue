<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="paycycle">
            <div class="block">
                <el-date-picker class="selects"
                v-model="value1"
                type="date"
                placeholder="请选择租赁日期(一年起租)">
                </el-date-picker>
            </div>
            <div class="block">
                <el-select class="selects" v-model="value" placeholder="请选择支付周期/全部/整年/半年/季度">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    ></el-option>
                </el-select>
            </div>
            <div class="total">
                <span>合计：</span><span><b>{{this.$store.state.cont}}</b> 元</span>
            </div>
            <div class="agree">
                <input type="checkbox" ref='check'><span>我已阅读<em>《家具家电租赁协议协议》</em>，并同意。</span>
            </div>
            <button class="paycycle-but" type="button" @click="yes">确定</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title:{
                a:"选择租期支付周期"
            },
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
            },
            options: [{
                value: '选项1',
                label: '全部'
                }, {
                value: '选项2',
                label: '整年'
                }, {
                value: '选项3',
                label: '半年'
                }, {
                value: '选项4',
                label: '季度'
            }],
            value:'',
            value1:'',
        }
    },
    methods:{
        yes(){
            if(this.$refs.check.checked){
                this.$router.push({
                path:'/paysuccess',
                query:{
                    route:'leasemessage'
                }
            })
            }
        }
    }
}
</script>
<style scoped>
.block{
    width: 100%;
    height: .6rem;
    background: #fff;
    margin-top:.15rem;
    padding:0 .15rem;
}
.paycycle{
    width: 100%;height: 100%;
    background: #f2f2f2;
}
.selects{
    width: 100%;
    border:none;
    margin-top:.15rem;
    border:none;
}
.total{
    padding:0 .15rem;
    width: 100%;height: .6rem;
    background: #fff;
    line-height: .6rem;
    margin-top:.4rem;
}
.total span{
    font-size: .16rem;
}
.total span b{
    color:#ff5757;
    font-size: .2rem;
    margin-left:.2rem;
}
.agree{
    margin-top:.15rem;
    padding:0 .15rem;
    width: 100%;height: .6rem;
    background: #fff;
    line-height: .6rem;
}
.agree span{
    margin-left:.15rem;
}
.agree span em{
    font-style: normal;
    color:blue;
}
.paycycle-but{
    width: 70%;height: .5rem;
    background: #fa9246;
    color:#fff;
    border:none;
    margin:.4rem 15%;
    border-radius: .1rem;
}
</style>