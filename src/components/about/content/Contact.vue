<template>
  <el-container direction="vertical" class="about-content">
    <el-row class="about-content-head">
      <el-col :span="3" class="about-head-item">
        <router-link :to="{name:'personNameLink'}">姓名</router-link>
      </el-col>
      <el-col :span="3" class="about-head-item">
        <router-link :to="{name:'phoneLink'}">手机</router-link>
      </el-col>
    </el-row>
    <el-row class="about-content-main">
      <el-col :span="24">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped lang="less">

</style>
