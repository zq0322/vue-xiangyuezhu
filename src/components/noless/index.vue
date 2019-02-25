<template>
    <div class="wrap">
        <Header :title="title"/>
        <div class="no-less">
            <img :src="require('./img/noless.png')" alt="">
            <button type='button' class="noless-but" @click="go">我要租</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title:{
                a:'未租约'
            }
        }
    },
    methods:{
        go(){
            this.$router.push('/lease/leaseing')
        }
    }
}
</script>
<style scoped>
.no-less{
    width: 100%;height: auto;
    position: relative;
}
.no-less img{
    width: 100%;height:auto;
    display: block;
}
.noless-but{
    width: 50%;height: .5rem;
    background: #fa9246;
    color:#fff;
    border:none;
    border-radius: .1rem;
    position: absolute;
    left:25%;
    bottom:8%;
}
</style>