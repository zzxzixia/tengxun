<!--
 * @Author: 潘金红
 * @Date: 2019-11-08 20:23:41
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 09:24:38
 * @Description: "带banner图的推荐"
 -->
<style scoped>
.tuiBannerBox{
    width:100%;
    /* background-color:pink; */
}
.top{
    width:100%;
    height:.4rem;
    /* background-color:orange; */
    text-indent: 10px;
    line-height: .4rem;
    color:#fa6125;
    font-size:14px;
}
.mid{
    width:100%;
    height:2.5rem;
    position: relative;
    margin-bottom:5px;
} 
.mid img{
    width:100%;
    height:2rem;
}
.mid p{
    text-indent:10px;
    line-height: .2rem;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color:#333;
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
#newCount{
    color:#fff;
    position:absolute;
    right:5px;
    bottom:.5rem;
}
#desc{
    font-size:12px;
    line-height:.2rem;
}
.bottom ul li img{
    width:100%;
    height:1rem;
    border-radius:5px;
}
#filmName{
    font-weight:900;
    line-height: .3rem;
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
</style>
<template>
    <div class="tuiBannerBox">
        <div class="top">
            {{tuiBannerTitle}}
            <span :class="'iconfont'+' '+iconname"></span>
        </div>
        <div class="mid">
            <!-- 加dongman[0]&& 是为了解决数据延迟问题 -->
            <img :src="dongman[0]&&dongman[0].img" alt="">
            <span v-show="dongman[0]&&dongman[0].isVip" class="vipLogo">VIP</span>
            <!-- <span id="newCount">{{dongman[0]&&dongman[0].newCount}}</span> -->
            <p id="filmName">{{dongman[0]&&dongman[0].name}}</p>
            <p id="desc">{{dongman[0]&&dongman[0].desc}}</p>
        </div>
        <div class="bottom">
            <ul>
                <li>
                    <img :src="dongman[1]&&dongman[1].img" alt="">
                    <span v-show="dongman[1]&&dongman[1].isVip" class="vipLogo">VIP</span>
                    <!-- <span id="newCount">{{dongman[1]&&dongman[1].newCount}}</span> -->
                    <p id="filmName">{{dongman[1]&&dongman[1].name}}</p>
                    <p id="desc">{{dongman[1]&&dongman[1].desc}}</p>
                </li>
                <li>
                    <img :src="dongman[2]&&dongman[2].img" alt="">
                    <span v-show="dongman[2]&&dongman[2].isVip" class="vipLogo">VIP</span>
                    <!-- <span id="newCount">{{dongman[2]&&dongman[2].newCount}}</span> -->
                    <p id="filmName">{{dongman[2]&&dongman[2].name}}</p>
                    <p id="desc">{{dongman[2]&&dongman[2].desc}}</p>
                </li>
                <li>
                    <img :src="dongman[3]&&dongman[3].img" alt="">
                    <span v-show="dongman[3]&&dongman[3].isVip" class="vipLogo">VIP</span>
                    <!-- <span id="newCount">{{dongman[3]&&dongman[3].newCount}}</span> -->
                    <p id="filmName">{{dongman[3]&&dongman[3].name}}</p>
                    <p id="desc">{{dongman[3]&&dongman[3].desc}}</p>
                </li>
                <li>
                    <img :src="dongman[4]&&dongman[4].img" alt="">
                    <span v-show="dongman[4]&&dongman[4].isVip" class="vipLogo">VIP</span>
                    <!-- <span id="newCount">{{dongman[4]&&dongman[4].newCount}}</span> -->
                    <p id="filmName">{{dongman[4]&&dongman[4].name}}</p>
                    <p id="desc">{{dongman[4]&&dongman[4].desc}}</p>
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
    name:"TuijianBanner",
    // film 对应fetch的请求
    props:["tuiBannerTitle","iconname","filmtype"],
    data() {
        return {
            dongman:[]
        }
    },
    created:function(){
        fetch("http://10.35.161.6:3000/"+this.filmtype)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.dongman=data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
