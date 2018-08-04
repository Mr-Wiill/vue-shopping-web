const state ={
  isLogin:false,
  userName:null
};

const getters = {
  getUserName(state){
    return sessionStorage.getItem('userName');
    /*if (state.isLogin){
      return sessionStorage.getItem('userName');
    } else{
      return state.userName
    }*/
  },
  isLogin(state){
    return sessionStorage.getItem('isLogin');
    /*if (state.isLogin){
      return sessionStorage.getItem('isLogin');
    } else{
      return state.isLogin
    }*/
  },
};

const mutations = {
  userLogin (state,data){       /*设置user的状态*/
    sessionStorage.setItem('userName',data);
    sessionStorage.setItem('isLogin',true);
    state.isLogin = true;
    state.userName = data;
  },
  userLogout(state,status){
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('isLogin');
    state.isLogin = status;
    state.userName = ''
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
