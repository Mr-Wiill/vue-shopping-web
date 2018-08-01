<template>
  <el-container class="app-main">
    <el-row class="menu-main">
      <el-col :span="15" class="about-content">
        <el-container direction="vertical">
          <el-row class="about-content-head">
            <h4>{{listNav.listHead}}</h4>
          </el-row>
          <el-container direction="vertical">
            <el-row class="menu-item menu-item-head">
              <el-col :span="6">{{listNav.category}}</el-col>
              <el-col :span="6">{{listNav.size}}</el-col>
              <el-col :span="6">{{listNav.price}}</el-col>
              <el-col :span="6">{{listNav.order}}</el-col>
            </el-row>
            <el-row v-show="pizzaList.length>0" class="menu-item" type="flex" align="middle"
                    v-for="pizza in pizzaList"  :key="Math.random()">
              <el-col :span="6" class="item-pizza-name">{{pizza.name}}</el-col>
              <el-col :span="18">
                <el-row class="item-pizza-info">
                  <el-col :span="8">{{pizza.size+' 寸'}}</el-col>
                  <el-col :span="8">{{pizza.price+' RMB'}}</el-col>
                  <el-col :span="8"><button @click="addToCart(pizza.name,pizza.size,pizza.price)"><i class="el-icon-plus"></i></button></el-col>
                </el-row>
              </el-col>
            </el-row>
           <!-- <el-row v-show="sausagePizza.length>0" class="menu-item" type="flex" align="middle">
              <el-col :span="6" class="item-pizza-name">香肠披萨</el-col>
              <el-col :span="18">
                <el-row class="item-pizza-info" v-for="pizza in sausagePizza"  :key="pizza.size">
                  <el-col :span="8">{{pizza.size+' 寸'}}</el-col>
                  <el-col :span="8">{{pizza.price+' RMB'}}</el-col>
                  <el-col :span="8"><button @click="addToCart(pizza.name,pizza.size,pizza.price)"><i class="el-icon-plus"></i></button></el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row v-show="haweiiPizza.length>0" class="menu-item" type="flex" align="middle">
              <el-col :span="6" class="item-pizza-name">夏威夷披萨</el-col>
              <el-col :span="18">
                <el-row class="item-pizza-info" v-for="pizza in haweiiPizza"  :key="pizza.size">
                  <el-col :span="8">{{pizza.size+' 寸'}}</el-col>
                  <el-col :span="8">{{pizza.price+' RMB'}}</el-col>
                  <el-col :span="8"><button @click="addToCart(pizza.name,pizza.size,pizza.price)"><i class="el-icon-plus"></i></button></el-col>
                </el-row>
              </el-col>
            </el-row>-->
            <el-row v-if="pizzaList.length==0" class="none-pizza">
              <el-col :span="24">商品为空</el-col>
            </el-row>
          </el-container>
        </el-container>
      </el-col>
      <el-col :span="8" :offset="1" class="shopping-cart about-content">
        <el-container direction="vertical">
          <el-row class="about-content-head">
            <h4>{{cartList.cartHead}}</h4>
          </el-row>
          <el-row v-if="cart.length<1" class="NoGoods">购物车为空</el-row>
          <el-container v-else direction="vertical">
            <el-row class="menu-item">
              <el-col :span="12">{{cartList.goods}}</el-col>
              <el-col :span="5">{{cartList.price}}</el-col>
              <el-col :span="7">{{cartList.number}}</el-col>
            </el-row>
            <el-container direction="vertical" >
              <el-row class="menu-item" :key="Math.random()" v-for="option in cart">
                <el-col :span="12">{{option.goods}}<span>（{{option.size+'寸'}}）</span></el-col>
                <el-col :span="5">{{option.price*option.num+' RMB'}}</el-col>
                <el-col :span="7" class="goods-number">
                  <button @click="minusNum(option)"><i class="el-icon-minus"></i></button>
                  <span>{{option.num}}</span>
                  <button @click="addNum(option)"><i class="el-icon-plus"></i></button>
                </el-col>
              </el-row>
              <el-row class="goods-price-total" type="flex" align="middle">
                <el-col :span="20">总计：{{total+' RMB'}}</el-col>
                <el-col :span="4" class="empty-goods"><img @click="emptyCart" title="一键清空购物车" src="../assets/empty.png"></el-col>
              </el-row>
              <el-row class="submit-btn">
                <el-col><el-button @click="submitOrder">提交</el-button></el-col>
              </el-row>
            </el-container>
          </el-container>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "Menu",
      data(){
          return {
            listNav:{
              listHead:'菜单列表',
              category:'商品',
              size:'尺寸',
              price:'价格',
              order:'加入购物车'
            },
            cartList:{
              cartHead:'购物车',
              goods:'商品',
              price:'价格',
              number:'数量'
            },
            // pizzaList:[],
            cart:[]
          }
      },
      created(){
        this.getPizza();
      },
      methods:{
        /*获取披萨列表*/
        getPizza(){
          /*通过vuex来获取数据*/
          this.axios.get('/pizza.json')
            .then(response=>{
              let pizzas = [];
              for (let key in response.data){
                response.data.id = key;
                pizzas.push(response.data[key]);
              }
              /*将请求下来的数据存储到vuex中*/
              this.$store.commit('setMenuPizza',pizzas);
            });
        },
        /*把商品加入购物车*/
        addToCart(name,size,price){
          let orderGoods = {    //需要添加到购物车的商品信息
            goods:name,
            price:price,
            size:size,
            num:1       //商品数量
          };
          if (this.cart.length >0){   //购物车不为空，进行判断
            let result = this.cart.filter((pizza)=>{    //过滤出购物车已经有的商品，并等于result数组
              return (pizza.goods === name && pizza.size === size)   //通过商品的名字和尺寸来判断
            });
            if (result!=null && result.length >0){
              result.forEach((value)=>{     //购物车有的商品就数量加1
                value.num++
              })
            } else {
              this.cart.push((orderGoods))    //result为空，说明购物车没有这商品，直接加入购物车
            }
          } else {      //购物车为空，直接添加商品
            this.cart.push(orderGoods);
          }
        },
        /*增加购物车商品数量*/
        addNum(option){
          option.num ++;
        },
        /*减少购物车商品数量*/
        minusNum(option){
          option.num --;
          if (option.num<=0){
            this.cart.splice(this.cart.indexOf(option),1) //当购物车里的商品数量小于0时，商品出购物车中移除
          }
        },
        /*清空购物车*/
        emptyCart(){
          this.cart = [];
        },
        /*提交订单*/
        submitOrder(){
          if (this.getStatus == true){
            this.$alert('确定提交订单？',{
              callback:action=>{
                this.axios.post('/orders.json',this.cart)
                .then(res=>{
                  this.$message('购买成功');
                  this.cart='';
                })
              }
            });
          } else {
            this.$alert('您还未登陆，请先登录',{
              type:'warning',
              callback:action=>{
                this.$router.push('/login')
              }
            });
          }
        }
      },
      computed:{
        pizzaList(){
          /*从vuex中获取pizza数据*/
          return this.$store.getters.getMenuPizza;
        },
        getStatus(){
          return this.$store.getters.isLogin;
        },
          /*计算购物车总价格*/
        total(){
          let totalCost = 0;
          for (let index in this.cart){
            totalCost += this.cart[index].price * this.cart[index].num;   //总价格等于每件商品单价*商品数量的累加
          }
          return totalCost;
        }
      }
    }
