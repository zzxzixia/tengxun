<!--
 * @Author: 潘金红
 * @Date: 2019-11-11 11:01:06
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 12:43:23
 * @Description: "播放页面"
 -->
<style scoped>
.playBox{
    width:100%;
    /* background-color:pink; */
}
.videoPlayer{
    width:100%;
    height:2rem;
    /* background-color:orange; */
}
.videoPlayer{
    position:sticky;
    left:0;
    top:0;
    z-index: 10;
}
button{
    display:block;
    margin-top:10px;
}
.videoPlayer .icon-houtui{
    color:#fff;
    font-size:20px;
    position: absolute;
    left:5px;
    top:5px;
    z-index:10;
}
.yearVip{
    width:96%;
    height:.4rem;
    line-height:.4rem;
    text-align: center;
    background-color:#e2bd57;
    color:#fff;
    margin:20px auto 10px;
    border-radius:5px;
    font-size:16px;
}
.title{
    padding:0 10px;
    line-height: .3rem;
    display: flex;
    /* border-bottom:none; */
    color:#333;
    justify-content: space-between;
}
.title span:first-child{
    font-size:16px;
    white-space: 2px;
}
#jianJie{
    border:none;
    padding-left:10px;
    border-bottom:none;
}

.intro{
    border-bottom:1px solid #eee;
}
.intro p{
    padding:0 10px 0;
}
.intro .score{
    color:#9e9e9e;
}
.intro .score .isvip{
    color:#fa6152;
}
.share{
    display:flex;
    justify-content: space-between;
    align-items: center;
    line-height: .4rem;
}
.share .iconfont{
    font-size:25px;
    color:#111;
}
#zengPian,#like,#download{
    margin-right:10px;
}
#zan{
    font-size:.26rem;
    font-weight:bold;
    position: relative;
}
#nice{
    position: absolute;
    left:.25rem;
    top:-2px;
    font-size:12px;
}
#zengPian{
    font-size:.25rem;
    font-weight:bolder;
}
#like{
    font-size:.25rem;
    font-weight:bold;
}
#download{
    font-size:.22rem;
    font-weight:bold;
}
#shareOut{
    font-size:.27rem;
    font-weight:bold;
    position: relative;
    left:0;
    top:1px;
}
.shareBox{
    display:flex;
    align-items: center;
}
.filmList{
    width:100%;
    /* background-color:skyblue; */
    border-bottom:1px solid #eee;
}
.filmList-p{
    display:flex;
    justify-content: space-between;
    padding:0 10px;
    line-height: .3rem;
}
.filmList-p span:last-child{
    color:#666;
}
.filmList-ul{
    padding-left:10px;
    display:flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}
