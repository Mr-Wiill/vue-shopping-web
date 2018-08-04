const state ={
  orders:[]
};
const getters={
  // getOrders: state=>state.orders
  getOrders(state){
    return state.orders;
  }
};
const mutations={
  getOrder(state,order){
    state.orders = order;
  }
};
const actions={

};
export default{
  state,
  getters,
  mutations,
  actions
}
