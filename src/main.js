import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import Topnav from "./components/topnav.vue";
Vue.component("Topnav", Topnav);
Vue.use(VueRouter);

Vue.config.productionTip = false;

import BagelDB from "@bageldb/bagel-db";
const bagel = new BagelDB(process.env.VUE_APP_BAGEL_TOKEN);
Vue.prototype.$db = bagel;
new Vue({
  router,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
console.log(window.location.href);
