import Vue from 'vue'
import Vuex from 'vuex'

/*module模块化*/
import menu from './module/menu'
import order from './module/order'
import login from './module/login'

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules:{
    login,
    menu,
    order
  }
});
