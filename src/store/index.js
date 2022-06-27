import { createStore } from 'vuex'
import Cookies from 'js-cookie'

export default createStore({
  state: {
    locale: Cookies.get('locale') || 'ar',
    trial: false,
  },
  getters: { locale: (state) => state.locale },
  mutations: {
    setTrial(state, payload) {
      state.trial = payload
    },
  },
  actions: {},
  modules: {},
})
