import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "",
    protocol: "http",
    host: "localhost",
    port: "3000",
    app: "api",
    token: null
  },
  mutations: {
    setToken: (state, value) => {
      state.token = value;
    }
  },
  getters: {
    url: state =>
      `${state.protocol}://${state.host}:${state.port}/${state.app}`,
    source: state => `${state.protocol}://${state.host}:${state.port}`
  },
  actions: {}
});
