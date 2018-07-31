/*改变属性状态*/

export const setMenuPizza = (state,data)=>{     //获取pizza数据
  state.menuPizza = data;
}
export const addMenuPizza = (state,data)=>{     //新增拍pizza数据
  state.menuPizza.push(data)
}
export const deleteMenuPizza = (state,data)=>{    //删除pizza数据
  state.menuPizza.forEach((item,index)=>{
    if (item.id = data){
      state.menuPizza.splice(index,1);
    }
  })
}
export const userStatus = (state,user)=>{       /*设置user的状态*/
  if (user){    //user不为空
    state.currentUser = user;
    state.isLogin = true;
  } else {
    state.currentUser = null;
    state.isLogin = false;
  }
}
