<!--
 * @Author: 潘金红
 * @Date: 2019-11-07 16:26:08
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 08:55:54
 * @Description: "主页轮播图"
 -->
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
    width:100%;
    height:1.8rem;
}
img{
    width:100%;
    height:100%;
}
</style>
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in banner.index_lunbo"  :key="index" @click="goPlay(item.vod_id)">
            <!-- <div class="swiper-slide" v-for="(item,index) in banner"  :key="index"> -->
                <img :src="item.vod_pic_slide" alt="">
                <!-- <img :src="item.src" alt=""> -->
            </div>
        </div>   
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- <div class="swiper-scrollbar"></div>      -->
    </div>    
</template>
<script>
import Swiper from "swiper";

export default {
    name:"Banner",
    data() {
        return {
            // banner:{} //模拟
            banner:[]
        }
    },
    created(){
        fetch("/api/vod/sel_index")
        // fetch("http://192.168.31.109:3000/img")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            // console.log(data);
            this.banner=data;
            this.$nextTick(function(){
                var mySwiper = new Swiper ('.swiper-container',{
                    autoplay:true,
                    speed:300,
                    grabCursor:true,
                    loop:true,
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
                })
            })
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
        goPlay(id){
            this.$router.push({path:`/PlayPage/${id}`});
        }
    }
}
</script>
