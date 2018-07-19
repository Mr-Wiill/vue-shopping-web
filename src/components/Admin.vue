<template>
  <el-container class="app-main">
    <el-row class="menu-main">
      <el-col :span="11"  class="shopping-cart about-content">
        <el-container direction="vertical">
          <el-row class="about-content-head">
            <h4>{{listHead}}</h4>
          </el-row>
          <el-form label-width="80px" class="add-goods-list">
            <el-form-item v-for="item in addList" :label="item.label" :key="item.label">
              <el-input :value="item.data" :placeholder="item.holder" type="text" required="required" ></el-input>
            </el-form-item>
            <!--<el-form-item :label="addList.goodsId">
              <el-input type="text" required="required" placeholder="请输入商品编码"></el-input>
            </el-form-item>
            <el-form-item :label="addList.goodsName">
              <el-input type="text" placeholder="请输入商品名称" required="required"></el-input>
            </el-form-item>
            <el-form-item :label="addList.goodsSize">
              <el-input type="text" placeholder="请输入商品尺寸" required="required"></el-input>
            </el-form-item>
            <el-form-item :label="addList.goodsPrice">
              <el-input type="text" placeholder="请输入商品价格" required="required"></el-input>
            </el-form-item>-->
            <el-form-item >
              <el-button @click="addGoodsFn">发布</el-button>
            </el-form-item>
          </el-form>
        </el-container>
      </el-col>
      <el-col :span="12" :offset="1" class="about-content">
        <el-container direction="vertical">
          <el-row class="about-content-head">
            <h4>{{navList.listHead}}</h4>
          </el-row>
          <el-container direction="vertical">
            <el-row class="menu-item menu-item-head">
              <el-col :span="6">{{navList.category}}</el-col>
              <el-col :span="6">{{navList.size}}</el-col>
              <el-col :span="6">{{navList.price}}</el-col>
              <el-col :span="6">{{navList.order}}</el-col>
            </el-row>
            <el-row class="menu-item" type="flex" align="middle"  :key="obj.name" v-for="obj in pizzaList">
              <el-col :span="6" class="item-pizza-name">{{obj.name}}</el-col>
              <el-col :span="18">
                <el-row class="item-pizza-info" :key="item.id" v-for="item in obj.lists">
                  <el-col :span="8">{{item.size+' 寸'}}</el-col>
                  <el-col :span="8">{{item.price+' RMB'}}</el-col>
                  <el-col :span="8"><button ><i class="el-icon-close"></i></button></el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-container>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "Admin",
      data(){
          return {
            // name:'jacky',
            listHead:'添加商品',
            addList:[
              {
                label:'商品编码',
                holder:'请输入商品编码'
              }
            ],
            /*addList:{
              listHead:'添加商品',
              goodsId:'商品编码',
              goodsName:'商品名称',
              goodsSize:'商品尺寸',
              goodsPrice:'商品价格'
            },*/
            navList:{
              listHead:'菜单列表',
              category:'商品',
              size:'尺寸',
              price:'价格',
              order:'删除'
            },
            addGoods:{
              goodsId:'',
              goodsName:'',
              goodsSize:'',
              goodsPrice:''
            },
            pizzaList:[
              {
                name:'芝士披萨',
                lists:[
                  {
                    id:1,
                    size:'9',
                    price:'38',
                  },
                  {
                    id:2,
                    size:'12',
                    price:'38',
                  },
                ]
              },
            ],
          }
      },
      methods:{
          addGoodsFn(){
            console.log(this.addGoods.goodsId)
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
  }
</style>
