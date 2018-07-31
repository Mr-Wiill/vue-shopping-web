/*应用mutations*/
export const setUser = ({commit},user)=>{
  commit('userStatus',user);    //引用userStatus方法，并传值
};
