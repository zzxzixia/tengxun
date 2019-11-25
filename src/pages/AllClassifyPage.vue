<!--
 * @Author: 潘金红
 * @Date: 2019-11-15 17:57:47
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 15:05:42
 * @Description: 
 -->
<style scoped>
.allClassify{
    width:100%;
    /* background-color:pink; */
} 
.classify-head{
    width:100%;
    height:.5rem;
    background-color:#fff;
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-size:.16rem;
} 
.classify-head span:first-child{
    margin-left:10px;
    font-size:.18rem;
} 
.classify-head span:last-child{
    margin-right:10px;
    font-size:.18rem;
} 
.classifyBox{
    width:100%;
    height:.4rem;
    display:flex;
    align-items: center;
    overflow-x: auto;
} 
.classifyBox span{
    margin:0 10px;
    /* line-height: .5rem; */
    flex-shrink: 0;
}
.isStyle{
    color:#fa6125;
    background-color:#eaeaea;
    padding:5px 8px;
    border-radius: 5px;
}
.isStyleArea{
    color:#fa6125;
    background-color:#eaeaea;
    padding:5px 8px;
    border-radius: 5px;
}
.isStyleYear{
    color:#fa6125;
    background-color:#eaeaea;
    padding:5px 8px;
    border-radius: 5px;
}
.isStyleFree{
    color:#fa6125;
    background-color:#eaeaea;
    padding:5px 8px;
    border-radius: 5px;
}
</style>
<template>
<div class="allClassify">
    <div class="classify-head">
        <span class="iconfont icon-houtui" @click="back()"></span>
        <span>{{type}}</span>
        <span class="iconfont icon-sousuo" @click="goSearch()"></span>
    </div>
    <div class="classifyBox">
        <span v-for="(item,index) in classify.style" :key="index" :class="{isStyle:index==current1}" @click="goStyle(item,index)">{{item}}</span>
    </div>
    <div class="classifyBox">
        <span v-for="(item,index) in classify.styleArea" :key="index" :class="{isStyleArea:index==current2}" @click="goStyleArea(item,index)">{{item}}</span>
    </div>
    <div class="classifyBox">
        <span v-for="(item,index) in classify.styleYear" :key="index" :class="{isStyleYear:index==current3}" @click="goStyleYear(item,index)">{{item}}</span>
    </div>
    <div class="classifyBox">
        <span v-for="(item,index) in classify.styleFree" :key="index" :class="{isStyleFree:index==current4}" @click="goStyleFree(item,index)">{{item}}</span>
    </div>
</div>    
</template>
<script>
export default {
    name:"AllClassifyPage",
    props:["type"],
    data() {
        return {
            classify:{},
            current1:0,
            current2:0,
            current3:0,
            current4:0,
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        goSearch(){
            this.$router.push({path:"/SearchPage"});
        },
        goStyle(item,index){
            this.current1=index;
        },
        goStyleArea(item,index){
            this.current2=index;
        },
        goStyleYear(item,index){
            this.current3=index;
        },
        goStyleFree(item,index){
            this.current4=index;
        }

    },
    created(){
        console.log(this.type);
        let str="";
        switch(this.type){
            case "电影":str="filmClass";break;
            case "电视剧":str="TvClass";break;
            default:;break;
        }
        fetch(`http://10.35.161.6:3000/${str}`)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.classify=data;
            console.log("分类"+data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
