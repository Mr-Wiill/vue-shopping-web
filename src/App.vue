<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <el-container class="about-display">
      <el-row class="about-display-row"  type="flex" justify="space-between">
        <!--路由复用-->
        <el-col :span="7"><router-view name="guide"></router-view></el-col>
        <el-col :span="7"><router-view name="express"></router-view></el-col>
        <el-col :span="7"><router-view name="history"></router-view></el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  name: 'App',
  components:{
    appHeader:Header,
  }
}
</script>

<style lang="less">
  body{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    margin: 0;
    background: #eeeeee;
    min-width: 889px;
    #app {
      h1,h2,h3,h4,h5{
        margin: 0;
        position: relative;
      }
      a{
        text-decoration: none;
      }
      ul, li{
        list-style: none;
      }
      .app-main{
        max-width: 1100px;
        margin: 20px auto;
        -webkit-box-shadow: 0px 0px 15px #ccc;
        -moz-box-shadow:0px 0px 15px #ccc;
        box-shadow: 0px 0px 15px #ccc;
        background: #fff;
        padding: 20px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;

      }
      .about-content{
        min-height: 240px;
        border: 2px solid #eeeeee;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        line-height: 35px;
        padding: 0 20px;
        .about-content-head{
          border-bottom: 1px solid #eeeeee;
        }
        .about-content-main{
          padding: 10px 0;
        }
      }
      .about-display{
        max-width: 1100px;
        margin: 20px auto;
        .about-display-row{
          width: 100%;
          .about-content{
            background: #fff;
            border: 0;
            -webkit-box-shadow: 0px 0px 15px #ccc;
            -moz-box-shadow: 0px 0px 15px #ccc;
            box-shadow: 0px 0px 15px #ccc;
            .about-head-item{
              display: flex;
              justify-content: center;
            }
          }
        }
      }
      .login-register-main{
        .el-form{
          width: 30vw;
          height: auto;
          margin: 20px auto;
          -webkit-box-shadow: 2px 2px 2px #ccc;
          -moz-box-shadow:2px 2px 2px #ccc;
          box-shadow: 2px 2px 2px #ccc;
          background: #fff;
          padding: 3% 5%;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
          -webkit-box-shadow: 0px 0px 15px #ccc;
          -moz-box-shadow:  0px 0px 15px #ccc;
          box-shadow:  0px 0px 15px #ccc;
          .login-title{
            width: 100%;
            text-align: center;
            margin-bottom: 30px;
            color: #696969;
          }
          .submit-btn{
            text-align:center;
            button{
              width: 100%;
              height: 40px;
              background: #62D2CE;
              color: #303133;
              border: 0;
              cursor: pointer;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
            }
            button:hover{
              background: #4CA3A0;
              color: #fff;
              transition: .3s;
            }
          }
        }
      }
    }
  }
</style>
