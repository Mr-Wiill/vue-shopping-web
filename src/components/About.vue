<template>
  <el-container class="app-main">
    <el-row class="about-main">
      <el-col :span="6" class="el-aside">
        <el-menu>
          <el-menu-item :index="item.index" :key="item.index" v-for="item in aside" @click="toggle(item.index)" :class="{'active':item.index==checkIndex}">
            <router-link :to="{name:item.link}">{{item.name}}</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18" class="aside-content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
    export default {
        name: "About",
      data(){
          return {
            aside:[
              /*{
                index:'1',
                link:'historyLink',
                name:'历史订单'
              },*/
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
    .about-main{
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
            padding: 0 !important;
            text-indent: 1.5em;
            a{
              color: #696969;
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          li.active{
            background-color:#ecf5ff
          }
        }
      }
      .aside-content{
        padding-left: 40px;
      }
    }
  }
</style>
