<template>
  <div class="home">
    <BackTop class="top" @click.native="backClick" v-show="activeShow" />
    <!-- 导航 -->
    <NavBar bgColor="#ff8198" color="#fff" class="nav">
      <template v-slot:center>
        购物商城
      </template>
    </NavBar>
    <!-- 轮播图 -->
    <Swipe :banners="banners"></Swipe>
    <!-- 详情页 -->
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
    <!-- 特征特色 -->
    <HomeFeaturView></HomeFeaturView>
    <!-- 选项 -->
    <TabControl
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @activeText="tabClick"
    ></TabControl>
    <!-- 商品信息 -->
    <GoodsList :goods="goods[currentType].list" class="scroll" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swipe from "components/common/swipe/Swipe";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
import { getHomeMultipledata, getHomeGoodsdata } from "network/home.js";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeaturView from "./childComps/HomeFeaturView";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        // pop流行
        'pop': { page: 0, list: [] },
        // 新款
        'new': { page: 0, list: [] },
        // 精选
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      activeShow: false,
      componentKey: 0,
    };
  },
  components: {
    //公共组件
    NavBar,
    Swipe,
    TabControl,
    GoodsList,
    BackTop,
    // home的子组件
    HomeRecommendView,
    HomeFeaturView
  },
  // 标注是异步函数
   created() {
    // 1.请求多个数据
     this.getHomeMultipledata();
    // 2.商品展示数据
    // 调用那个类型的接口
     this.getHomeGoodsdata("pop");
     this.getHomeGoodsdata("new");
     this.getHomeGoodsdata("sell");
    window.onscroll=this.scrollHandle;
    
    
  },
  methods: {
    /**
     *事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      //    回到顶部
      window.scrollTo(0, 0);
    },
    scrollHandle() {
      // console.log(this.goods);
      // 获取页面页面的滚动高度
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;

      // 获取页面滚动距离顶部的高度,  window.pageYOffse 兼容苹果
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      // 获取页面的可视高度
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      if (scrollTop > 100) {
        this.activeShow = true;
      } else {
        this.activeShow = false;
      }
      // 我们可以在这里判断页面的滚动是否到了底部
      if (Math.ceil(scrollTop + clientHeight) == scrollHeight) {
        this.getHomeGoodsdata(this.currentType);
      }
      // 当然我们也可以滚动距离底部还有一定距离的时候执行加载
      if (Math.ceil(scrollTop + clientHeight) >= scrollHeight - 20) {
        // 距离底部还有20的时候执行数据加载
        this.flag = false;
      }
    },

    /**
     * 网络请求的相关方法
     */
    getHomeMultipledata() {
      // 1.请求多个数据
      //await等待
      getHomeMultipledata().then(res => {
        // 使用变量来接收数据
        // 函数内的变量都是局部变量(外部无法使用)，函数执行完变量会被内存回收，
        // 轮播图数据
        this.banners = res.data.banner.list;
        // 推荐信息数据
        this.recommends = res.data.recommend.list;
        // console.log(res.data);
      });
    },
    getHomeGoodsdata(type) {
      let page = this.goods[type].page + 1;
      console.log(page);
      // if (page == 96||page==72||page==83) {
      //     console.log("kong ");
      //     return;
      //   }
      // 2.商品展示数据
      getHomeGoodsdata(type, page).then(res => {
        //  此处不可使用此方法，因为还有陆续页码的数据需要添加到该数组处后面。
        // this.goods[type].list=res.data.list
        // 解决办法1
        // for(let i of res.data.list){
        //     this.goods[type].list.push(i)
        //     console.log(i);
        // }
        // 解决办法2
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(res.data.list);
      });
    }
  }
};
</script>

<style scoped>
.back-top {
  position: fixed;
  z-index: 1;
  bottom: 50px;
  right: 8px;
}
.home {
  position: relative;
  /* 解决被盖住 */
  padding-top: 43px;
}
.home .nav {
  position: fixed;
  /* 解决定位元素脱离文档流  常规流盒子排列会忽略定位元素*/
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 700;
}
.tab-control {
  position: sticky;
  top: 43px;
  height: 46px;
  line-height: 46px;
  background: #fff;
}
.scroll {
  margin-bottom: 60px;
}
</style>