<!--
 * @Author: 潘金红
 * @Date: 2019-11-09 14:05:39
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-15 11:10:08
 * @Description: "底部"
 -->
<style scoped>
.foot{
    width:100%;
    height:.5rem;
    border-top:1px solid #eee;
    position: sticky;
    left:0;
    bottom: 0;
    z-index: 10;
    background-color:#fff;
}
.foot ul{
    width:100%;
    height:100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    /* line-height: .5rem; */
} 
.foot ul li{
    text-align: center;
    /* color:#333; */
    /* font-weight:900; */
}    
.foot ul li span{
    display:block;
    font-size:20px;
}
.isColor{
    color:#fa6125;
}   
</style>
<template>
<div class="foot">
    <ul>
        <li :class="{isColor:$store.state.isColor[0]}" @click="goIndex(0)">
            <span class="iconfont icon-1"></span>
            首页
        </li>
        <li  :class="{isColor:$store.state.isColor[1]}" @click="goIndex(1)">
            <span class="iconfont icon-redian"></span>
            小视频
        </li>
        <li  :class="{isColor:$store.state.isColor[2]}" @click="goIndex(2)">
            <span class="iconfont icon-vip5"></span>
            vip会员
        </li>
        <li  :class="{isColor:$store.state.isColor[3]}" @click="goIndex(3)">
            <span class="iconfont icon-wode"></span>
            个人中心
        </li>
    </ul>
</div>    
</template>
<script>
export default {
    name:"Footer",
    props:[],
    data() {
        return {
            
        }
    },
    methods:{
        goIndex(index){
            this.$store.commit("getIsColor",index);
            switch(index){
                case 0:this.$router.push({path:"/"});break;
                case 1:this.$router.push({path:"/SmallVideoPage"});break;
                case 2:this.$router.push({path:"/VipVideoPage"});break;
                case 3:this.$router.push({path:"/PersonalPage"});break;
            }
            
        }
    },
    mounted(){
        console.log(this.isShouYe);
    }
}
</script>
