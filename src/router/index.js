import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//引入路由组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

// 配置路由
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/search/:keyword',
            component:Search,
            meta:{show:true},
            name:'search'
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        //重定向，当项目跑起来的时候访问/，立马让他定向到首页
        {
            path:'/',
            redirect:'/home'
        }
    ]
})