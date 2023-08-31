import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入路由
import router from '@/router'
// 三级联动组件——注册为全局组件
import TypeNav from '@/views/Home/TypeNav'
// 全局组件的名字，哪一个组件
Vue.component(TypeNav.name,TypeNav)
import { reqCategoryList} from "@/api/index"
reqCategoryList()
new Vue({
  render: h => h(App),
  //注册路由
  router,
}).$mount('#app')
