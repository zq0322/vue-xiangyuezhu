<template>
    <div class="group"> 
        <div v-for="(item,index) of groupList" :key="index">
            <!-- 自选组合列表 -->
            <GroupList :item="item"/>
        </div>
    </div>
</template>

<script>
import GroupList from 'comp/groupList/index'
export default {
    props:{
        groupList:Array
    },
    data(){
        return {

        }
    },
    components:{
        GroupList
    }
}
</script>
<style scoped  lang="">

</style>