.filmList-ul li{
    width:1.4rem;
    position: relative;
    margin-right:10px;
}
.filmList-ul li img{
    width:100%;
    height:.8rem;
    border-radius:8px;
    border:1px solid #d0c9c9;
}
.filmList-ul li .filmList-li_language{
    position: absolute;
    right:5px;
    top:5px;
    background-color:#ff6500;
    color:#fff;
    padding:1px 2px;
    border-radius:3px;
    font-size:12px;
}
.filmList-ul li .filmList-li_name{
    color:#ff6500;
    line-height: .3rem;
}
.filmList-tvList{
    display:flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    height:.7rem;
    padding-left:10px;
}
.filmList-tvList li{
    width:.5rem;
    height:.5rem;
    margin-right:8px;
    text-align: center;
    line-height: .5rem;
    flex-shrink: 0;
    background-color:#ececec;
    border-radius:5px;
}
.comment{
    width:100%;
}
.comment-all{
    padding-left:10px;
    line-height:.3rem;
    border-bottom:1px solid #eee;
}
.comment-noLogin{
    text-align: center;
    line-height: .5rem;
}
.comment-noLogin input{
    width:90%;
    height:.3rem;
    border:none;
    background-color:#ececec;
    color:#666;
    border-radius:5px;
}
.comment-hadLogin{
    display:flex;
    height: .5rem;
    align-items: center;
    padding-left:10px;
    /* background-color:skyblue; */
    position: relative;
}
.comment-hadLogin img{
    border-radius:50%;
}
.comment-hadLogin>input{
    width:82%;
    height:.3rem;
    background-color:#ececec;
    border:1px solid #ffd400;
    border-radius:5px;
    margin-left:20px;
    outline: none;
}
.comment-hadLogin .icon-VIP1{
    position: absolute;
    left:.33rem;
    top:.18rem;
    font-size:.18rem;
    color:#ffd400;
}
.comment-list ul li{
    position: relative;
    padding:10px 10px;
    border-bottom:1px solid #eee;
}
.comment-list .username{
    position:absolute;
    left:.6rem;
    top:7px;
}
.comment-list .comment_time{
    position:absolute;
    left:.6rem;
    top:.28rem;
    color:#666;
    font-size:12px;
}
.comment-list .icon-VIP1{
    position: absolute;
    left:.35rem;
    top:.16rem;
    font-size:18px;
    color:#ffd400;
}
.comment-list .comment_content{
    margin-top:10px;
    margin-bottom:10px;
}
.comment .sort{
    padding-left:10px;
    line-height: .3rem;
    color:#666;
    position: relative;
}
.comment .sort .icon-xiangxia3{
    font-size:12px;
}
.comment-share{
    display:flex;
    justify-content: flex-end;
}
.comment-share span{
    font-weight:900;
    margin-right:.2rem;
    font-size:.2rem;
}
.sort-list{
    width:80%;
    position:absolute;
    left:10%;
    top:.4rem;
    background-color:#fff;
    border-radius: 10px;
    color:#333;
    z-index:5;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0,.3);
}
.sort-list ul li{
    height:.5rem;
    line-height: .5rem;
    text-align: center;
    border-bottom:1px solid #eee;
}
.sort-list_sanJiao{
    position: absolute;
    left:.3rem;
    top:-.2rem;
    width:0;
    height:0;
    border-right:12px solid transparent;
    border-bottom:12px solid #fff;
    border-left:12px solid transparent;
    border-top:12px solid transparent;
}
.sort-list span{
    color:#ffd400;
}
.foot-comment{
    /* width:100%; */
    position: relative;
    height:.5rem;
    border-top:1px solid #eee;
    padding:0 10px;
    line-height: .5rem;
    position:sticky;
    left:0;
    bottom:0;
    background-color:#fff;
}
.foot-comment .all-comment{
    position: absolute;
    left:.7rem;
    top:-5px;
    color:#ff0000;
    font-weight:900;
    font-size:12px;
}
.foot-comment .icon-pinglun1{
    position: absolute;
    right:10px;
    color:#000;
    font-weight:900;
    font-size:.2rem;
}
#comment-area{
    width:100%;
    /* height:1.3rem; */
    position:fixed;
    box-sizing: border-box;
    left:0;
    top:2.1rem;
    background-color:#fff;
    z-index:10;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0,.3);
}
#textArea{
    width:100%;
    height:2rem;
    box-sizing: border-box;
    border:1px solid #eee;
    padding:5px 10px 0;
}
#send{
    width:100%;
    height:.4rem;
    background-color:#ffd400;
    color:#fff;
    border:none;
    border-bottom:1px solid #eee;
    outline: none;
}
#cancelSend{
    width:100%;
    height:.4rem;
    background-color:#ffd400;
    color:#fff;
    border:none;
    outline: none;
}
#noComment{
    text-align: center;
    line-height:.5rem;
}
.islike{
    color:red!important;
}
.filmList-li_type{
    position: absolute;
    right:5px;
    bottom:.35rem;
    color:#fff;
    padding:2px;
    border-radius:5px;
    background-color:#ffd400;
}
.jiColor{
    color:#ff2f00!important;
    font-weight:bold;
}
.isFm img{
    border:2px solid #ffb700!important;
}
</style>
<template>
<div class="playBox">
    <div class="videoPlayer">
        <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                     @pause="playerPause($event)"
                     @play="playerPlay($event)"
                     @dblclick="pause($event)"
        >
        </video-player>
        <span class="iconfont icon-houtui" @click="back()" v-show="isBack"></span>
    </div>
    <div class="yearVip">
        【 11 · 11特惠 】vip年卡5折，送一年苏宁会员
    </div>
    <!-- 简介 ：intro -->
    <div class="intro">
        <el-collapse id="jianJie">
            <el-collapse-item title="简介" name="1">
                <div class="jianJieBox">
                    <h3>导演:{{playVideo.vod_director}}</h3>
                    <p>主演:{{playVideo.vod_actor}}</p>
                    <h3>简介</h3>
                    <p>{{playVideo.vod_content}}</p>
                </div>
            </el-collapse-item>
        </el-collapse>
        <p class="title"><span>{{playVideo.vod_name}}</span></p>
        <p class="score">
            <span>{{playVideo.vod_score}}.0</span>分 · 
            <span v-show="isVip" class="isvip">VIP ·</span>
            <span>{{playVideo.vod_time_1}}</span>·
            <span>{{playVideo.vod_remarks}}</span>
        </p>
        <p class="share">
            <span class="iconfont icon-dianzan" id="zan" @click="dianZan()">
                <!-- <span id="nice">{{playVideo.nice}}</span> -->
                <span id="nice">{{playVideo.vod_up}}</span>
            </span>
            <span class="shareBox">
                <span class="iconfont icon-weibiaoti2fuzhi04" id="zengPian"></span>
                <span class="iconfont icon-shoucang" id="like" @click="islike=!islike" :class="{islike:islike}"></span>
                <span class="iconfont icon-xiazai" id="download"></span>
                <span class="iconfont icon-fenxiang-" id="shareOut"></span>
            </span>
        </p>
    </div>
    <!-- 专辑列表 或 剧集 -->
    <div class="filmList">
        <p class="filmList-p"><span>{{filmListTitle}}</span><span v-show="isTv">全集 ></span></p>
        <div class="filmList-show">
            <ul v-show="isFilm" class="filmList-ul">
                <li v-for="(value,key,index) in playVideo.vod_play_url" :key="index" :class="{isFm:index==current2}"> 
                    <img :src="playVideo.vod_pic" alt="" style="display:block;" @click="getUrl(value,index)">
                    <span class="filmList-li_language">{{playVideo.vod_lang}}</span>
                    <span class="filmList-li_type">{{key}}</span>
                    <span class="filmList-li_name">{{playVideo.vod_name}}</span>
                </li>
            </ul>
            <ul v-show="isTv" class="filmList-tvList">
                <li v-for="(value,key,index) in playVideo.vod_play_url" 
                :key="index" 
                @click="goJi(value,index)"
                :class="{jiColor:index==current}"
                >{{index+1}}</li>
            </ul>
        </div>
    </div>
    <!-- 评论 -->
    <div class="comment">
        <p class="comment-all">全部热评</p>
        <p class="comment-noLogin" v-show="!islogin">
            <input type="button" value="1秒登录，说说你的看法" @click="goLogin()">
        </p>
        <div class="comment-hadLogin" v-show="islogin">
            <img src="../assets/img/headicon.jpeg" alt="" width="30px" height="30px">
            <input type="button" value="我来说几句" @click="sendComment=!sendComment">
            <div v-show="sendComment" id="comment-area">
                <textarea id="textArea" placeholder="点击这里输入评论哦！"  v-model="Comment" style="resize:none;" ></textarea>
                <input type="button" value="发表" id="send" @click="send()">
                <input type="button" value="取消" id="cancelSend" @click="cancelSend()">
            </div>
            <span v-show="isVip" class="iconfont icon-VIP1"></span>
        </div>
        <div class="sort" @click="sort=!sort">
            贴子排序 最热 <span class="iconfont icon-xiangxia3"></span>
             <!-- 排序弹出框  -->
            <div class="sort-list" v-show="sort">
                <div class="sort-list_sanJiao"></div>
                <ul>
                    <li><span class="iconfont icon-yuandianxiao"></span>按最新评论排序</li>
                    <li><span class="iconfont icon-yuandianxiao"></span>按最热排序</li>
                    <li><span class="iconfont icon-yuandianxiao"></span>按最新排序</li>
                    <li style="border:none;"><span class="iconfont icon-yuandianxiao"></span>取消</li>
                </ul>
            </div>
        </div>
        <div class="comment-list">
            <!-- <p v-show="!hasComment()" id="noComment">暂无评论，快来评论吧！</p> -->
            <ul>
                <li v-for="(item,index) in commentCon" :key="index">
                    <img src="../assets/img/headicon.jpeg" alt="" width="30px" height="30px" style="border-radius:50%;">
                    <span class="username">{{item.name}}</span>
                    <span class="comment_time">{{item.time}}</span>
                    <span v-show="isVip" class="iconfont icon-VIP1"></span>
                    <p class="comment_content">{{item.comment}}</p>
                    <p class="comment-share">
                        <span class="iconfont icon-fenxiang-"></span>
                        <span class="iconfont icon-pinglun"></span>
                        <span class="iconfont icon-dianzan"></span>
                    </p>
                </li>
            </ul>  
        </div>
    </div> 
    <!-- 底部点击评论 -->
    <p class="foot-comment">
        全部评论<span class="all-comment">{{playVideo.allcomment}}
        </span><span class="iconfont icon-pinglun1" @click="sendComment=true"></span>
    </p> 
