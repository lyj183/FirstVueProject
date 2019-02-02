import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
};
const mutations = {
  add(state) {
    state.count++;
  },
  mul(state) {
    state.count--;
  }
};
const getters = {
  count(state) {
    let newcount = state.count + 100;  
    // return state.count += 100;
    return newcount;
  }
};
// Action 类似于 mutation，不同在于：
// Action是异步改变state的状态，而mutation是同步。 
// Action里面是可以调用Mutation里面的方法的。
const actions = {
  addAction(state) {
      // state.commit('add');
      setTimeout(() => { state.commit('add') }, 3000);
      console.log('我提前执行了');
  },
  mulAction(state) {
    state.commit('mul');
  }
};
var vuexStore = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

// 使用 export default 封装，让外部可以访问
export default vuexStore;