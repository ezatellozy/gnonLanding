import { createStore } from "vuex";
import Cookies from "js-cookie";

export default createStore({
  state: {
    locale : Cookies.get("locale")|| "ar",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
