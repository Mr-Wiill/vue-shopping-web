const state = {
  isLogin:false
};

const getters = {
  isLogin :state=>state.isLogin
};

const mutations = {
  userStatus(state,user){       /*设置user的状态*/
    if (user){    //user不为空
      state.isLogin = true;
    } else {
      state.isLogin = false;
    }
  }
};

const actions = {
  setUser({commit},user){
    commit('userStatus',user);    //引用userStatus方法，并传值
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
