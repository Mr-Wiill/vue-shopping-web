const state = {
  menuPizza:[]
};
const getters = {
  getMenuPizza:state=>state.menuPizza
};

const mutations = {
  setMenuPizza (state,data){     //获取pizza数据
    state.menuPizza = data;
    // console.log(state.menuPizza);
  },
  addMenuPizza(state,data){     //新增拍pizza数据
    state.menuPizza.push(data)
  },
  deleteMenuPizza(state,data){    //删除pizza数据
    state.menuPizza.forEach((item,index)=>{
      if (item.id == data){
        state.menuPizza.splice(index,1);
      }
    });
  }
};
const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions
}
