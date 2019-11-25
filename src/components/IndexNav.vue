<!--
 * @Author: 潘金红
 * @Date: 2019-11-07 18:04:38
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 08:52:15
 * @Description: "首页导航"
 -->
<style scoped>
.navBox{
    width:100%;
    height:.5rem;
    display:flex;
    border-bottom:1px solid #eee;
    position:sticky;
    left:0;
    top:0;
    z-index: 10;
    background-color:#fff;
}
.nav{
    width:90%;
    overflow-x:auto;
} 
.nav ul{
    display:flex;
    flex-wrap: nowrap;
    width:100%;
    height:100%;
    justify-content: space-between;
}
.nav ul li{
    width:.5rem;
    line-height: .5rem;
    text-align: center;
    flex-shrink: 0;
}
.fenlei{
    width:10%;
    line-height: .5rem;
    text-align: center;
} 
.icon-fenlei{
    font-size:.25rem;
    color:#fa6125;
}    
.isColor{
    color:#fa6125;
    font-size: .16rem;
}  
</style>
<template>
<div class="navBox">
    <div class="nav">
        <ul>
            <li v-for="(item,index) in classify" 
             :key="index"
             @click="goWhere(item.typename,index)" 
            :class="{isColor:$store.state.navColor[index]}">{{item.typename}}</li>
        </ul>
    </div>
    <div class="fenlei">
        <span class="iconfont icon-fenlei"></span>
    </div>
</div>     
</template>
<script>
export default {
    name:"IndexNav",
    data() {
        return {
           classify:[]    
        }
    },
    created(){
        // fetch("/api/type")
        fetch("http://10.35.161.6:3000/type")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            this.classify=data;
            console.log("classify"+this.classify);
        })
        .catch(err=>{
            console.log(err);
        })
        // this.$store.dispatch("getData");
        // this.$store.commit("getData");
        // this.$store.commit("getNav");
        // this.$store.commit("getData");
    },
    methods:{
        goWhere(typename,index){
            this.$store.commit("getIsNav",index);
            let str="";
            switch(typename){
                case "精选":str="Index";break;
                case "电视剧":str="TvPage";break;
                case "电影":str="FilmPage";break;
                case "综艺":str="ZyPage";break;
                case "动漫":str="DmPage";break;
                case "纪录片":str="JlPage";break;
                default:;break;
            }
            this.$router.push({path:`/${str}`});
        }
    }
}
</script>
