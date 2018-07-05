<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  name: 'App',
  components:{
    appHeader:Header,
  }
}
</script>

<style lang="less">
  body{
    font-family: '微软雅黑',"Times New Roman";
    margin: 0;
    background: #eeeeee;
    min-width: 889px;
    #app {
      h1,h2,h3,h4,h5{
        margin: 0;
      }
      a{
        text-decoration: none;
      }
      ul, li{
        list-style: none;
      }
      .app-main{
        max-width: 1100px;
        margin: 20px auto;
        -webkit-box-shadow: 2px 2px 2px #ccc;
        -moz-box-shadow:2px 2px 2px #ccc;
        box-shadow: 2px 2px 2px #ccc;
        background: #fff;
        padding: 20px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
    }
  }
</style>
