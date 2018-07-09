<template>
  <el-container class="app-main">
    <div>admin</div>
  </el-container>
</template>

<script>
    export default {
        name: "Admin",
      data(){
          return {
            name:'jacky'
          }
      },
      /*组件内的守卫*/
      beforeRouteEnter:(to,from,next)=>{    //进入目标组件时执行
          // alert('hello' +this.name);    //输出：hello undefined，因为组件内守卫不能获取实例的this
          // next()
        next(vm => {
          alert('hello ' + vm.name);
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
    }
</script>

<style scoped>

</style>