</script>

<style scoped lang="less">
  .menu-main{
    width: 100%;
    .about-content{
      padding-bottom: 20px !important;
    }
    .about-content-head{
      border-bottom: 0 !important;
      h4{
        text-align: center;
      }
    }
    .menu-item{
      text-align: center;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      font-size: 14px;
      color: #696969;
      .item-pizza-name{
        font-size: 15px;
        color: #000;
      }
      .item-pizza-info{
        margin: 10px 0;
      }
      .el-col button{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #62D2CE;
        -webkit-appearance: none;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        -webkit-transition: .1s;
        transition: .1s;
        padding: 5px 10px;
        font-size: 14px;
        border-radius: 4px;
      }
      button:hover{
        background: #DAFBFA;
      }
      button:active{
        background: #62D2CE;
      }
    }
    .menu-item-head .el-col{
      font-size: 15px;
      color: #000;
    }
    .shopping-cart{
      padding: 0 20px;
      min-height: 100px !important;
      border: 1px solid #eee;
      border-radius: 5px;
      /*text-align: right;*/
      padding: 0 20px !important;
      .NoGoods{
        text-align: center;
        color: #c0c4cc;
        margin-top: 10px;
      }
      .goods-number{
        span{
          display:inline-block;
          min-width: 20px;
        }
        button{
          padding: 0px !important;
        }
      }
      .goods-price-total{
        margin: 10px;
        .empty-goods{
          text-align: right;
          position: relative;
          img{
            width: 20px;
            height: auto;
            cursor: pointer;
            position: absolute;
            top: 50%;
            right: 0px;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
          }
        }
      }
      .submit-btn{
        margin-bottom: 20px;
        button{
          width: 100%;
          background: #62D2CE;
          -webkit-transition: .5s;
          -moz-transition: .5s;
          -ms-transition: .5s;
          -o-transition: .5s;
          transition: .5s;
          color: #696969;
        }
        button:hover{
          color: #fff;
          background: #4CA3A0;
        }
        button:active{
          color: #696969;
        }
      }
    }
    .none-pizza{
      text-align: center;
      color: #cccccc;
      line-height: 100px;
    }
  }
</style>
