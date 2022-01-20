import termsofuse from '../views/Termsofuse.vue'
import privacypolicy from '../views/Privacypolicy.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, { path:'/privacyPolicy',
            name:'PrivacyPolicy',
            component:privacypolicy }, { path:'/termsOfUse',
            name:'TermsOfUse',
            component:termsofuse }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
