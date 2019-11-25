<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-12 17:46:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\components\MyNav.vue
 -->
<template>
<div class="history_bottom" @click="denglu">
    <div class="bottom">
        <img src="static/img/his1.jpg">
        <div class="bottomBox">
            <p><span>没有秘密的你</span>
                <span>第01集</span>
                <span class="bottomSpan">独播</span></p>
            <p><i class="el-icon-mobile-phone"></i><span class="pSpan">观看不足1%</span></p>
        </div>
    </div>
    <div class="bottom">
        <img src="static/img/his2.jpg">
        <div class="bottomBox">
            <p><span>没有秘密的你</span>
                <span>第01集</span>
                <span class="bottomSpan">独播</span></p>
            <p><i class="el-icon-mobile-phone"></i><span class="pSpan">观看不足1%</span></p>
        </div>
    </div>
    <div class="bottom">
        <img src="static/img/his3.jpg">
        <div class="bottomBox">
            <p><span>没有秘密的你</span>
                <span>第01集</span>
                <span class="bottomSpan">独播</span></p>
            <p><i class="el-icon-mobile-phone"></i><span class="pSpan">观看不足1%</span></p>
        </div>
    </div>
    <div class="bottom">
        <img src="static/img/his4.jpg">
        <div class="bottomBox">
            <div class="textBox">
                <p><span>我们的歌</span>
                先导片:阿森松岛算得上是持续创新出错山东省非常调查对象</p>
            </div> 
            <p><i class="el-icon-mobile-phone"></i><span class="pSpan">观看不足1%</span></p>
        </div>
    </div>
    <div class="bottom">
        <img src="static/img/his5.jpg">
        <div class="bottomBox">
            <p><span>没有秘密的你</span></p>
            <p><i class="el-icon-mobile-phone"></i><span class="pSpan">观看不足1%</span></p>
        </div>
    </div>
    <div class="bottom">
        <img src="static/img/his6.jpg">
        <div class="bottomBox">
            <p><span>没有秘密的你</span></p>
            <p><span>(上)</span></p>
            <p><i class="el-icon-mobile-phone"></i><span class="pSpan">观看不足1%</span></p>
        </div>
    </div>
    <div class="bottom">
        <img src="static/img/his7.jpg">
        <div class="bottomBox">
            <p><span>伍六七之最强发型师</span>
                <span>第01集</span></p>
            <p><i class="el-icon-mobile-phone"></i><span class="pSpan">观看不足1%</span></p>
        </div>
    </div>
</div>
</template>
<script>
import { Indicator } from 'mint-ui';
  export default {
  name: 'HisBottom',
    data() {
      return {
      }
    },
    methods:{
    }
  }
</script>
<style scoped>
.history_bottom{
    height:100%;
}
.bottom{
    width:100%;
    margin-left:.1rem;
    height:.7rem;
    margin-top: .1rem;
}
.bottom img{
    height: .7rem;
    float: left;
    width: 1.3rem;
}
.bottomBox{
    height: .7rem;
    width: 2.2rem;
    display: flex;
    align-items: center;
    flex-flow: wrap;
}
.textBox{
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.textBox p{
    font-size: 15px;
    color: #000000;
    width:100%;
}
.bottomBox p{
    margin-left:.1rem;
    width:100%;
}
 p span{
    margin-right: .05rem;
    font-size: 15px;
    float: left;
    color: #000000;
}
.bottomBox .bottomSpan{
    color:white;
    width:.4rem;
    background:#ff6022;
    font-size: 15px;
    text-align: center;
}
.el-icon-mobile-phone{
    float: left;
    line-height: .2rem;
}
.pSpan{
    color:#8b8b8b;
    float: left;
    font-size:13px;
}
</style>
