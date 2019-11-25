<!--
 * @Author: your name
 * @Date: 2019-11-12 19:12:43
 * @LastEditTime: 2019-11-16 12:45:16
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \shopapp\src\pages\VipPage.vue
 -->
<template>
<div class="box">
    <div class="head">
        <ul>
            <li v-for="(item,index) in vipNav" :key="index">{{item}}</li>
        </ul>
    </div>
    <i class="el-icon-search" @click="goSearch()"></i>
</div>
</template>

<script>

export default {
    name:"VipTop",
    data(){
        return {
            vipNav:[]
        }
    },
    created(){
        fetch("http://10.35.161.6:3000/nav")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.vipNav=data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
        goSearch(){
            this.$router.push({path:"/SearchPage"});
        }
    }

}
</script>

<style scoped>
.box{
    width: 100%;
    position: relative;
    height:.5rem;
    background: transparent;
}
.head{
    width:90%;
    height:.5rem;
}
.head ul{
    display:flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
.head ul li{
    flex-shrink: 0;
    width:.5rem;
    height:.5rem;
    line-height: .5rem;
    text-align: center;
}
i{
    font-size:.2rem;
    position:absolute;
    right: .1rem;
    top: .15rem;
}
</style>