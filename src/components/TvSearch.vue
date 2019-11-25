<!--
 * @Author: 潘金红
 * @Date: 2019-11-13 20:02:14
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-15 18:13:18
 * @Description: 
 -->
<style scoped>
em{
    font-style:normal;
}
.tvSearch{
    width:100%;
    height:.5rem;
    /* background-color:pink; */
    display:flex;
    align-items: center;
    position: relative;
}
.tvSearch .icon-sousuo{
    position:absolute;
    left:10px;
    font-size:.2rem;
    color:#fa6125;
}
.tvSearch-tuijian{
    margin-left:.35rem;
    color:#666;
}
.tvSearch-tuijian em{
    color:#9e9e9e;
}
.tvSearch-classify{
    background-color:#f7f5f5;
    padding:5px 10px;
    border-radius:.15rem/.15rem;
    position: absolute;
    right:10px;
    color:#666;
}
.tvSearch-classify span{
    margin-right:15px;
}
</style>
<template>
    <div class="tvSearch">
        <span class="iconfont icon-sousuo" @click="goSearch()"></span>
        <span class="tvSearch-tuijian" @click="goSearch()">{{title}} <em>[推荐]</em></span>
        <div class="tvSearch-classify">
            <span>{{title1}}</span>
            <span>{{title2}}</span>
            <span style="margin-right:0;" @click="goAllClassify(type)">全部分类</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"TvSearch",
    props:["title","title1","title2","type"],
    data() {
        return {
        }
    },
    methods:{
        goSearch(){
            this.$router.push({path:"/SearchPage"});
        },
        goAllClassify(type){
            this.$router.push({path:`/AllClassifyPage/${type}`});
        }
    }
}
</script>

