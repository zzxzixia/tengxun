<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-16 14:11:34
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\components\MyNav.vue
 -->
<template>
<section>
    <div class="sec">
        <span>观看历史</span>
        <span><router-link to="/ViewHistoryPage">更多></router-link></span>
    </div>
    <div class="tion">
        <div class="tionBox" v-for="(item,index) in data" :key="index">
            <img :src="item.img" alt="">
            <div class="tionSpan">
                <p>{{item.desc}}</p>
            </div>
        </div>
    </div>
    <div class="sec">
        <span>我的收藏</span>
        <span><router-link  to="/CollectionPage">更多></router-link></span>
    </div>
    <div class="sec">
        <span>上传视频分享你的生活</span>
        <button type="text">上传</button>
    </div>
</section>
</template>

<script>

export default {
    name: 'MySection',
    data () {
        return {
            data:[]
        }
    },
    created(){
        fetch("http://10.35.161.6:3000/tuijian")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.data=data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
    width:100%;
}
.sec{
    height:.7rem;
    width:90%;
    display: flex;
    justify-content: space-between;
    line-height: .7rem;
    margin: 0px auto;
}
.sec span:nth-child(1){
    font-size:16px;
    font-weight: bold;
    color:#000000;
}
.sec span:nth-child(2){
    font-size:16px;
    color:#848494;
}
.sec button{
    width: .7rem;
    height: .4rem;
    font-size:16px;
    border-radius: 15%;
    border: 0px;
    text-align: center;
    margin: auto 0px;
    color: #ff6022;
    background: #fff5f5;
}
.tion{
    width:100%;
    display: flex;
    overflow-x: auto;
    flex-shrink: 0;
}
.tionBox{
    width:2rem;
    height:1.6rem;
    margin-right:.1rem;
}
.tionBox img{
    width:1.5rem;
    height:.8rem;
}
.tionSpan{
    height:.4rem;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.tionSpan p{
    font-size:13px;
    color:black;
}
</style>
