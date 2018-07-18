<template>
  <el-container class="login-register-main">
    <el-form label-width="50px" @submit.native.prevent>
      <el-row class="login-title" type="flex" justify="center">
        <el-col :sapn="24"><img src="../assets/icon.png" /></el-col>
      </el-row>
      <el-form-item label="账号">
        <el-input type="email" v-model="user.account" placeholder="请输入账号" required="required"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.password" placeholder="请输入密码" required="required"></el-input>
      </el-form-item>
      <el-form-item class="submit-btn">
        <button @click="login">登录</button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Login",
      data(){
          return {
            user:{
              account: '',
              password:''
            },
          }
      },
      methods:{
        login(){
          axios.get('/users.json')
            .then(response=>{
              let users = [];
              for (let key in response.data){
                users.push(response.data[key])
              }
              /*使用过滤器来匹配用户输入的账号和密码是否已经注册*/
              let result = users.filter((user)=>{   //若匹配成功返回一个符合条件的数组，若匹配失败返回空数组
                return this.user.account === user.account && this.user.password === user.password
              });
              if (result !=null && result.length >0){     //返回数组不为空且长度大于0，说明账号密码正确
                this.$message({type:'info',message:'登录成功'});
                setTimeout(()=>{
                  this.$router.push('/')      //登录成功后跳转首页
                },1000)
              } else {    //否则提示错误
                this.$alert('账号或密码错误',{
                  type:'error',
                  callback:action=>{}
                })
              }
            });
        }
      },

    }
</script>

<style scoped lang="less">
  .login-title{
    img{
      width: 100px;
      height: auto;
    }
  }
  .el-form-item{
    margin-left: -20px;
  }
</style>
