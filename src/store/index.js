import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 初始的 state 对象
let initState = {
  msg: '默认模式',
  router: '/khome',
  jx: 'https://library.wananbaobao.com/api/json.php?url=',
  radio: '1',
  url: 'https://pan.lingshulian.com/s/t/3daec647028f6a44?'
}
const stateStr = localStorage.getItem('state')
if (stateStr) {
  // 加载本地的数据
  initState = JSON.parse(stateStr)
}

export default new Vuex.Store({
  state: initState,
  getters: {},
  mutations: {
    uprouter(state, payload) {
      state.router = payload
      this.commit('saveStateToStorage')
    },
    upradio(state, payload) {
      state.radio = payload
      this.commit('saveStateToStorage')
    },
    upjx(state, payload) {
      state.jx = payload
      this.commit('saveStateToStorage')
    },
    upmsg(state, payload) {
      state.msg = payload
      this.commit('saveStateToStorage')
    },
    saveStateToStorage(state) {
      localStorage.setItem('state', JSON.stringify(state))
    }
  },

  actions: {},
  modules: {}
})
