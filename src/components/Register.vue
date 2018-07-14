<template>
  <el-form :model="user" :rules="rules" ref="ruleForm" label-width="80px" @submit.native.prevent>   <!--@submit.native.prevent阻止点击注册按钮后刷新页面-->
    <el-row class="login-title" type="flex" justify="center">
      <el-col :sapn="24"><h1>注册账号</h1></el-col>
    </el-row>
    <el-form-item label="账号" prop="eMail">
      <el-input v-model="user.account" placeholder="请输入邮箱"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPsd">
      <el-input type="password" v-model="user.confirmPsd" placeholder="重新输入密码"></el-input>
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
          userAccounts:[],
          dialogVisible:false,
          event:null,
          rules:{
            eMail:[
              {required:true,message:'请输入邮箱注册',trigger:'blur'},
              {type:'email',message:'请输入正确的邮箱地址',trigger:['blur','change']}
            ],
            password:[
              {required:true,message:'请输入密码',trigger:'blur'},
              {min:6, max:18,message:'长度在6至18个字符',trigger:['blur','change']}
            ],
            confirmPsd:[
              {required:true,message:'请确认密码',trigger:'blur'},
              {min:6, max:18,message:'长度在6至18个字符',trigger:['blur','change']}
            ],
          }
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
            this.$refs.ruleForm.validate((valid)=>{
              if (valid){
                this.$alert('注册成功')
              }else{
                console.log('error');
                return false;
              }
            })
            /*if (this.user.account !== "" && this.user.password !== "" && this.user.confirmPsd !== ""){
              let isNull =1;
              this.userAccounts.forEach((val)=>{
                if(val===this.user.account){
                  isNull = 0;
                }
              });
              if(isNull==0){
                this.$alert("账号已存在");
              }
              else if (this.user.password.length <6 || this.user.password.length >18) {
                this.$alert('密码长度在6-18之间')
              }
              else if (this.user.password !== this.user.confirmPsd){
                this.$alert('两次密码不一致')
              }
              else{
                axios.post('/users.json',this.user)
                  .then(response=>{
                    this.dialogVisible = true;
                    this.event = '注册成功';
                  })
              }
            }*/
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
