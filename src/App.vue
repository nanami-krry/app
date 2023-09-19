<template>
  <div>
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在home 、search显示footer组件，其他时间隐藏 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: { Header, Footer },
  mounted(){
    // 通知Vuex发送请求，获取数据，存储于仓库中
    //获取三级列表数据，之发送一次
    this.$store.dispatch("categoryList");
  }
};
</script>

<style scoped>
</style>