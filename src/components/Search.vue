<!--
 * @Author: 潘金红
 * @Date: 2019-11-06 20:13:53
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-15 11:21:32
 * @Description: "主页的搜索"
 -->
<style scoped>
   .search{
      width:100%;
      height:.5rem;
      /* background-color:pink; */
      position: relative;
      display:flex;
      align-items: center;
      justify-content: center;
      position:sticky;
      left:0;
      top:.51rem;
      z-index:10;
      background-color:#fff;
      
   }
   .search::after{
      content: "";
      height:0;
      display:block;
      clear:both;
      overflow: hidden;
      visibility: hidden;
   }
   .searchInput{
      width:98%;
      height:.35rem;
      border:none;
      border-bottom:1px solid #eee;
      outline: none;
      background-color:#fff;
      /* border-radius: 10px 0 0 10px; */
      text-indent:.35rem;
   }
   /* .btn{
      width:15%;
      height:.35rem;
      text-align: center;
      background-color:#eee;
      line-height: .35rem;
      border-radius: 0 10px 10px 0;
      border:1px solid #eee;
      border-left:none;
      outline: none;
      color:#fa6125;
   } */
   span{
      position: absolute;
      /* left:.15rem;
      top:50%; */
      transform: translateY(-50%);
   }
   .icon-sousuo{
      color:#fa6125;
      font-size:20px;
      left:.15rem;
      top:50%;
   }
   .icon-xiazai{
      color:#666;
      font-size:20px;
      right:.5rem;
      top:46%;
   }
   .icon-lishijilu{
      color:#666;
      font-size:20px;
      right:.15rem;
      top:50%;
   }
</style>
<template>
   <div class="search">
      <span class="iconfont icon-sousuo"></span>
      <span class="iconfont icon-xiazai"></span>
      <span class="iconfont icon-lishijilu" @click="goCollection()"></span>
      <input type="search" :placeholder="tip" class="searchInput" @click="goSearch()">
      <!-- <input type="button" value="搜索" class="btn"> -->
   </div>       
</template>
<script>
export default {
   props:["tip"],
   name:"Search",
   data() {
      return {
      }
   },
   methods:{
      goSearch:function(){
         this.$router.push({path:"/SearchPage"});
      },
      goCollection(){
         this.$router.push({path:"/ViewHistoryPage"});
      }
   }
}
</script>


