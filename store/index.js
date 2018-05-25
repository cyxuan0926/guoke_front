
import Vue from 'vue'
import Vuex from 'vuex'

import modulesIndex from './home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    index: modulesIndex
  }
})

export default store
