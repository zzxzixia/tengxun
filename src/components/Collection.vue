<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-15 19:43:45
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\components\MyNav.vue
 -->
<template>
<div class="collect">
    <div class="collect_top">
        <i class="el-icon-arrow-left" @click="back()"></i>
        <div class="topBox">
            <span>收藏</span>
            <span>预约</span>
        </div>
        <i class="el-icon-more"></i>
    </div>
    <div class="collect_bottom">
        <h3>视频</h3>
        
        <!-- <router-link > -->
        <div class="bottomBox" v-for="(item,index) in data" :key="index" @click="goView(item.vod_id)">
            <img :src="item.vod_pic" alt="" >
            <div class="bottomSpan">
                <p><span>{{item.vod_name}}</span><span>第四集</span></p>
                <p>更新至五集</p>
            </div>
        </div>
    </div>




    <!-- <template> -->
  <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
<!-- </template> -->

</div>
</template>
<script>
  export default {
  name: 'Collection',
    data() {
        return {
            data:[]
        }
    },
    created(){
        fetch("http://10.12.151.29:3000/result")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.data=data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        goView(id){

        },
        open() {
            // this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
            // confirmButtonText: '确定',
            // cancelButtonText: '取消',
            // type: 'warning'
            // }).then(() => {
            // this.$message({
            //     type: 'success',
            //     message: '删除成功!'
            // });
            // }).catch(() => {
            // this.$message({
            //     type: 'info',
            //     message: '已取消删除'
            // });          
            // });
        }
    }
  }
</script>
<style scoped>
.collect{
    height:100%;
    width:100%;
}
.collect_top{
    height:.7rem;
    display:flex;
    justify-content: space-around;
    background:#387d7f;
    align-content: center;
} 
.topBox{
    height:.7rem;
    line-height:.7rem;
    width: 2rem;
    text-align: center;
}
 .topBox span{ 
    font-size:18px;
    color:#d6e2e3;
    margin: auto .1rem;
 }
i{
    line-height: .7rem;
    color:white;
}
.collect_bottom{
    height:100%;
}
h3{
    font-size:16px;
    color:#000000;
    width:90%;
    margin:14px auto;
}
.bottomBox{
    height:.8rem;
    width:100%;
    margin-bottom:.1rem;
}
.bottomBox img{
    height: .8rem;
    float: left;
    width: 1.3rem;
    margin-left:.1rem;
}
.bottomSpan{
    width:2.2rem;
    display: flex;
    align-items: center;
    flex-flow: wrap;
    height:.8rem;
}
.bottomSpan p{
    margin-left:.1rem;
    color:#999999;
    font-size:13px;
    width: 100%;
}
.bottomSpan  p span{
    margin-right: .05rem;
    font-size: 15px;
    color: #373737;
 }
.textSpan{
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.textSpan p span{
    color:#999999;
    font-size:12px;
}
.el-message-box {
    width:3rem;
}
</style>
