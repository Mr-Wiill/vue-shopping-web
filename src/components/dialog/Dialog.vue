<template>
  <div class="dialog">
    <el-container direction="vertical" class="dialog-main">
      <el-row class="dialog-main-title">
        <el-col :span="24">修改商品</el-col>
      </el-row>
      <el-form label-width="70px" class="add-goods-list" @submit.native.prevent>
        <el-form-item label="商品名称">
          <el-input v-model="pizza.name" placeholder="请输入商品名称" required="required"></el-input>
        </el-form-item>
        <el-form-item label="商品尺寸">
          <el-input v-model="pizza.size" placeholder="请输入商品尺寸" required="required"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="pizza.price" placeholder="请输入商品价格" required="required"></el-input>
        </el-form-item>
      </el-form>
      <el-row class="dialog-main-btn" type="flex" justify="end">
        <el-col :span="12"><el-button @click="cancelled">取消</el-button></el-col>
        <el-col :span="12"><el-button @click="confirmed">确定</el-button></el-col>
      </el-row>
    </el-container>
    <div class="bg-fade" @click="cancelled"></div>
  </div>
</template>

<script>
  export default {
    name: "Dialog",
    props:['pizza'],
    data(){
      return {
      }
    },
    methods:{
      confirmed(){
        this.axios.put('/pizza/'+this.pizza.id+'/.json',{
          name:this.pizza.name,
          size:this.pizza.size,
          price:this.pizza.price
        })
          .then(res=>{
            this.$message('修改成功');
            this.cancelled()
          })
      },
      /*关闭窗口*/
      cancelled(){
        this.$emit('closed');
      }
    },
    created(){
    }
  }
</script>

<style scoped>
  .dialog-main{
    width: 30%;
    height: auto;
    z-index: 99;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px 40px;
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
    margin: 20px 0;
  }
</style>
