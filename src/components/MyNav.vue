<!--
 * @Author: your name
 * @Date: 2019-11-07 16:41:18
 * @LastEditTime: 2019-11-16 14:24:10
 * @LastEditors: 潘金红
 * @Description: In User Settings Edit
 * @FilePath: \items\shopapp\src\components\MyNav.vue
 -->
<template>
<div class="he">
    <div class="head">
        <div class="headBox">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span @click="goLogin()" v-show="!isUser">注册/登录</span> 
          <span v-show="isUser">{{user}}</span> 
          <span @click="out()" id="out" v-show="isUser">退出</span>
        </div>
        <i class="el-icon-search" @click="goSearch()"></i>
    </div>
    <div class="headBottom">
        <div class="Bottom">
            <p>会员</p>
            <span>开通会员</span>
        </div>
        <div class="Bottom">
            <p>VIP会员</p>
            <span>开通会员</span>
        </div>
        <div class="Bottom">
            <p>VIP会员</p>
            <span>开通会员</span>
        </div>
        <div class="Bottom">
            <p>VIP会员</p>
            <span>开通会员</span>
        </div>
        <div class="Bottom">
            <p>VIP会员</p>
            <span>开通会员</span>
        </div>
        <div class="Bottom">
            <p>VIP会员</p>
            <span>开通会员</span>
        </div>
    </div>
</div>
</template>
<script>
  export default {
  name: 'MyNav',
    data() {
      return {
        imageUrl: '',
        isUser:false,
        user:''
      };
    },
    methods: {
      out(){
        if(confirm("确定要退出吗")){
          localStorage.removeItem("username");
          localStorage.removeItem("userphone");
          this.isUser=false;
        }
      },
      goLogin(){
        this.$router.push({path:"/LoginPage"});
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      goSearch(){
        this.$router.push({path:"/SearchPage"});
      }
    },
    created(){
      if(localStorage.getItem("username")!=null){
        this.user=localStorage.getItem("username");
        this.isUser=true;
      }else{
        if(localStorage.getItem("userphone")!=null){
            fetch(`/api/user/selectPhone?user_phone=${Number(localStorage.getItem("userphone"))}`)
            .then(res=>{
              console.log("短信登录返回");
              return res.json();
            })
            .then(data=>{
              console.log("data");
              this.user=data.user_name;
              this.isUser=true;

            })
            .catch(err=>{
              console.log(err);
            })
        }
        this.isUserfalse;
      }
    }
  }
</script>
<style scoped>
.he{
    background:#f5f7fa;
}
.head{
    height:.7rem;
    width:95%;
    display:flex;
    margin:auto;
    align-items: center;
    justify-content: space-between;
}
.headBox{
    width: 2rem;
    height: .7rem;
    line-height: .7rem;
    position:relative;
}
#out{
  position: absolute;
  top:0;
}
.head span{
    font-size:18px;
    color:#000000;
    margin-left: 0.1rem;
}
i{
    font-size:18px;
}
.headBottom{
    height:1rem;
    width:100%;
    display:flex;
    flex-shrink: 0;
    overflow-x:auto;
    margin:auto;
}
.headBottom .Bottom{
    width: 1rem;
    height: .7rem;
    margin: auto .05rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    background:white;
}
.Bottom p{
    font-size:17px;
    font-weight: bold;
    width: 1rem;
    color:#000000;
}
.Bottom span{
    font-size:13px;
    color:#979797;
    width: 1rem;
}

 .avatar-uploader,.el-upload {
    border: 1px dashed #d9d9d9;
    width: .5rem;
    height: .5rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    margin-top: .08rem;
    float: left;
    line-height: .5rem;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size:20px;
    color: #8c939d;
    width: .5rem;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
  }
  .avatar {
    width: .5rem;
    height: .5rem;
    display: block;
  }
</style>
