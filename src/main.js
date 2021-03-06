import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入rem适配
import 'amfe-flexible'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 注册vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
