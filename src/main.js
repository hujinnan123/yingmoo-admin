import Vue from 'vue'
import App from './App'
import router from './router'
//进入首页的许可
import './permission'
/* 移动端适配 */
import 'lib-flexible'
/* element-ui */
import Element from 'element-ui'
// import './styles/element-variables.scss'
import './styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
/* reset css */
import 'normalize.css/normalize.css'
/* 全局注册组件 */
import VueTouch from 'vue-touch'
import store from './store'
import './icons'
Vue.use(Element)
Vue.use(VueTouch)
VueTouch.config.swipe = {
  threshold: 10
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
