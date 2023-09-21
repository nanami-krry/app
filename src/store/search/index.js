import { reqGetSearchInfo } from "@/api";
const state = {
  searchList: {},
};
const mutations = {
  GETSEARCHINFO(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  async getSearchList({commit},params={}){
    let result= await reqGetSearchInfo(params)
    //console.log(result);
    if (result.code == 200) {
      commit("GETSEARCHINFO", result.data);
    }
  }
};
const getters = {
  goodList(state){
    return state.searchList.goodsList||[]
  },
  trademarkList(state){
    return state.searchList.trademarkList
  },
  attrsList(state){
    return state.searchList.attrsList
  }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
