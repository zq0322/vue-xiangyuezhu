<template>
    <div class="wrap">
         <Header :title="title"/>
         <section>
             <ul>
                 <li @click="detailHistory">
                     <span>电视</span>
                     <span>2019-02-20</span>
                 </li>
                 <li>
                     <span>电视</span>
                     <span>2019-02-20</span>
                 </li>
                 <li>
                     <span>电视</span>
                     <span>2019-02-20</span>
                 </li>
             </ul>
         </section>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title:{
                a:'报修记录'
            }
        }
    },
    methods:{
        detailHistory(){
            this.$router.push('/lease/detailHistory')
        }
    }
}
</script>
<style scoped  lang="">
    section {
  background: #f2f2f2;
}
ul li{
    padding: 0 .15rem;
    width: 100%;
    height: .4rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:.1rem 0;
}
</style>