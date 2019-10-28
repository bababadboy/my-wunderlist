import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

// 阿里图标
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'
