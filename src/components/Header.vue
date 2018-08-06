<template>
  <el-header class="header">
    <el-row class="header-content" type="flex" align="middle">
      <el-col :span="6" class="logo"><h2>{{logo}}</h2></el-col>
      <el-col :span="12">
        <ul class="el-menu">
          <li :index="item.id" v-for="item in menus"
              @click="toggle(item.id)"
              :class="{'is-active':item.id==checkId}">
            <router-link :to="item.url">{{item.name}}</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="entry">
        <ul class="el-menu" v-show="!isLogin">
          <li :index="item.id" v-for="item in userEntry"
              @click="clicked(item.id)"
              :class="{'is-active':item.id==checkEntry}">
            <router-link :to="{name:item.link}">{{item.name}}</router-link>
          </li>
        </ul>
        <el-row class="logout" v-show="isLogin">
          <el-col :span="12">{{getUserName}}</el-col>
          <el-col :span="12"><a @click="logout">[退出]</a></el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
  import bus from '../eventBus/index'
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
                url:'/order',
                name:'订单'
              },
              {
                id:4,
                url:'/about',
                name:'关于'
              },
              {
                id:5,
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
            checkId:null,
            checkEntry:null,
          }
      },
      methods:{
        toggle(val){
          this.checkEntry = null;
          this.checkId = val;
          // console.log(this.currentUser);
        },
        clicked(val){
          this.checkId = null;
          this.checkEntry = val;
        },
        logout(){
          this.$message('您已退出');
          this.$store.dispatch('logout',false);
          this.$router.push('/login');
          // location.reload();
        },
        /*路由跳转的方法：*/
        goToRouter(){
          this.$router.go(-1);      //上一次浏览的页面
          this.$router.replace('link');  //指定页面
          this.$router.replace({name:'routerName'});    //通过路由name跳转指定页面
          this.$router.push('link');    //指定页面（常用）
          this.$router.push({name:'routerName'});    //通过路由name跳转指定页面
        }
      },
      watch:{
          /*监听路由，并显示导航栏的选中效果*/
        '$route':{
          handler(){
            let linkName = this.$route.name;
            /*if (linkName === 'homeLink'){
              this.checkId = 1
            } else if (linkName === 'menuLink'){
              this.checkId = 2;
            } else if (linkName === 'aboutLink'){
              this.checkId = 3;
            } else if (linkName === 'adminLink'){
              this.checkId = 4;
            } else if (linkName === 'loginLink'){
              this.checkEntry = 1;
            } else if (linkName === 'registerLink'){
              this.checkEntry = 2;
            }*/
            switch (linkName){
              case 'homeLink': this.checkId = 1;this.checkEntry = null; break;
              case 'menuLink': this.checkId = 2;this.checkEntry = null; break;
              case 'orderLink': this.checkId = 3;this.checkEntry = null; break;
              case 'aboutLink': this.checkId = 4;this.checkEntry = null; break;
              case 'adminLink': this.checkId = 5;this.checkEntry = null; break;
              case 'loginLink': this.checkEntry = 1;this.checkId = null; break;
              case 'registerLink': this.checkEntry = 2;this.checkId = null; break;
            }
          }
        }
      },
      computed:{
        isLogin(){
          return this.$store.getters.isLogin;
        },
        getUserName(){
          return this.$store.getters.getUserName;
        }
      },
    }
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    background: #62D2CE;
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
      .logout a{
        cursor: pointer;
      }
    }
  }
</style>
