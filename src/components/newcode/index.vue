<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="new-code">
            <div class="new-codes">
                <p>
                    <span>新密码</span>
                    <input type="text" placeholder="6位以上密码">
                </p>
            </div>
            <div class="new-codes">
                <p>
                    <span>确认密码</span>
                    <input type="text" placeholder="确认新密码">
                </p>
            </div>
            <button class="newcode-but" type="button">确认</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title:{
                a:'设置新密码'
            }
        }
    }
}
</script>
<style scoped>
.new-code{
    padding: .15rem 0;
    width: 100%;height: 100%;
    background: #f2f2f2;
}
.new-codes{
    background: #fff;
    width: 100%;
    height:auto;
    padding: 0 .15rem;
}
.new-codes p{
    width: 100%;
    height: .5rem;
    border-bottom:thin solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.new-codes p span{
    font-size: .16rem;
}
.new-codes p input{
    width: 70%;
    border:0;
}
.newcode-but{
    width: 70%;height: .5rem;
    background: #fa9246;
    color:#fff;
    border:none;
    margin:.4rem 15%;
    border-radius: .1rem;
}
</style>