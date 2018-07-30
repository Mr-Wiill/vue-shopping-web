import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state:{
    /*设置属性*/
    menuPizza:[],
    currentUser:'',
    isLogin:false
  },
  getters:{
    /*获取属性状态*/
    getCurrentUser:state=>state.currentUser,
    isLogin:state=>state.isLogin
  },
  mutations:{
    /*改变属性状态*/
    setMenuPizza(state,data){     //获取pizza数据
      state.menuPizza = data;
    },
    addMenuPizza(state,data){     //新增拍pizza数据
      state.menuPizza.push(data)
    },
    deleteMenuPizza(state,data){    //删除pizza数据
      state.menuPizza.forEach((item,index)=>{
        if (item.id = data){
          state.menuPizza.splice(index,1);
        }
      })
    },
    userStatus(state,user){       /*设置user的状态*/
      if (user){    //user不为空
        state.currentUser = user;
        state.isLogin = true;
      } else {
        state.currentUser = null;
        state.isLogin = false;
      }
    }
  },
  actions:{
    /*应用mutations*/
    setUser({commit},user){
      commit('userStatus',user);    //引用userStatus方法，并传值
    }
  }
});
