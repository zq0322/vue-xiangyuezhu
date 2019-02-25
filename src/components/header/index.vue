<template>
   <div class="warp">
        <header>
           <span><i class="iconfont icon-xiangzuo" @click="goback"></i></span>
           <span class="leaseing">{{title.a}}</span>
           <span>{{title.b}}</span>
        </header>
   </div>
</template>
<script>
export default {
    props:{
        title:Object,
    },
    data(){
        return {
            right:'...'
        }
    },
    methods:{
         goback(){
             this.$router.go(-1);
        }
    },
    created(){
       // console.log(this.title)
        if(this.title.b===undefined){
            this.title.b=this.right
        }
    }
}
</script>
<style scoped  lang="">

</style>