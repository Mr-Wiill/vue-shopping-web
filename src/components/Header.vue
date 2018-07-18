<template>
  <el-header class="header">
    <el-row class="header-content" type="flex" align="middle">
      <el-col :span="6" class="logo"><h2>{{logo}}</h2></el-col>
      <el-col :span="12">
        <ul class="el-menu">
          <li :index="item.id" v-for="item in menus" @click="toggle(item.id)" :class="{'is-active':item.id==checkId}">
            <router-link :to="item.url">{{item.name}}</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="entry">
        <ul class="el-menu">
          <li :index="item.id" v-for="item in userEntry" @click="clicked(item.id)" :class="{'is-active':item.id==checkEntry}">
            <router-link :to="{name:item.link}">{{item.name}}</router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
    export default {
        name: "Header",
      data(){
          return {
            logo:'Pizza点餐系统',
            menus:[
              {
                id:1,
                url:'/',
                name:'首页'
              },
              {
                id:2,
                url:'/menu',
                name:'菜单'
              },
              {
                id:3,
                url:'/about',
                name:'关于'
              },
              {
                id:4,
                url:'/admin',
                name:'管理'
              }
            ],
            userEntry:[
              {
                id:1,
                link:'loginLink',     //通过路由里的name实现跳转:to="{name:'link'}"
                name:'登录'
              },
              {
                id:2,
                link:'registerLink',
                name:'注册'
              }
            ],
            checkId:1,
            checkEntry:null
          }
      },
      methods:{
        toggle(val){
          this.checkEntry = null;
          this.checkId = val;
        },
        clicked(val){
          this.checkId = null;
          this.checkEntry = val;
        },
        /*路由跳转的方法：*/
        goToRouter(){
          this.$router.go(-1);      //上一次浏览的页面
          this.$router.replace('link');  //指定页面
          this.$router.replace({name:'routerName'});    //通过路由name跳转指定页面
          this.$router.push('link');    //指定页面（常用）
          this.$router.push({name:'routerName'});    //通过路由name跳转指定页面
        }
      }
    }
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    background: #62D2CE;
   /* -webkit-box-shadow: 0px 2px 2px #ccc;
    -moz-box-shadow:0px 2px 2px #ccc;
    box-shadow: 0px 2px 2px #ccc;*/
    color: #696969;
    .header-content{
      max-width: 1200px;
      height:100%;
      margin: 0 auto;
      padding: 0 20px;
      .logo{
        text-align: center;
      }
      ul.el-menu{
        background: transparent;
        border: 0;
        li{
          display: inline-block;
          line-height: 60px;

          margin: 0 10px;
          a{
            display: block;
            width: inherit;
            height: 100%;
            color: #696969;
            font-size: 14px;
            padding: 0 20px;
          }
        }
        li:hover{
          background: #54B3AF;
          a{
            color: #fff;
          }
        }
        .is-active{
          a{
            color: #fff;
          }
        }
      }
      .entry{
        text-align: center;
      }
    }
  }
</style>
