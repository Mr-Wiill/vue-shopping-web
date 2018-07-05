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

<style>
#app {

}
</style>
