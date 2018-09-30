<template>
  <el-container class="app-main" direction="vertical">
    <el-row class="history-order-head" type="flex" align="middle">
      <el-col :span="15" ><h4>已购买的商品：</h4></el-col>
      <el-col class="order-search-btn" :span="6">
        <el-input v-model="inputData" placeholder="请输入订单号"></el-input>
        <a><i class="el-icon-search"></i></a>
      </el-col>
    </el-row>
    <el-container direction="vertical" class="order-main">
      <el-row class="menu-item-head">
        <el-col :span="4">{{titleList.orderNum}}</el-col>
        <el-col :span="6">{{titleList.goodsName}}</el-col>
        <el-col :span="3">{{titleList.goodsPrice}}</el-col>
        <el-col :span="3">{{titleList.number}}</el-col>
        <el-col :span="4">{{titleList.orderTime}}</el-col>
        <el-col :span="4">{{titleList.total}}</el-col>
      </el-row>
      <el-row v-show="orderList.length>0" class="menu-item" type="flex" align="middle"
              v-for="order in orderList"  :key="order.orderNum">
        <el-col :span="4" >{{order.orderNum}}</el-col>
        <el-col :span="12">
          <el-row class="goods-list" v-for="pizza in order.goods" :key="pizza.size+Math.random()">
            <el-row>
              <el-col :span="12">{{pizza.goods}}{{'（'+pizza.size+'寸）'}}</el-col>
              <el-col :span="6">{{pizza.price+'元'}}</el-col>
              <el-col :span="6">{{pizza.num}}</el-col>
            </el-row>
          </el-row>
        </el-col>
        <el-col :span="4">{{order.orderTime}}</el-col>
        <el-col :span="4">{{order.totalPrice}}</el-col>
      </el-row>
      <el-row v-if="orderList.length==0" class="none-pizza">
        <el-col :span="24">订单为空</el-col>
      </el-row>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Orders",
    data(){
      return {
        titleList:{
          orderNum:'订单号',
          goodsName:'商品名称',
          goodsPrice:'商品价格',
          number:'数量',
          orderTime:'下单时间',
          total:'总价格',
        },
        inputData:'',
      }
    },
    methods:{
      getData(){
        if (this.isLogin){
          this.axios.get('/orders.json')
            .then((res)=>{
              let data = res.data;
              let orders = [];
              for (let key in data){
                orders.push(data[key])
              }
              this.$store.commit('getOrder',orders);
            })
        } else{
          this.$store.commit('getOrder',[])
        }
      },
    },
    created(){
      this.getData()
    },
    computed:{
      orderList(){
        let orders =  this.$store.getters.getOrders;
        if (this.inputData!==''){
          return orders.filter((order)=>{
            return order.orderNum.match(this.inputData);
          })
        } else {
          return orders
        }
      },
      isLogin(){
        return this.$store.getters.isLogin
      }
    },
    beforeRouteEnter(to,from,next){
      next(vm=>{
        if (!vm.isLogin){
          vm.$alert('您还未登录，请先登录！',{
            type:'warning',
            callback:action=>{
              vm.$router.push('/login')
            }
          })
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .app-main{
    .history-order-head{
      width: 100%;
      height: auto;
      .order-search-btn{
        position: relative;
        a{
          width: 40px;
          height: 40px;
          position: absolute;
          right: 0px;
          top: 0px;
          text-align: center;
          line-height: 40px;
          cursor: pointer;
        }
      }
    }
    .menu-item-head{
      background: #909399;
      text-align: center;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      font-size: 14px;
      color: #fff;
    }
    .order-main{
      margin: 20px 0;
      border: 1px solid #eee;
      box-shadow: 0 0 5px #eee;
      /*padding-bottom: 40px;*/
      .menu-item-head .el-col{
        font-size: 15px;
      }
      .menu-item{
        text-align: center;
        border-bottom: 1px solid #eee;
        padding: 20px 0;
        font-size: 14px;
        color: #696969;
        /*margin-bottom: 20px;*/
        .item-pizza-info{
          margin: 10px 0;
        }
        .goods-list{
          line-height: 40px;
        }
      }
      .menu-item:hover{
        background: #F5F5F5;
      }
      .none-pizza{
        text-align: center;
        color: #cccccc;
        line-height: 100px;
      }
    }

  }
</style>
