<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-13 18:12:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\components\MyNav.vue
 -->
<template>
<div class="vip">
    <div class="vipBox">
        <p>0</p><span>加入的圈子</span>
    </div>
    <div class="vipBox">
        <p>0</p><span>关注</span>
    </div>
    <div class="vipBox">
        <p>0</p><span>收藏</span>
    </div>
    <div class="vipBox">
        <i class="el-icon-bell"></i><span>消息</span>
    </div>
</div>
</template>

<script>

export default {
  name: 'MyVip',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vip{
	width: 95%;
	height: 1rem;
	display:flex;
	background: white;
	-webkit-justify-content:space-around;
	text-align: center;
	-webkit-align-items:center;
    margin:auto;
}
i{
    margin: 0px auto;
    display: block;
    font-size:18px;
}
.vip .vipBox{
    font-size: 10px;
    height:.4rem;  
    width:25%;  
	color: #848494;
}
.vipBox p{
    font-size: 16px;
    font-weight: bold;
    color:#0a0a30;
}
.vipBox span{
    font-weight: bold;
    font-size: 13px; 
    margin-top: .2rem;  
}
</style>
