<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-15 11:42:11
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\components\MyNav.vue
 -->
<template>
<div class="history_top">
    <div class="top">
        <i class="el-icon-arrow-left" @click="back()"></i>
        <div class="topBox">
            <span>视频</span>
            <span>小说漫画</span>
        </div>
        <span @click="open">编辑</span>
    </div>
    <div class="sec">
        <span>上传视频分享你的生活</span>
        <button type="text" @click="goLogin()">一秒登录</button>
    </div>
    <div class="sec">
        <span></span>
        <el-switch
            v-model="value"
            inactive-text="过滤已看完">
        </el-switch>
    </div>
</div>
</template>

<script>
  export default {
  name: 'HisTop',
    data() {
      return {
        value: true
      }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        open(){
            this.$confirm('此操作将永久删除记录, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        goLogin(){
            this.$router.push({path:"/LoginPage"});
        }
    }
  }
</script>
<style scoped>
.history_top{
    height:100%;
}
.top{
    display:flex;
    justify-content: space-around;
    align-items: center;
    height:.7rem;
    width:100%;
}
.topBox span{
    font-size:18px;
    font-weight:bold;
    color:#000000;
    float: left;
    margin-right:.1rem;
}
.top span{
    font-size:16px;
    color:#17173b;
}
.sec{
    width:90%;
    display: flex;
    justify-content: space-between;
    line-height: .6rem;
    margin:auto;
}
.sec span{
    font-size:16px;
    color:#000000;
}
.sec button{
    width: .8rem;
    height: .3rem;
    font-size:15px;
    border-radius: 15px/15px;
    border: 0px;
    text-align: center;
    margin: auto 0px;
    color: white;
    background: #ff6022;
    outline: none;
}
.el-icon-arrow-left{
    font-size:.2rem;
}

</style>
