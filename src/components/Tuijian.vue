<!--
 * @Author: 潘金红
 * @Date: 2019-11-08 19:28:00
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 12:51:43
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
    justify-content: space-around;
}
.bottom ul li{
    width:46%;
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
#filmName{
    font-weight:900;
}
#desc{
    font-size:12px;
    line-height: .2rem
}
.bottom ul li p{
    text-indent:10px;
    line-height: .3rem;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
.vipLogo{
    position: absolute;
    right:5px;
    top:5px;
    border-radius: 3px;
    text-align: center;
    line-height: 16px;
    width:.3rem;
    height:16px;
    font-size:12px;
    background-color:#e2bd57;
    color:#fbf3e3;
}
</style>
<template>
    <div class="tuiJianBox">
        <div class="top">
            {{tuijianTitle}}
            <span :class="'iconfont'+' '+iconname"></span>
        </div>
        <div class="bottom">
            <ul>
                <li v-for="(item,index) in tuijian" :key="index" @click="goPlay(item.vod_id)">
                    <img :src="item.vod_pic" alt="">
                    <!-- <span id="newCount">更新至第{{item.newCount}}集</span> -->
                    <span class="vipLogo">VIP</span>
                    <p id="filmName">{{item.vod_name}}</p>
                    <p id="desc">{{item.vod_blurb}}</p>
                </li>
            </ul>
        </div>
        <div class="huan">
            <span class="iconfont icon-huanyihuan" @click="change()"> 换一换</span>
        </div>
    </div>
</template>
<script>
import { Toast,Indicator } from 'mint-ui';
export default {
    name:"Tuijian",
    props:["tuijianTitle","iconname"],
    data() {
        return {
            tuijian:[]
        }
    },
    created:function(){
        fetch("/api/vod/sel_suiji?count=6")
        // fetch(`http://192.168.31.109:3000/${this.address}`)//模拟
        .then(res=>{
            console.log("tuijian"+res);
            return res.json();
            //  this.tuijian=res;    
        })
        .then(data=>{
            console.log(data);
            this.tuijian=data;
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        change(){
            Indicator.open({
                text: '更换中...',
                spinnerType: 'fading-circle',
            }); 
            fetch("/api/vod/sel_suiji?count=6")
            // fetch(`http://192.168.31.109:3000/${this.address}`)//模拟
            .then(res=>{
                console.log("tuijian"+res);
                return res.json();
                //  this.tuijian=res;    
            })
            .then(data=>{
                console.log(data);
                this.tuijian=data;
                if(this.tuijian.length>0){
                    Indicator.close();
                    Toast({
                        message: '更换成功',
                        position: 'center',
                        duration: 2000
                    });
                }else{
                    Indicator.close();
                    Toast({
                        message: '啊哦，出问题了,请检查网络连接',
                        position:'center',
                        duration: 2000
                    });
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        goPlay(id){
            this.$router.push({path:`/PlayPage/${id}`});
        }
    }
}
</script>
