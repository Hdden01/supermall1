<template>
  <div id="app">
    <!-- 路由展示 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- tabbar -->
  <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabbar/mainTabBar";
export default {
  name: 'App',
  components: {
    mainTabBar
  }
}
</script>
<style>
@import '~assets/css/base.css';
#app{
  /* position: relative; */
}
</style>
