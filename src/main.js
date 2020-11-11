import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 在原型中添加$bus，且$bus是一个新的VUE实例
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
