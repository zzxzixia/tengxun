<!--
 * @Author: 潘金红
 * @Date: 2019-11-08 19:28:00
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 14:13:16
 * @Description: "推荐"
 -->
<style scoped>
.tuiJianBox{
    width:100%;
    /* background-color:pink; */
}          
.top{ 
    width:100%;
    height:.4rem;
    /* background-color:pink; */
    text-indent: 10px;
    line-height: .4rem;
    color:#fa6125;
    /* font-size:14px; */
}
.bottom{
    width:100%;
}
.bottom ul{
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.bottom ul li{
    width:49%;
    height:1.5rem;
    /* background-color:skyblue; */
    position: relative;  
    margin-bottom:5px;
}
.bottom ul li:nth-of-type(5){
    margin-bottom:0;
}
.bottom ul li:nth-of-type(6){
    margin-bottom:0;
}
#newCount{
    color:#fff;
    position:absolute;
    right:5px;
    bottom:.5rem;
}
.bottom ul li img{
    width:100%;
    height:1rem;
    border-radius: 5px;
}
/* #filmName{
    font-weight:900;
} */
#desc{
    font-size:12px;
    height: .4rem;
    /* text-indent: 10px; */
    padding-left:10px;
    line-height: .2rem;
    /* line-height: .3rem; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color:#333;
}
.huan{
    width:100%;
    height:.3rem;
    margin-top:5px;
    border-top:1px solid #eee;
    text-align: center;
    line-height: .3rem;
    color:#fa6125;
    font-weight:900;  
}
.icon-huanyihuan{
    font-size:14px;
}
</style>
<template>
    <div class="tuiJianBox">
        <div class="top">
            {{redianTitle}}
            <span :class="'iconfont'+' '+iconname"></span>
        </div>
        <div class="bottom">
            <ul>
                <li v-for="(item,index) in redianSP" :key="index">
                    <img :src="item.img" alt="">
                    <span id="newCount">{{item.newCount}}</span>
                    <!-- <p id="filmName">{{item.name}}</p> -->
                    <p id="desc">{{item.desc}}</p>
                </li>
            </ul>
        </div>
        <div class="huan">
            <span class="iconfont icon-huanyihuan"> 换一换</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"RedianSP",
    props:["redianTitle","iconname"],
    data() {
        return {
            redianSP:[]
        }
    },
    created:function(){
        fetch("http://10.35.161.6:3000/redianSP")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            this.redianSP=data;
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>

