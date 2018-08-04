<template>
  <el-container class="app-main">
    <el-row class="menu-main">
      <el-col :span="10"  class="shopping-cart about-content">
        <el-container direction="vertical">
          <el-row class="about-content-head">
            <h4>添加商品</h4>
          </el-row>
          <el-form label-width="70px" class="add-goods-list" @submit.native.prevent>
            <el-form-item label="商品名称">
              <el-input v-model="goods.name" placeholder="请输入商品名称" required="required"></el-input>
            </el-form-item>
            <el-form-item label="商品尺寸">
              <el-input v-model="goods.size" placeholder="请输入商品尺寸" required="required"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="goods.price" placeholder="请输入商品价格" required="required"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button @click="addGoodsFn">发布</el-button>
            </el-form-item>
          </el-form>
        </el-container>
      </el-col>
      <el-col :span="13" :offset="1" class="about-content">
        <el-container direction="vertical">
          <el-row class="about-content-head">
            <h4>商品列表</h4>
          </el-row>
          <el-container direction="vertical">
            <el-row class="menu-item menu-item-head">
              <el-col :span="6" v-for="(val,index) in navList" :key="index">{{val}}</el-col>
            </el-row>
            <el-row v-show="pizzaList.length>0" class="menu-item" type="flex" align="middle"
                    v-for="pizza in pizzaList"  :key="Math.random()">
              <el-col :span="6" class="item-pizza-name">{{pizza.name}}</el-col>
              <el-col :span="18">
                <el-row class="item-pizza-info">
                  <el-col :span="8">{{pizza.size+' 寸'}}</el-col>
                  <el-col :span="8">{{pizza.price+' RMB'}}</el-col>
                  <el-col :span="8">
                    <el-button class="edit" @click="editPizza(pizza)"><i class="el-icon-edit"></i></el-button>
                    <el-button @click="deletePizza(pizza.id)"><i class="el-icon-delete"></i></el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row v-if="pizzaList.length==0" class="none-pizza">
              <el-col :span="24">商品为空</el-col>
            </el-row>
          </el-container>
        </el-container>
      </el-col>
    </el-row>
    <Dialog v-show="dialogVisible" :pizza="updatePizza" @closed="closeDialog($event)"></Dialog>
  </el-container>
</template>

<script>
  import Dialog from '../dialog/Dialog'
    export default {
        name: "Admin",
      components:{
          Dialog
      },
      data(){
          return {
            navList:{
              category:'商品',
              size:'尺寸',
              price:'价格',
              order:'编辑'
            },
            goods:{
              name:'',
              size:'',
              price:''
            },
            dialogVisible:false,
            updatePizza:{}
          }
      },
      methods:{
        getPizza(){
          this.axios.get('/pizza.json')
            .then(response=>{
              let pizzas = [];
              for (let key in response.data){
                response.data[key].id = key;
                pizzas.push(response.data[key]);
              }
              this.$store.commit('setMenuPizza',pizzas);
            });
        },
        addGoodsFn(){
          if (this.goods.name == '' || this.goods.size == '' || this.goods.price == ''){
            this.$message('商品信息不能为空');
          } else {
            let result = this.pizzaList.filter((pizza)=>{
              return (pizza.name === this.goods.name && pizza.size === this.goods.size)
            });
            if (result.length > 0 && result!=null){
              this.$alert('商品已存在，无需再添加',{callback:action=>{}})
            } else {
              this.axios.post('/pizza.json',this.goods)
                .then(res=>{
                  this.$store.commit('addMenuPizza',this.goods);
                  this.$message('添加成功');
                  this.goods.name='';
                  this.goods.size='';
                  this.goods.price='';
                })
            }
          }
          },
        editPizza(pizza){
          this.dialogVisible = true;
          this.updatePizza = pizza;
          /*this.axios.get('/pizza/'+id+'/.json')
            .then(res=>{
              this.updatePizza = res.data;
            })*/
        },
        deletePizza(id){
          this.axios.delete('/pizza/'+id+'/.json')
            .then(res=>{
              this.$store.commit('deleteMenuPizza',id);
              this.$message('删除成功！');
            })
        },
        closeDialog(val){
          this.dialogVisible = val;
        },
      },
      created(){
        this.getPizza();
      },
      computed:{
        pizzaList(){
          /*从vuex中获取pizza数据*/
          return  this.$store.getters.getMenuPizza;
        },
      },
      watch:{
        pizzaList:{
          handler(){
            this.getPizza();
          }
        }
      }

      /*组件内的守卫*/
      /*
      beforeRouteEnter:(to,from,next)=>{    //进入目标组件时执行
          // alert('hello' +this.name);    //输出：hello undefined，因为组件内守卫不能获取实例的this
          // next()
        next(vm => {
          alert('请先登录 ' + vm.name);
          next()
        })
      },
      beforeRouteLeave:(to,from,next)=>{    //离开目标组件时执行
        if (confirm('确定离开吗？')==true){
          next();
        } else {
          next(false)
        }
      }
      */
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
        color: red;
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
      .edit i{
        color: darkblue;
      }
      .edit:hover{
        border: 1px solid darkblue;
      }
      button:hover{
        border: 1px solid red;
        color: red;
      }
      button:active{
        background: red;
        color: #fff;
      }
    }
    .menu-item-head .el-col{
      font-size: 15px;
      color: #000;
    }
    .shopping-cart{
      min-height: 100px !important;
      border: 1px solid #eee;
      border-radius: 5px;
      padding: 0 20px !important;
    }
    .add-goods-list{
      padding-top: 20px;
      .el-form-item{
        .el-button{
          width: 100%;
          background: #62D2CE;
          color: #696969;
        }
        .el-button:hover{
          background: #4CA3A0;
          color: #fff;
        }
      }
    }
    .none-pizza{
      text-align:center;
      color: #ccc;
      line-height: 100px;
    }
  }
</style>
