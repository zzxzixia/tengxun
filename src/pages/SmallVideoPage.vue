<!--
 * @Author: 潘金红
 * @Date: 2019-11-14 16:18:38
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 00:42:10
 * @Description: 
 -->
<style scoped>
.smallVideoBox{
    width:100%;
    height:1rem;
    background-color:pink;
}           
</style>
<template>
<div class="smallVideoBox">
    这里是小视频页面
    <Footer></Footer>
</div>          
</template>
<script>
import Footer from "../components/Footer"
export default {
    name:"SmallVideoPage",
    data() {
        return {
        }
    },
    components:{
        Footer
    },
    created(){
        this.$store.commit("getIsColor",2);
    }
}
</script>

