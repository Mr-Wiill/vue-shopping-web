<template>
  <div class="dialog">
    <el-container direction="vertical" class="dialog-main">
      <el-row>
        <el-col>提示</el-col>
      </el-row>
      <el-row class="dialog-main-title">
        <el-col :span="24">{{event}}</el-col>
      </el-row>
      <el-row class="dialog-main-btn" type="flex" justify="end">
        <el-col :span="12" v-if="cancel"><el-button @click="cancelled">取消</el-button></el-col>
        <el-col :span="12"><el-button @click="confirmed">确定</el-button></el-col>
      </el-row>
    </el-container>
    <div class="bg-fade" @click="cancelled"></div>
  </div>
</template>

<script>
  export default {
    name: "Dialog",
    props:['event'],
    data(){
      return {
        cancel:false,
      }
    },
    methods:{
      confirmed(){
        if (this.event=='注册成功') {
          this.$router.push('/login')
        }
      },
      /*关闭窗口*/
      cancelled(){
        this.$emit('closed');
      }
    },
  }
</script>

<style scoped>
  .dialog-main{
    width: 25%;
    height: 190px;
    z-index: 99;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px;
    -webkit-transform: translateY(-60%) translateX(-50%);
    -moz-transform: translateY(-60%) translateX(-50%);
    -ms-transform: translateY(-60%) translateX(-50%);
    -o-transform: translateY(-60%) translateX(-50%);
    transform: translateY(-60%) translateX(-50%);
    color: #000;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 1px 1px 5px #696969;
    -moz-box-shadow: 1px 1px 5px #696969;
    box-shadow: 1px 1px 5px #696969;
  }
  .bg-fade{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 1;
  }
  .dialog-main-title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 25px;
  }
  .dialog-main-btn{
    text-align: center;
  }
</style>
