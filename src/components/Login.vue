<template>
<div class="box">
<el-main>
    <el-form :model="ReginForm" ref="ReginForm" :rules="rule" class="regform">
      <!-- <img src="static/img/logo.gif" class="img"> -->
      <span class="iconfont icon-houtui" @click="back()"></span>
        <h3 class="login-text">登录</h3>
            <el-form-item prop="tel" v-show="telBox">
                <el-input type="text" v-model.number="ReginForm.tel" class="tel-num" placeholder="手机号码"></el-input>
            </el-form-item>
            <el-form-item prop="tel"  v-show="!telBox">
                <el-input type="text" v-model="ReginForm.username" class="tel-num" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ReginForm.password" class="tel-num" placeholder="输入密码" v-show="!telBox"></el-input>
            </el-form-item>
            <div v-show="telBox">
              <input class="auth_input" type="text" v-model="verification"  placeholder="输入验证码" />
              <button v-show="telBox" id="auth_text" @click="getAuthCode()">获取验证码</button>
              <span v-show="!telBox" class="auth_text"> <span class="auth_text_blue"></span> 秒之后重新发送验证码</span> 
            </div>
            <el-form-item>
              <!-- 验证码登录 -->
            <el-button type="login" class="submitBtn" id="submitBtn"  @click="submit()" v-show="submitBox">
            登录</el-button>
            <!-- 密码登录 -->
            <el-button type="login" class="submitBtn" id="mitBtn"  @click="mit()" v-show="mitBox">
            登录</el-button>
          </el-form-item>
          <el-form-item class="reBox">
            <span class="spanBox"><router-link to="/RegisterPage" color="blue">立即注册</router-link></span>
            <span class="spanBox" @click="funMi()" v-show="telBox"> 密码登录</span>
            <span class="spanBox" @click="funYan()" v-show="!telBox"> 验证码登录</span>
            <span class="spanBox"><router-link to="/XiupassPage" color="red">找回密码</router-link></span>
          </el-form-item>
    </el-form>
</el-main>
  </div>     
</template>
<script> 
import { Toast,Indicator } from 'mint-ui';
export default {
  name:'Login',
  data () {
    let telCheck = (rule, value, callback) => {
      // var reg=/^1\d{10}$/;
      var reg=/^[a-zA-Z]\w{5,11}$/;
      // if (value===''){
      //   // return callback(new Error('电话号码是必须的'));
      //   return callback(new Error('用户名是必须的'));
      //   } else 
      // if(!reg.test(value)){
      //       // return callback("请输入以1开头的11位手机号!");
      //       return callback("用户名!");
      // } else {
      //   callback();
      // }
    };
    let passwordCheck = (rule, value, callback) => {
      var res=/^[a-zA-Z]\w{5,9}$/;
    // if (value === '') {
    //     return callback(new Error('密码是必须的'));
    //     } else if(!res.test(value)){
    //       return callback("以字母开头，长度为6~10，只含字符、数字和下划线");
    // }  else {
    //       callback();
    //     }
    };
    return {
      telBox:true,
      // passBox:false,
      submitBox:true,
      mitBox:false,
      ReginForm: {
        password: '',
        tel: '',
        username:''
      },
      logining: false,
      sendAuthCode:true,
      verification:"",
      rule: {
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
        ]
      }
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    funMi:function(){
      this.telBox=false;
      this.submitBox=false;
      this.mitBox=true;
    },
    funYan:function(){
      this.telBox=true;
      this.submitBox=true;
      this.mitBox=false;
    },
    getAuthCode:function () {
      if(this.ReginForm.tel==""){
        alert("请输入您的电话号码");
        return;
      }
      Indicator.open({
          text: '获取中...',
          spinnerType: 'fading-circle',
      }); 
      fetch("/api/user/short?user_phone="+this.ReginForm.tel)
      .then(res=>{
        console.log(res);
        // return res.json();
        if(res.ok==true&&res.status==200){
          Toast({
              message: '获取成功',
              position: 'center',
              duration: 2000
          });
          Indicator.close();
        }else{
          Toast({
              message: '获取失败',
              position: 'center',
              duration: 2000
          });
          Indicator.close();
        }
      })
      .then(data=>{

      })
      .catch(err=>{
        console.log(err);
      })
    },
    submit(){
      Indicator.open({
          text: '登录中...',
          spinnerType: 'fading-circle',
      }); 
      fetch(`/api/user/logintel?user_phone=${Number(this.ReginForm.tel)}&&user_yzm=${Number(this.verification)}`)
      .then(res=>{
        console.log("返回值");
        console.log(res);
        return res.json();
      })
      .then(data=>{
         console.log("data");
         console.log(data);
         if(data.fh_cg=="yzmnok"){
             Indicator.close();
             this.$router.push({path:"/PersonalPage"});
             localStorage.setItem('userphone',this.ReginForm.tel);//保存电话
         }else{
            Toast({
                message: '电话或验证码错误',
                position: 'center',
                duration: 2000
            });
            Indicator.close();
         }
      })
      .catch(err=>{
        console.log(err);
      })
    },
    mit(){
      Indicator.open({
          text: '登录中...',
          spinnerType: 'fading-circle',
      }); 
      console.log("name="+this.username&&"pass="+this.password);
      fetch(`/api/user/login?user_name=${this.ReginForm.username}&user_pwd=${this.ReginForm.password}`)
      .then(res=>{
        console.log(res);
        if(res.ok==true&&res.status==200){
            Indicator.close();
            Toast({
                message: '登录成功',
                position: 'center',
                duration: 2000
            });
            localStorage.setItem('username',this.ReginForm.username);
            this.$router.push({path:'/PersonalPage'});
        }else{
          Toast({
                message: '登录失败',
                position: 'center',
                duration: 2000
            });
        }
        
      })
      .then(data=>{

      })
      .catch(err=>{
        console.log(err);
      });
    }
  }
}
</script>
<style  scoped>
.tel-num{
  border:1px solid #99d9f3!important;
  outline: none;
  border-radius:5px;
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
#submitBtn {
  width: 100%;
  margin: 20px auto;
  display: block;
  background-color:#99d9f3;
  color:#fff;
  outline: none;
}
#mitBtn{
  width:100%;
  background-color:#99d9f3;
  color:#fff;
  margin:0 auto;
}
.to {
 color: #FA5555;
 cursor: pointer;
}
#auth_text{
  outline: none;
  color:#fa6125;
  width:.8rem;
  border-radius:5px;
  height:.41rem;
  background-color:#fff;
  border:1px solid #99d9f3;
  transform: translateY(2px);
}
.auth_input{
  width:1.8rem;
  height:.38rem;
  margin-bottom:.2rem;
  border:1px solid #99d9f3;
  /* padding-left:.2rem; */
  border-radius: 5px;
  text-align:center;
  outline: none;
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
  text-align:center; 
}
.spanBox a{
  float:left;
  margin: 0px .19rem;
}
.submitBtn {
    width: 47%;
}
.reBox{
  text-align:center;
}
</style>