</div>     
</template>
<script>
import axios from  "axios";
// import { videoPlayer } from 'vue-video-player';
import 'videojs-contrib-hls';
// import { Popup } from 'mint-ui';
import { Toast,Indicator } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
export default {
    name:"PlayPage",
    props:["id"],
    data() {
        return {
            current:0,
            current2:0,
            islike:false,
            isBack:true,
            getNice:false,
            Comment:"",
            commentCon:[],
            sendComment:false,
            sort:false,
            islogin:false,
            isFilm:"",
            isTv:"",
            isVip:true,
            filmListTitle:"",
            playVideo:{},
            playerOptions:{
                notSupportedMessage: "此视频暂无法播放，请稍后再试",
                playbackRates:[0.5,1.0,1.5,2.0],
                muted:false,
                autoplay: true, //如果true,浏览器准备好时开始回放。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio:"16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    type: "application/x-mpegURL", //如果是直播的话  此处务必这样配置
                    src:"",//视频url地址
                    // src:`${this.playVideo.url}`,//视频url地址
                }],
                poster: "", //你的封面地址
                // poster: `${this.playVideo.img}`, //你的封面地址
                // width: document.documentElement.clientWidth,
                control: { //此处的设置都未生效，不知道为啥，我用爆破的方式解决的
                    timeDivider: false,
                    durationDisplay: false,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true //全屏按钮
                }
            }//存放播放器的配置文件
        }
    },
    components:{
      
    },
    created:function(){
        console.log(this.id);
        fetch("/api/vod/sel_one?vod_id="+this.id)
        // fetch("http://192.168.31.109:3000/result?vod_id="+this.id)//模拟
        .then(res=>{
            console.log("看这里"+res);
            return res.json();
        })
        .then(data=>{
            // console.log("返回的数据"+data);
            // this.playVideo=data[0];
            this.playVideo=data[0];
            console.log("playVideo"+this.playVideo);
            console.log("UUU"+this.getU());
            if(this.playVideo.type_id_1!="2"){
                if(Object.keys(this.playVideo.vod_play_url).length>3){
                    this.isTv=true;
                    this.isFilm=false;
                    this.playerOptions.sources[0].src=this.playVideo.vod_play_url.第1集;
                    this.filmListTitle="剧集"+" "+this.playVideo.vod_remarks;
                }else{
                    this.isFilm=true;
                    this.isTv=false;
                    this.playerOptions.sources[0].src=this.getU();
                    this.playerOptions.poster=this.playVideo.vod_pic;
                    this.filmListTitle="专辑列表";
                }
                
            }else{
                this.isTv=true;
                this.isFilm=false;
                this.playerOptions.sources[0].src=this.playVideo.vod_play_url.第1集;
                this.filmListTitle="剧集"+" "+this.playVideo.vod_remarks;
            }
        })
        .catch(err=>{
            console.log(err);
        });
        fetch("http://10.35.161.6:3000/comment")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.commentCon=data;
        })
        .catch(err=>{
            console.log(err);
        })
        if(localStorage.getItem("username")!=null){
            this.islogin=true;
        }else{
            this.islogin=false;
        }
    },
    methods:{
        goLogin(){
            this.$router.push({path:'/LoginPage'});
        },
        getU(){
            let arr=[];
            for(let key in this.playVideo.vod_play_url){
                arr.push(this.playVideo.vod_play_url[key]);
            }
            return arr[0];
        },
        goJi(value,index){
            this.current=index;
            console.log("键"+value);
            this.playerOptions.sources[0].src=value;
            // let arr=[];
            // let str="第"+index+"集";
            // let obj={[str]:""};
            // let num=Object.keys(obj)[0];
            // console.log("shu"+Object.keys(obj));
            // console.log("num"+num);
            // console.log(typeof num);
            // console.log(this.playVideo.vod_play_url[0]);
            // this.playerOptions.sources[0].src=this.playVideo.vod_play_url.num;
        },
        jishu(){
            return Object.keys(this.playVideo.vod_play_url);
        },
        playerPause(){
            this.isBack=true;
        },
        playerPlay(){
            this.isBack=false;
        },
        back(){
            this.$router.go(-1);
        },
        PlayerPause(){
            const player=this.$ref.videoPlayer;
            player.pause();
        },
        onPlayerPlay(){

        },
        hasComment(){
            // if(this.playVideo.comment.length>0){
            //     return true;
            // }else{
            //     return false;
            // }
        },
        cancelSend(){
            this.Comment="";
            this.sendComment=false;
        },
        send(){
            if(this.Comment==""){
                Toast({
                    message: '请输入评论',
                    position: 'bottom',
                    duration: 1000
                });
                return;
            }else{
                // console.log("ddddddddd");
                Indicator.open({
                    text: '发表中...',
                    spinnerType: 'fading-circle',
                });                
                setTimeout(()=>{
                    console.log('close');
                    Indicator.close();
                },500);
                
                let time=new Date();
                let nowTime=time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
                this.commentCon.unshift({
                    "name":localStorage.getItem("username"),
                    "comment":this.Comment,
                    "time":nowTime
                });
                this.Comment = "";
                this.sendComment = false;  
            }
        },
        dianZan(){
            this.getNice=!this.getNice;
            if(this.getNice){
                event.target.style.color="#ff0000";
                this.playVideo.vod_up=Number(this.playVideo.vod_up)+1;
            }else{
                event.target.style.color="#333";
                 this.playVideo.vod_up=Number(this.playVideo.vod_up)-1;
            }   
        },
        getUrl(str,index){
            this.current2=index;
            console.log(str);
            this.playerOptions.sources[0].src=str;
        }
        // loadMore() {
        //     this.loading = true;
        //     setTimeout(() => {
        //         let last = this.playVideo.comment[this.playVideo.comment.length - 1];
        //         for (let i = 1; i <= 10; i++) {
        //             this.playVideo.comment.push(last + i);
        //         }
        //         this.loading = false;
        //     }, 2500);
        // }
    },
    mounted(){
        console.log("playVideo"+this.playVideo);
    }
  
}
</script>
