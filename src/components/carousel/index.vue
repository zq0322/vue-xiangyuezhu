<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" class="mySwiper">
            <swiper-slide v-for="(item,index) of carouselList" :key="index">
                <img :src="item.image" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {  
    props:{
        carouselList:Array
    },
    data(){
        return {
            
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>
<style scoped>
    .banner{
        width:100%;
        height:1.5rem;
    }
    .mySwiper,swiper-slide{
        width:100%;
        height:100%;
    }
    img{
        width:100%;
        height:100%;
    }
</style>