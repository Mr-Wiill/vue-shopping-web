<template>
  <el-form label-width="50px">
    <el-row class="login-title" type="flex" justify="center">
      <el-col :sapn="24"><img src="../assets/icon.png" /></el-col>
    </el-row>
    <el-form-item label="账号">
      <el-input v-model="user.account" placeholder="请输入账号" required="required"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="user.password" placeholder="请输入密码" required="required"></el-input>
    </el-form-item>
    <el-form-item class="submit-btn">
      <button>登录</button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return {
            user:{
              account: null,
              password:null
            }
          }
      }
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
