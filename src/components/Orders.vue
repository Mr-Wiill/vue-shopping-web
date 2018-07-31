<template>
  <el-container class="app-main">
    <el-row class="history-order-main">

    </el-row>
  </el-container>
</template>

<script>
  export default {
    name: "Orders",
    data(){
      return {
        aside:[
          {
            index:'1',
            link:'historyLink',
            name:'历史订单'
          },
          {
            index:'2',
            link:'expressLink',
            name:'物流信息'
          },
          {
            index:'3',
            link:'guideLink',
            name:'点餐指南'
          },
          {
            index:'4',
            link:'contactLink',
            name:'联系我们'
          }
        ],
        checkIndex:1,
      }
    },
    methods:{
      toggle(val){
        this.checkIndex = val;
      }
    }
  }
</script>

<style scoped lang="less">
  .app-main{
    .history-order-main{
      width: 100%;
      height: auto;

    }
  }
</style>
