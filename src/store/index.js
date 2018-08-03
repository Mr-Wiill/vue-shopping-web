import Vue from 'vue'
import Vuex from 'vuex'
/*import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'*/

/*module模块化*/
import menu from './module/menu'
import user from './module/user'
import status from './module/status'
import order from './module/order'

Vue.use(Vuex);
export const store = new Vuex.Store({
  /*state:{
    /!*设置属性*!/
    menuPizza:[],
    currentUser:'',
    isLogin:false
  },
  getters,
  mutations,
  actions*/
  modules:{
    menu,
    user,
    status,
    order
  }
});
