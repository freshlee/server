// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routers from './router'
import ElementUi from 'element-ui'

Vue.config.productionTip = false
const router = new VueRouter(routers)
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(ElementUi)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
