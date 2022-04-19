import { createStore } from 'vuex'
import Cookies from 'js-cookie'

export default createStore({
  state: {
    locale: Cookies.get('locale') || 'ar',
  },
  getters: { locale: (state) => state.locale },
  mutations: {},
  actions: {},
  modules: {},
})
