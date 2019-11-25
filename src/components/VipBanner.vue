<!--
 * @Author: your name
 * @Date: 2019-11-11 20:40:16
 * @LastEditTime: 2019-11-16 12:47:09
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \shopapp\src\components\VipBanner.vue
 -->

<template>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <a v-bind:href="img.href"><img :src="img.src" ></a>
            </div>
        </div>      
      </div>
      <div class="vip_login">
        <div class="vipgo"></div>
        <div class="vipspan">
          <p>当时所发生的</p>
          <p>有效期:2019-12-16</p>
        </div>
        <div class="vipBox">VIP首月12元</div>
      </div>
    </div>  
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'VipBanner',
  data () {
    return {
      imgs:[
        ]
    }
  },
  created(){
      fetch("http://10.35.161.6:3000/vipBannerimgs")
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.imgs = data;
         this.$nextTick(function () {
              let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:300,
                    grabCursor:true
              });
         });
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
  width:95%;
  height: 2rem;
}
img{
  width:100%;
  height: 100%;
  border-radius: 5%;
}
.vip_login{
  height:.5rem;
  width:80%;
    position: absolute;
    left: .4rem;
    top: 2.2rem;
    z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background: #dddddd;
  border-radius: 3%;
}
.vipgo{
  width:.3rem;
  height:.3rem;
  border-radius: 50%;
  border:1px solid white;
}
.vipBox{
    height: .3rem;
    border-radius: 10%;
    background: pink;
    width: 1rem;
    line-height: .3rem;
    text-align: center;
}
</style>
