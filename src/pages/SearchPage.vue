<!--
 * @Author: 潘金红
 * @Date: 2019-11-09 19:34:11
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 08:58:45
 * @Description: 
 -->
<style scoped>
.search{
    width:100%;
    /* background-color:pink; */
}
.searchHead{
    width:100%;
    height:.5rem;
    position:sticky;
    left:0;
    top:0;
    border-bottom:1px solid #eee;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:#fff;
    z-index: 50;
}
#inputArea{
    width:80%;
    height:.35rem;
    text-indent:.35rem;
    outline:none;
    border:none;
}
#searchBtn,#cancelBtn{
    width:15%;
    margin-left:.1rem;
    height:.35rem;
    outline:none;
    background-color:#fff;
    border:none;
}
#cancelBtn{
    z-index: 50;
}
.searchHead span{
    position: absolute;
    color:#fa6125;
    font-size:20px;
}
.searchHead .icon-sousuo{
    left:.15rem;
}
.searchHead .icon-yuyin1{
    right:.6rem;
    font-size:.28rem;
}
.recommendSearch{
    width:100%;
    height:.7rem;
}
.recommendSearch p{
    line-height: .5rem;
    color:#808080;
    text-indent: 10px;
}
.recommendShow{
    height:.2rem;
    line-height: .2rem;
}
.recommendShow span{
    background-color:#f7f8fa;
    padding:5px;
    border-radius: 3px;
    margin-left:5px;
}
.searchShow{
    width:100%;
}
.searchShow ul{
    width:100%;
}
.searchShow ul li{
    display:flex;
    width:100%;
    margin:20px 0;
}
.searchShow ul li img{
    width:100%;
    height:1.5rem;
    border-radius:5px;
}
.posterBox{
    width:30%;
    margin:0 5%;
    position: relative;
}
.filmInfBox{
    width:60%;
    position: relative;
}
.filmInfBox p{
    color:#9e9e9e;
    font-size:12px;
    line-height: .2rem;
}
.filmInfBox .view{
    position: absolute;
    bottom:0;
    left:0;
    border-radius:5px;
    width:1rem;
    height:.3rem;
    text-align: center;
    line-height:.3rem;
    color:#fff;
    background-color:#ff0000;

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
.score{
    position:absolute;
    right:5px;
    bottom:5px;
    color:#fff;
}
#actors{
    height:.4rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>
<template>
    <div class="search">
        <div class="searchHead">
            <span class="iconfont icon-sousuo"></span>
            <span class="iconfont icon-yuyin1" v-show="!isShow"></span>
            <input type="text" name="" id="inputArea" placeholder="请输入片名，主演或导演" v-model="searchKeyWords" @input="cancelOrSearch()">
            <input type="button" value="搜索" id="searchBtn" v-show="isShow" @click="search()">
            <input type="button" value="取消" id="cancelBtn" v-show="!isShow" @click="cancel()">
        </div>
        <!-- 推荐搜索 -->
        <div class="recommendSearch" v-show="!isShow">
            <p>推荐搜索</p>
            <div class="recommendShow">
                <span>斗罗大陆</span>
                <span>这个杀手不太冷</span>
                <span>我就是演员</span>
            </div>
        </div>
        <div class="searchShow" v-show="isShow">
            <ul>
                <li v-for="(item,index) in result" :key="index"> 
                    <div class="posterBox">
                        <span :v-show="item.isVip" class="vipLogo">VIP</span>
                        <span class="score">{{item.vod_score}}.0</span>
                        <img :src="item.vod_pic" alt="">
                    </div>
                    <div class="filmInfBox">
                        <h3 style="color:orange;font-size:18px;">{{item.vod_name}}</h3>
                        <p>{{item.year}} · {{item.language}}</p>
                        <p>导演：{{item.vod_director}}</p>
                        <p id="actors">主演：{{item.vod_actor}}</p>
                        <span class="view"  @click="goPlayPage(item.vod_id)">去观看</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>     
</template>
<script>
import axios from "axios";
import { Toast,Indicator } from 'mint-ui';
export default {
    name:"SearchPage",
    data() {
        return {
            isShow:false,
            searchKeyWords:"",
            save:[],
            result:[]
        }
    },
    created(){
       
    },
    methods:{
        search:function(){
            this.isShow=true;
            // axios.get("/vod/sel_mohu?name="+this.searchKeyWords)
            Indicator.open({
                text: '搜索中...',
                spinnerType: 'fading-circle',
            }); 
            // axios.get("http://192.168.31.109:3000/result")//模拟
            axios.get("/vod/sel_mohu?name="+this.searchKeyWords)
            .then(res=>{
                this.result=res.data;
                if(this.result.length>0){
                    this.isShow=true;
                    Indicator.close();
                }else{
                    this.isShow=false;
                    Indicator.close();
                    Toast({
                        message: '抱歉，没有搜到相关内容,可以换个词试试',
                        position: 'center',
                        duration: 2000
                    });
                }
            })
            .catch(err=>{
                console.log(err);
            })
        },
        cancel:function(){
            // this.isShow=true;
            // this.$router.push({path:"/"});
            this.$router.go(-1);
            if(this.searchKeyWords!=""){
                this.searchKeyWords="";
            }
        },
        cancelOrSearch:function(){
            if(this.searchKeyWords!=""){
                this.isShow=true;
            }else{
                this.isShow=false;
            }
        },
        goPlayPage:function(id){
            this.save=this.result;
            // console.log("save"+this.result);
            this.$router.push({path:`/PlayPage/${id}`});
        }
    }
}
</script>
