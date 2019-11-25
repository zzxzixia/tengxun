<!--
 * @Author: your name
 * @Date: 2019-11-12 19:12:43
 * @LastEditTime: 2019-11-14 15:49:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shopapp\src\pages\VipPage.vue
 -->
<template>
<div class="box">
    <Xiupass></Xiupass>
</div>
</template>

<script>
import Xiupass from '@/components/Xiupass';

export default {
    name:"XiupassPage",
    data(){
        return {
        }
    },
    components:{
     Xiupass
    }
}
</script>

<style scoped>
 .box{
    width:100%;
}
</style>