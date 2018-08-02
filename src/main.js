// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUi from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import {store} from './store'   //引入vuex实例store
import moment from 'moment'

Vue.config.productionTip = false;
Vue.use(ElementUi);

/*axios全局默认路径*/
axios.defaults.baseURL = 'https://pizza-app-65e84.firebaseio.com/';
Vue.prototype.axios = axios;    //全局配置axios（不需要再组件里再次引入，直接可以通过this.axios使用）

/*全局守卫*/
/*router.beforeEach((to,from,next)=>{     // to表示即将进入的路由目标，from表示正要离开的路由，next表示之后跳转的页面
  if (to.path == '/login' || to.path == '/register'){
    next();
  } else {
    alert('还没有登录，请先登录。');
    next('/login')
  }
});*/

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
