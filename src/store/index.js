import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    comCode: '',
    comLevel: '01',
    field: 1,
    stateType: 'day'
  },
  mutations: {
    SET_FILTER_ITEM: (state, paramObj) => {
      state.filterItem = paramObj
    },
    SET_PER: (state, paramObj) => {
      state.permission = paramObj
    },
    SET_DYMICSS: (state, dymicss) => {
      state.dymicss = dymicss
    }
  },
  actions: {
    changeFilterItem: function ({ commit }, paramObj) {
      commit('SET_FILTER_ITEM', paramObj)
    },
    changePer: function ({ commit }, paramObj) {
      commit('SET_PER', paramObj)
    },
    changeDymicss: function ({ commit }, dymicss) {
      commit('SET_DYMICSS', dymicss)
    }
  }
})
export default store
