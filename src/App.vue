<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
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
    font-family: '微软雅黑',"Times New Roman";
    margin: 0;
    background: #eeeeee;
    min-width: 889px;
    #app {
      h1,h2,h3,h4,h5{
        margin: 0;
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
        -webkit-box-shadow: 2px 2px 2px #ccc;
        -moz-box-shadow:2px 2px 2px #ccc;
        box-shadow: 2px 2px 2px #ccc;
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
      }
      .about-display{
        max-width: 1100px;
        margin: 20px auto;
        .about-display-row{
          width: 100%;
          .about-content{
            background: #fff;
            border: 2px solid #e6e6e6;
          }
        }
      }
    }
  }
</style>
