import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 10
  },
  mutations: {
    jia(state) {
      state.counter++
    },
    jian(state) {
      state.counter--
    }
  },
  getters: {
    prow(state) {
      return function (num) {
        return state.counter + num
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
