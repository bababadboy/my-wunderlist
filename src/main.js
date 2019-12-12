import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 阿里图标
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

import global_ from './config/global'



// 全局变量，this.GLOBAL.xxx 访问
Vue.prototype.GLOBAL = global_;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')




