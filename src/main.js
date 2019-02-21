import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@mdi/font/css/materialdesignicons.css";
import VueShareSocial from "vue-share-social";

Vue.config.productionTip = false;
Vue.use(VueShareSocial);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
