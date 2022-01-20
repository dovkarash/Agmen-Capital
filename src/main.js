import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import BagelDB from '@bageldb/bagel-db'
const bagel = new BagelDB(process.env.VUE_APP_BAGEL_TOKEN);
Vue.prototype.$db = bagel;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
console.log(window.location.href)