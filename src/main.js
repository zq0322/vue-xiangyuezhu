// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store"
import router from './router'

import ElementUI from 'element-ui'
import VueCookie from 'vue-cookie'
import Component from 'comp/install/index.js'//install注册全局组件

import '@/common/css/common.css'
import '@/common/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(Component)
Vue.use(VueCookie)
Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
})
