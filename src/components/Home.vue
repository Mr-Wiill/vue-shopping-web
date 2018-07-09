<template>
  <el-container direction="vertical" class="app-main">
    <el-row class="app-home-bg">
      <el-col class="app-home-content" :span="24">
        <h2>欢迎大家品尝pizza</h2>
        <el-button><router-link to="/menu">Let's order!</router-link></el-button>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="less">
  .app-main{
    .app-home-bg{
      background: url("../assets/pizza.jpg");
      height: 85vh;
      padding: 15%;
      .app-home-content{
        font-family: '微软雅黑', "Times New Roman";
        height: 100%;
        background: rgba(1,1,1,.5);
        margin: 0 auto;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        text-align: center;
        padding: 5%;
        line-height: 80px;
        color: #fff;
        button{
          background: limegreen;
          border: 0;
          a{
            color: #fff;
          }
        }
        button:hover{
          background: forestgreen;
          color: #fff;
        }
      }
    }
  }
</style>
