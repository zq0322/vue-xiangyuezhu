<template>
    <div class="wrap">
        <!-- <mheader>{{title}}</mheader> -->
       <section> 
            <router-view/>
       </section>
       <mfooter></mfooter>
    </div>
</template>

<script>
import mheader from "comp/header"
import mfooter from "comp/footer"
export default {
    props:{
        title:String
    },
    data(){
        return {

        }
    },
    components:{
        mheader,mfooter
    }
}
</script>
<style>
</style>