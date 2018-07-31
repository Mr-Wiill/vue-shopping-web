const state ={
  currentUser:'',
};

const getters = {
  getCurrentUser : state=>state.currentUser
};

const mutations = {
  userStatus (state,user){       /*设置user的状态*/
    if (user){    //user不为空
      state.currentUser = user;
    } else {
      state.currentUser = null;
    }
  }
};

const actions = {
  setUser ({commit},user){
    commit('userStatus',user);    //引用userStatus方法，并传值
  }
};

export default  {
  state,
  getters,
  mutations,
  actions
}
