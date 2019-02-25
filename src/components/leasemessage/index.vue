<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="lease-message">
            <p>
                <el-input v-model="input" placeholder="租赁人姓名"></el-input>
            </p>
            <p>
                <el-input v-model="input" placeholder="租赁人电话号码"></el-input>
            </p>
            <p>
                <el-input v-model="input" placeholder="租赁人身份证号"></el-input>
            </p>
            <ol>
                <li>
                    <el-select class='selects' v-model="value" placeholder="小区名">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <el-input v-model="input" placeholder="例：12栋"></el-input>
                </li>
                <li>
                    <el-input v-model="input" placeholder="例：520号"></el-input>
                </li>
            </ol>
            <p>
                <el-input
                    type="textarea"
                    :rows="6"
                    placeholder="可补充地址说明"
                    v-model="textarea">
                </el-input>
            </p>
            
            <button class="leasem-but" type="button">下一步</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
                value: '',
                title:{
                    a:'填写租赁人信息'
                },
                input:'',
                textarea:''
        }
    }
}
</script>
<style scoped>
.lease-message{
    width: 100%;height: 100%;
    padding: 0 .15rem;
    background: #f2f2f2;
}
.lease-message p{
    margin-top:.15rem;
}
.lease-message ol{
    width: 100%;
    background: #fff;
    margin-top:.15rem;
}
.selects{
    width: 100%;
}
.leasem-but{
    width: 70%;height: .5rem;
    background: #fa9246;
    color:#fff;
    border:none;
    margin:.4rem 15%;
    border-radius: .1rem;
}
</style>