<template>
  <el-container direction="vertical" class="app-main">
    <el-row class="app-home-bg">
      <el-col class="app-home-content" :span="24">
        <h2>欢迎大家品尝pizza</h2>
        <el-button class="btn" @click="goTo">Let's order!</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "Home",
      methods:{
        goTo(){
          this.$router.push('/menu')
        }
      }
    }
</script>

<style scoped lang="less">
  .app-main{
    .app-home-bg{
      background: url("../assets/pizza.jpg");
      height: 85vh;
      min-height: 500px;
      padding: 15%;
      .app-home-content{
        line-height: 180px;
        background: rgba(1,1,1,.5);
        margin: 0 auto;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        text-align: center;
        padding: 5%;
        line-height: 60px;
        color: #fff;
        button{
          background: #62D2CE;
          border: 0;
          color: #3B3B3B;
        }
        button:hover{
          background: #4CA3A0;
          color: #fff;
        }
      }
    }
  }
</style>
