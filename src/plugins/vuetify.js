import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#3A25B4",
    secondary: "#854CC8",
    accent: "#C96ED9",
    error: "#b71c1c"
  }
});
