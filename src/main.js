import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false //生产环境输出日志不输出

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
  //  等同于 ↓
  /**
   * componrnts: {
   *  App 
   * },
   * template:'<app />'
   */
}).$mount('#app')
