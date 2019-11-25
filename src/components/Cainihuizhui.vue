<!--
 * @Author: 潘金红
 * @Date: 2019-11-07 21:36:40
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-16 09:07:06
 * @Description: "猜你会追横向滚动版"
 -->
<style scoped>
.caiBox{
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
.bottom{
    width:100%;
    height:1.8rem;
}
.bottom ul{
    display:flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    height:100%;
}
.bottom ul li{
    width:1.2rem;
    height:100%;
    /* background-color:skyblue; */
    margin-right:5px;
    flex-shrink: 0;
    position: relative;
}
#newCount{
    color:#fff;
    position: absolute;
    right:5px;
    bottom: .5rem;
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
#desc{
    font-size:12px;
    line-height: .2rem;
}
.bottom ul li img{
    width:100%;
    height:1.3rem;
    border-radius: 5px;
} 
#filmName{
    font-weight:900;
}
.bottom ul li p{
    text-indent:10px;
    line-height: .3rem;
    color:#333;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}  
</style>
<template>
    <div class="caiBox">
        <div class="top">
            {{keywords}}
            <span :class="'iconfont'+' '+iconname"></span>
        </div>
        <div class="bottom">
            <ul>
                <li v-for="(item,index) in films.index_suiji" :key="index" @click="goPlay(item.vod_id)">
                <!-- <li v-for="(item,index) in films" :key="index"> -->
                    <img :src="item.vod_pic" alt="">
                    <!-- <img :src="item.img" alt=""> -->
                    <span class="vipLogo">VIP</span>
                    <!-- <span id="newCount">更新至第{{item.newCount}}集</span> -->
                    <p id="filmName">{{item.vod_name}}</p>
                    <!-- <p id="filmName">{{item.name}}</p> -->
                    <p id="desc">{{item.vod_blurb}}</p>
                    <!-- <p id="desc">{{item.desc}}</p> -->
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Cainihuizhui",
    props:["keywords","iconname","typeNa"],
    data() {
        return {
            films:{}
            // films:[] //m模拟
        }
    },
    created(){
        console.log("typeNa"+this.typeNa);
        fetch(`/api/vod/${this.typeNa}`)
        // fetch("http://192.168.31.109:3000/xihuan")//模拟
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.films=data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
        goPlay(id){
            this.$router.push({path:`/PlayPage/${id}`});
        }
    }
}
</script>
