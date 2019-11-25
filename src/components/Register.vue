<template>
<div class="box">
<el-main>
    <el-form :model="ReginForm" ref="ReginForm" :rules="rule" class="regform" label-width="0">
      <!-- <img src="static/img/logo.gif" class="img"> -->
      <span class="iconfont icon-houtui" @click="back()"></span>
        <h3 class="login-text">注册</h3>
        <el-form-item prop="username">
            <el-input type="text"  class="inputAll" v-model="ReginForm.username" placeholder="用户名,请输入5到9位的字母"></el-input>
        </el-form-item>
        <el-form-item prop="tel">
            <el-input type="text"  class="inputAll" v-model.number="ReginForm.tel" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password"  class="inputAll" v-model="ReginForm.password" placeholder="密码,字母开头,6~10,字符数字和下划线"></el-input>
        </el-form-item>
        <el-form-item prop="regpassword">
            <el-input type="password"  class="inputAll" v-model="ReginForm.regpassword" placeholder="重复密码"></el-input>
        </el-form-item>
        <div class="getYzm">
          <input type="text" v-model="yzm" placeholder="请输入短信验证码"><span @click="getYzm()">获取验证码</span>
        </div>
        <el-form-item>
          <el-button type="register" class="submitBtn"  @click="submit">注册</el-button>
        </el-form-item>
    </el-form>
</el-main>
  </div>     
</template>
<script> 
import { Toast,Indicator } from 'mint-ui';
export default {
  name:'Register',
  data () {
    let usernameCheck=(rule,value,callback)=>{
      var reg1=/^[a-zA-Z]{5,9}$/;
      if(value===''){
        return callback(new Error('用户名是必须的'));
        } else if(!reg1.test(value)){
          return callback("请输入5到九位的字母");
      } else {
        callback();
      }
    };
    let telCheck = (rule, value, callback) => {
      var reg=/^1\d{10}$/;
      if (value===''){
        return callback(new Error('电话号码是必须的'));
        } else if(!reg.test(value)){
            return callback("请输入以1开头的11位手机号!");
      } else {
        callback();
      }
    };
    let passwordCheck = (rule, value, callback) => {
      var res=/^[a-zA-Z]\w{5,9}$/;
    if (value === '') {
        return callback(new Error('密码是必须的'));
        } else if(!res.test(value)){
          return callback("以字母开头，长度为6~10，只含字符、数字和下划线");
    }  else {
          callback();
        }
    };
    let regpasswordCheck = (rule, value, callback) => {
      if (value ==='') {
          return callback(new Error('不允许为空'));
          } else if(value !== this.ReginForm.password){
            return callback("与密码不一致");
      }else{
          callback();
      }
    };
    return {
      yzm:"",
      ReginForm: {
        password: '',
        tel: '',
        username:'',
        regpassword:''
      },
      logining: false,
      rule: {
        username:[
        {
          required: true,
          validator: usernameCheck,
          trigger: 'blur'
        }
        ],
        password:[
        {
          required: true,
          validator: passwordCheck,
          trigger: 'blur'
        }
        ],
        tel: [
        {
          required: true,
          validator: telCheck,
          trigger: 'blur'
        }
        ],
        regpassword: [
        {
          required: true,
          validator: regpasswordCheck,
          trigger: 'blur'
        }
        ]
      }
    }
  },
  methods:{
    // user(){
    //   fetch("api/user/short?user_phone="+this.ReginForm.tel)
    //   .then(res=>{
    //     if(res.??==true){
    //       alert("手机号已存在");
    //     }else{
    //       return
    //     }
    //   })
    // },
    getYzm(){
      fetch("/api/user/short?user_phone="+Number(this.ReginForm.tel))
      .then(res=>{

      })
      .then(data=>{

      })
      .catch(err=>{
        console.log();
      })
    },
    back(){
      this.$router.go(-1);
    },
    submit(){
      // if(this.ReginForm.tel||this.ReginForm.password||this.ReginForm.regpassword||this.ReginForm.username==""){
      //   alert("不能存在空的输入");
      //   return;
      // }
       Indicator.open({
          text: '注册中...',
          spinnerType: 'fading-circle',
      }); 
      fetch(`api/user/insert?user_name=${this.ReginForm.username}&&user_pwd=${this.ReginForm.password}&&user_phone=${Number(this.ReginForm.tel)}&&user_yzm=${Number(this.yzm)}`)
      .then(res=>{
        console.log(res);
        return res.json();
      })
      .then(data=>{
        console.log("这是数据");
        console.log(data);
        if(data.ins_cg=="zcok"){
            Indicator.close();
            Toast({
                message: '注册成功',
                position: 'center',
                duration: 2000
            });
            this.$router.push({path:"/LoginPage"});
        }else{
            Toast({
                message: '注册失败',
                position: 'center',
                duration: 2000
            });
            Indicator.close();
        }
      })
      .then(err=>{
        console.log(err);
      })
    }
  }
}
</script>
<style  scoped>
.getYzm{
  width:100%;
  margin-bottom:.2rem;
}
.getYzm input{
  width:1.8rem;
  height:.38rem;
  border:1px solid #99d9f3;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
  color:#606266;
  text-indent:15px;
}
.getYzm span{
  background-color:#ececec;
  padding:10px 8px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color:#fa6125;
}
.inputAll{
  border:1px solid #99d9f3!important;
  border-radius: 5px;
  outline: none;
}
.regform {
 margin: .2rem auto;
 width: 80%;
 background: #fff;
 box-shadow: 0 0 10px #99d9f3;
 padding: .2rem .2rem 0 .2rem;
 border-radius: 25px; 
 height: 5rem;
}
.regform .img{
  margin:0px auto;
  display:block;
}
.submitBtn {
  width: 100%;
  margin: 0px auto;
  display: block;
  background-color:#99d9f3;
  color:#fff;
}
.to {
 color: #FA5555;
 cursor: pointer;
}
.auth_input{
  width:1.2rem;
  height:38px;
  margin-bottom:.2rem;
  border:1px solid #99d9f3;
  padding-left:.2rem;
  border-radius: 8%;
  text-align:center;
}
.el-form-item{
    margin-bottom: .2rem;
}
.el-form-item__content{
  text-align: center;
}
.login-text{
 text-align: center;
 margin-bottom:.2rem;
}
.spanBox{
  font-size:14px;
  color:gray;
}
</style>