<template>
  <el-form label-width="75px" @submit.native.prevent>
    <el-row class="login-title" type="flex" justify="center">
      <el-col :sapn="24"><h1>注册账号</h1></el-col>
    </el-row>
    <el-form-item label="账号">
      <el-input type="email" v-model="user.account" placeholder="请输入邮箱" required="required"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="user.password" placeholder="请输入密码" required="required"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input type="password" v-model="user.confirmPsd" placeholder="重新输入密码" required="required"></el-input>
    </el-form-item>
    <el-form-item class="submit-btn">
      <button @click="onSubmit">注册</button>
    </el-form-item>
    <Dialog v-if="dialogVisible" :event="event" @closed="closeDialog($event)"></Dialog>
  </el-form>
</template>

<script>
  import axios from 'axios'
  import Dialog from "./dialog/Dialog";
    export default {
        name: "Register",
      components: {Dialog},
      data(){
        return {
          user:{
            account: '',
            password:'',
            confirmPsd:'',
          },
          dialogVisible:false,
          event:null,
        }
      },
      methods:{
          onSubmit(){
            if (this.user.account !== "" && this.user.password !== "" && this.user.confirmPsd !== ""){
              if (this.user.password == this.user.confirmPsd){
                axios.post('/users.json',this.user)
                  .then(response=>{
                    this.dialogVisible = true;
                    this.event = '注册成功';
                  })

              } else {
                this.dialogVisible = true;
                this.event = '两次密码不一致，请重新输入!'
              }
            }
          },
        closeDialog(event,val){
          this.dialogVisible=val;
        }
      }
    }
</script>

<style scoped lang="less">
  .el-form-item{
    margin-left: -20px;
  }
</style>
