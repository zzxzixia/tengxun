<!--
 * @Author: 潘金红
 * @Date: 2019-11-06 19:44:45
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-15 20:08:26
 * @Description: 
 -->
<template>
  <div id="app">
    <transition name="component-fade" mode="">
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

html{
  font-size:26.67vw;
}
body{
  font-size:14px;
}
img{
  border:none;
  display:block;
}
ul,ol{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
  display:block;
}
/* .component-fade-enter-active, .component-fade-leave-active {
    /* transition: opacity .5s ease; 
    transition: all 1s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; 
    transform:translateX(-100%);
} */
.vjs-custom-skin > .video-js .vjs-big-play-button{
    width:2em;
    height:2em;
    border-radius: 50%;
    margin-left:-1em;
    /* left:50%; */
    /* transform: translateX(50%); */
}
.vjs-custom-skin > .video-js .vjs-control{
  width:3.5em;
}
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-play-control{
  width:3em;
  margin-right:.5em;
}
/* 音量键 */
.video-js .vjs-volume-panel{
  display:none;
}
:root{
  --swiper-theme-color:#fff!important;
}
.el-message-box {
    width:3rem;
}
</style>
