import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入路由
import router from '@/router'

import store from '@/store'
// 三级联动组件——注册为全局组件
import TypeNav from '@/components/TypeNav'
// 全局组件的名字，哪一个组件
Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: h => h(App),
  //注册路由
  router,
  // 注册仓库
  store,
}).$mount('#app')
