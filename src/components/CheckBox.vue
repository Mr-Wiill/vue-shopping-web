<template>
  <el-table ref="multipleTable" :data="appList" border tooltip-effect="dark" style="width: 100%;height: 380px;overflow:auto" @selection-change="changeFun">
    <el-table-column type="selection" width="55" class="selection" prop='uuid' :selectable='checkboxInit' @selection-change="changeFun"></el-table-column>
    <el-table-column label="">
      <template scope="scope"></template>
    </el-table-column>
    <el-table-column prop="username" label="username"></el-table-column>
    <el-table-column prop="createTime" label="创建时间"></el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "CheckBox"
    }
</script>

<style scoped>

</style>
