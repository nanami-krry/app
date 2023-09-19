import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//引入路由组件
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Search from "@/views/Search";
let originpush = VueRouter.prototype.push;
// 配置路由
VueRouter.prototype.push = function (location, reslove, reject) {
  if (reslove && reject) {
    originpush.call(this, location, reslove, reject);
  } else {
    originpush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace=function(location,reslove,reject){
    if(reslove&&reject){
        originReplace.call(this,location,reslove,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
      props: ($route) => {
        return { keyword: $route.params.keyword, big: $route.query.big };
      },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    //重定向，当项目跑起来的时候访问/，立马让他定向到首页
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
