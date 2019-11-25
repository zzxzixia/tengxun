<template>
<div class="box">
<span class="iconfont icon-houtui" @click="back()"></span>
<el-main>
    <el-form :model="ReginForm" ref="ReginForm" :rules="rule" class="regform" label-width="0">
        <h3 class="login-text">修改密码</h3>
            <el-form-item prop="newpassword">新密码：
                <el-input type="password" v-model="ReginForm.newpassword" placeholder="输入新密码"></el-input>
            </el-form-item>
            <el-form-item prop="resnewpassword">重复密码：
                <el-input type="password" v-model="ReginForm.resnewpassword" placeholder="重复新密码"></el-input>
            </el-form-item>
        <el-form-item>
          <el-button  class="submitBtn" @login="sure()" >确定</el-button>
          <el-button @click="reset()">重置</el-button>
        </el-form-item>
          <el-button class="btn" @click="goLoginPage()">去登录</el-button>
    </el-form>
</el-main>
  </div>     
</template>
<script> 
export default {
  name:'Xiupass',
  data () {
    let newpasswordCheck = (rule, value, callback) => {
      var res=/^[a-zA-Z]\w{5,9}$/;
    if (value === '') {
        return callback(new Error('密码是必须的'));
        } else if(!res.test(value)){
          return callback("以字母开头，长度为6~10，只含字符、数字和下划线");
    }  else {
          callback();
        }
    };
    let resnewpasswordCheck = (rule, value, callback) => {
      if (value ==='') {
          return callback(new Error('不允许为空'));
          } else if(value !== this.ReginForm.newpassword){
            return callback("与新密码不一致");
      }else{
          callback();
      }
    };
    return {
      ReginForm: {
        resnewpassword:'',
        newpassword:''
      },
      rule: {
        newpassword:[
        {
          required: true,
          validator: newpasswordCheck,
          trigger: 'blur'
        }
        ],
        resnewpassword: [
        {
          required: true,
          validator: resnewpasswordCheck,
          trigger: 'blur'
        }
        ]
      }
    }
  },
    methods:{
      sure(){
        fetch("api/user/zhaohpwd?user_pwd="+this.ReginForm.newpassword)
        .then(res=>{
          if(res=="ok"){
            alert("修改成功");
          }else{
            alert("修改失败");
          }
        })
        .then(data=>{
        })
        .catch(err=>{
          console.log(err);
        })
      },
      reset(){
        this.ReginForm.newpassword="";
        this.ReginForm.resnewpassword="";
      },
      goLoginPage(){
        this.$router.push({path:"/LoginPage"});
      },
      back(){
        this.$router.go(-1);
      }
    }
}
</script>
<style  scoped>
.el-form-item__label{
  width:.3rem;
  display:block;
}
h3{
  text-align:center;
  margin-top: .4rem;
  margin-bottom: .3rem;
}
.submitBtn{
  margin-left:.8rem;
  margin-right:.2rem;
}
.el-button{
  text-align:center;
  margin-top:.1rem;
}
.btn{
  margin: .2rem auto;
  width: 2rem;
  height: 0.4rem;
  background: #99d9f3;
  display: block;
  color:white;
}
.icon-houtui{
  line-height: .4rem;
  font-size: .2rem;
  padding-left:10px;
}
</style>