<template>
  <el-container class="app-main">
    <el-row class="about-content">
      <el-col :span="6" class="el-aside">
        <el-menu>
          <el-menu-item :index="item.index" v-for="item in aside">
            <router-link :to="item.link">{{item.name}}</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18" class="aside-content">content</el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "About",
      data(){
          return {
            aside:[
              {
                index:'1',
                link:'',
                name:'新闻'
              },
              {
                index:'2',
                link:'',
                name:'物流'
              },
              {
                index:'3',
                link:'',
                name:'点餐引导'
              },
              {
                index:'4',
                link:'',
                name:'联系我们'
              }
            ]
          }
      }
    }
</script>

<style scoped lang="less">
  .app-main{
    .about-content{
      width: 100%;
      height: auto;
      .el-aside{
        .el-menu{
          border: 0;
          .el-menu-item{
            height: 45px;
            line-height: 45px;
            border: 1px solid #eeeeee;
            margin-bottom: 15px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            -webkit-box-shadow: 0px 0px 4px #eee;
            -moz-box-shadow: 0px 0px 4px #eee;
            box-shadow: 0px 0px 4px #eee;
            a{
              color: #696969;
            }
          }
        }
      }
      .aside-content{
        padding-left: 40px;
      }
    }
  }
</style>
