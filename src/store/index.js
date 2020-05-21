import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'
import authors from './modules/authors'
import createPersistedState from "vuex-persistedstate"; // vuex-persistedstate используется для хранения состояния vuex в localStorage

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
      news,
      authors
  }
})
