const state ={
  isLogin:false,
  userName:''
};

const getters = {
  getUserName(state){
    if (!state.isLogin){
      state.userName=sessionStorage.getItem('userName')
    }
    return sessionStorage.getItem('userName')
  },
  isLogin(state){
    if (!state.isLogin){
      state.isLogin=sessionStorage.getItem('isLogin')
    }
    return sessionStorage.getItem('isLogin')
  },
};

const mutations = {
  userLogin (state,data){
    sessionStorage.setItem('userName',data);    //把用户名和登录状态存储到sessionStorage
    sessionStorage.setItem('isLogin',true);
    state.isLogin = true;
    state.userName = data;
  },
  userLogout(state,data){
    sessionStorage.removeItem('userName');    //移除sessionStorage
    sessionStorage.removeItem('isLogin');
    state.isLogin = data;
    state.userName = '';
  }
};

const actions = {
  login ({commit},userName){
    commit('userLogin',userName);    //引用userStatus方法，并传值
  },
  logout({commit},status){
    commit('userLogout',status)
  }
};

export default  {
  state,
  getters,
  mutations,
  actions
}
