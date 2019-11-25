<!--
 * @Author: your name
 * @Date: 2019-11-12 19:12:43
 * @LastEditTime: 2019-11-15 14:05:32
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \shopapp\src\pages\VipPage.vue
 -->
<template>
<div class="box">
    <VipTop></VipTop>
    <VipBanner></VipBanner>
    <VipHot></VipHot>
    <h3>最新上线</h3>
    <Vipline></Vipline>
    <div class="tui">
        <h3>为你推荐VIP综艺</h3>
        <span>更多></span>
    </div>
    <Vipline></Vipline>
    <div class="tui">
        <h3>为你推荐VIP电影</h3>
        <span>更多></span>
    </div>    
    <Vipline></Vipline>
    <div class="tui">
        <h3>为你推荐VIP好剧</h3>
        <span @click="goTvPage()">更多></span></div>
    <Vipline></Vipline>
    <Footer></Footer>
</div>
</template>

<script>
import VipTop from '@/components/VipTop';
import VipBanner from '@/components/VipBanner';
import VipHot from '@/components/VipHot';
import Vipline from '@/components/Vipline';
import Footer from '@/components/Footer';

export default {
    name:"VipVideoPage",
    data(){
        return {
        }
    },
    components:{
     VipTop,VipBanner,VipHot,Vipline,Footer
    },
    created(){
        this.$store.commit("getIsColor",2);
    },
    methods:{
        goTvPage(){
            this.$router.push({path:"/"});
        }
    }
}
</script>

<style scoped>
 .box{
    width:100%;
} 
.box .tui{
    display:flex;
    width:95%;
    justify-content: space-between;
    align-content: center;
    margin: .1rem auto;
}
.box h3{
    color:black;
    font-size:18px;
    margin: .1rem auto;
    width: 95%;
}
.tui h3{
    width:3rem;
}
.box .tui span{
    font-size:14px;
    color:#c2b7b7;
    padding-top: .13rem;
}
</style>