<template>
  <el-container class="app-main">
    <el-row class="menu-main">
      <el-col :span="15" class="about-content">
        <el-container direction="vertical">
          <el-row class="about-content-head">
            <h4>披萨列表</h4>
          </el-row>
          <el-row class="menu-item">
            <el-col :span="6">{{listNav.category}}</el-col>
            <el-col :span="6">{{listNav.size}}</el-col>
            <el-col :span="6">{{listNav.price}}</el-col>
            <el-col :span="6">{{listNav.order}}</el-col>
          </el-row>
          <el-row class="menu-item" :key="obj.id" v-for="obj in pizzaList">
            <el-col :span="6" class="item-pizza-name">{{obj.name}}</el-col>
            <el-col :span="18" :key="item.row" v-for="item in obj.lists">
              <el-row type="flex" justify="end">
                <el-col :span="8">{{item.size}}</el-col>
                <el-col :span="8">{{item.price}}</el-col>
                <el-col :span="8"><el-button><i class="el-icon-plus"></i></el-button></el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-container>
      </el-col>
      <el-col :span="8" :offset="1">shopping trolley</el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "Menu",
      data(){
          return {
            listNav:{
              category:'分类',
              size:'尺寸',
              price:'价格',
              order:'购买'
            },
            pizzaList:[
              {
                id:1,
                name:'芝士披萨',
                lists:[
                  {
                    row:1,
                    size:'9寸',
                    price:'38￥',
                  },
                  {
                    row:2,
                    size:'12寸',
                    price:'48￥',
                  }
                ]
              },
              {
                id:2,
                name:'榴莲披萨',
                lists:[
                  {
                    row:1,
                    size:'9寸',
                    price:'38￥',
                  },
                  {
                    row:2,
                    size:'12寸',
                    price:'48￥',
                  }
                ]
              }
            ]
          }
      },
      created(){

      }
    }
</script>

<style scoped lang="less">
  .menu-main{
    width: 100%;
    .about-content-head{
      h4{
        text-align: center;
      }
    }
  .menu-item{
    text-align: center;
    .item-pizza-name{

    }
  }
  }
</style>
