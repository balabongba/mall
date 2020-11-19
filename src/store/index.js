import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  // mutations设计原则：每一个方法完成的事件尽可能比较单一
    // 原因：后期查询记录时，需要明确每个方法做了什么事情。若是一个方法包含多种功能，记录中只会显示该方法对state修改了多次，难以确定具体干了什么
  mutations,
  actions,
  getters
})

export default store
