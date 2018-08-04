import Vue from 'vue'
import Vuex from 'vuex'
/*import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'*/

/*module模块化*/
import menu from './module/menu'
import order from './module/order'
import login from './module/login'
// import user from './module/user'
// import status from './module/status'

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules:{
    login,
    menu,
    order
  }
});
