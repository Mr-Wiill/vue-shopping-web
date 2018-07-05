<template>
  <el-header class="header">
    <el-row class="header-logo">
      <el-col :span="6"><h2>Pizza点餐系统</h2></el-col>
      <div>div</div>
      <!--<el-col :span="12">
        <el-menu mode="horizontal">
          <el-menu-item index="1"><router-link :to="/home">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link :to="/menu">菜单</router-link></el-menu-item>
          <el-menu-item index="3"><router-link :to="/admin">管理</router-link></el-menu-item>
          <el-menu-item index="4"><router-link :to="/about">关于</router-link></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-menu>
          <el-menu-item index="1"><router-link :to="/login">登录</router-link></el-menu-item>
          <el-menu-item index="2"><router-link :to="/register">注册</router-link></el-menu-item>
        </el-menu>
      </el-col>-->
    </el-row>
  </el-header>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    background: #1b6d85;
    .header-logo{
      /*background: #ff00ff;*/
    }
  }
</style>
