<template>
    <TabBar>
      <TabBarItem link="/home" cor="#e56971">
        <template v-slot:icon> 
            <van-icon name="shop-o" />
        </template>
        <template v-slot:icon-active> 
            <van-icon name="shop-collect-o" />
        </template>
        <template v-slot:text>
          首页
        </template>
      </TabBarItem>
      <TabBarItem link="/about"  cor="#e56971">
        <template v-slot:icon>
          <van-icon name="apps-o" />
           </template>
            <template v-slot:icon-active> 
            <van-icon name="orders-o" />
        </template>
        <template v-slot:text>
        分类
        </template>
      </TabBarItem>
      <TabBarItem  cor="#e56971">
        <template v-slot:icon> 
           <van-icon name="shopping-cart-o" />
        </template>
         <template v-slot:icon-active> 
            <van-icon name="cart-circle-o" />
        </template>
        <template v-slot:text>
         购物车
        </template>
      </TabBarItem>
       <TabBarItem  cor="#e56971">
        <template v-slot:icon> 
           <van-icon name="bookmark-o" />
        </template>
         <template v-slot:icon-active> 
            <van-icon name="manager-o" />
        </template>
        <template v-slot:text>
         我的
        </template>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "mainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
       active:'',
    }
  },
};
</script>

<style scoped>
</style>