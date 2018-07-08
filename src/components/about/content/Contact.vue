<template>
  <el-container class="contact" direction="vertical">
    <el-row>
      <el-col :span="3"><router-link :to="{name:'personNameLink'}">姓名</router-link></el-col>
      <el-col :span="3"><router-link :to="{name:'phoneLink'}">手机</router-link></el-col>
    </el-row>
    <el-row class="contact-main">
      <el-col :span="24"><router-view></router-view></el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped lang="less">
  .contact{
    .contact-main{
      width: 100%;
      height: auto;
      margin-top: 20px;
    }
  }
</style>
