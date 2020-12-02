import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

// 在原型中添加$bus，且$bus是一个新的VUE实例
Vue.prototype.$bus = new Vue()

Vue.use(toast)

// 使用fastclick解决移动端300ms延迟
  // 使用步骤：npm安装 -> main.js中导入 -> 调用attach方法
FastClick.attach(document.body)

// 使用vue-lazyload实现图片懒加载
  // 使用步骤： npm安装 -> main.js中导入 -> Vue.use(...) -> 在页面的img标签中：将':src'替换为'v-lazy'
  // 注：在use时，可以再传入一个对象作为第二个参数，该对象包含一些相关属性
// Vue.use(VueLazyLoad, {
//   ...
// })
Vue.use(VueLazyLoad)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
