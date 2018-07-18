<template>
  <el-container class="login-register-main">
    <el-form :model="user" label-width="80px" @submit.native.prevent>   <!--@submit.native.prevent阻止点击注册按钮后刷新页面-->
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
    </el-form>
  </el-container>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Register",
      data(){
        return {
          user:{
            account: '',
            password:'',
            confirmPsd:'',
          },
          userAccounts:[],
          dialogVisible:false,
          event:null,
        }
      },
      created(){
        this.selectData();
      },
      methods:{
        selectData(){
          axios.get('/users.json')
            .then((result)=>{
              let arr = [];
              for (let key in result.data){
                arr.push(result.data[key])    //获取用户信息的json对象
              }
              arr.forEach((val)=>{
                for (let key in val){
                  if(key == 'account'){
                    this.userAccounts.push(val[key]);       //获取已经注册了的用户账号
                  }
                }
              })
            })
        },
        onSubmit(){
          if (this.user.account !== "" && this.user.password !== "" && this.user.confirmPsd !== ""){
            let isNull =1;
            let regEMail = /^[A-Za-z0-9-_.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;   //邮箱正则表达式
            this.userAccounts.forEach((val)=>{
              if(val===this.user.account){
                isNull = 0;
              }
            });
            if(isNull==0){
              this.$alert("账号已存在",{
                type: 'warning',
                callback:action=>{}
              });
            }
            else if (!regEMail.test(this.user.account)){      //验证邮箱
              this.$alert('邮箱格式不正确',{
                type:'error',
                callback:action=>{}
              })
            }
            else if (this.user.password.length <6 || this.user.password.length >18) {
              this.$alert('密码长度在6-18之间',{
                type:'warning',
                callback:action=>{}
              })
            }
            else if (this.user.password !== this.user.confirmPsd){
              this.$alert('两次密码不一致',{
                type:'warning',
                callback:action=>{}
              })
            }
            else{
              this.signUp();
            }
          }
        },
        signUp(){
          this.$confirm('请确认注册',{
            confirmButtonText:'确定',
            cancelButtonText:'取消',
            type:'info'
          }).then(response=>{
            axios.post('/users.json',this.user)
              .then(response=>{
                this.$router.push('/login')
              });
            this.$message({type:'info',message:'注册成功'})
          }).catch(response=>{
            this.$message({type:'info',message:'已取消注册'})
          })
        },
      }
    }
</script>

<style scoped lang="less">
  .el-form-item{
    margin-left: -20px;
    input {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #ccc;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: 0;
      padding: 0 15px;
      -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
    }
  }
</style>
