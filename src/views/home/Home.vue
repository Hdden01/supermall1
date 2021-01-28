<template>
  <div class="home">
    <!-- 导航 -->
    <NavBar bgColor="#ff8198" color="#fff" class="nav">
      <template v-slot:center>
        购物商城
      </template>
    </NavBar>
    <!-- better-scroll 外层的wrapper(封套) -->
    <BScroll class="wrapper" 
    ref="scrollTop" 
    :probeType="1" 
    :pullUpLoad="true" 
    @scrollPostion="contentScroll"
    @pullingUp="contentPull"
    >
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
    </BScroll>
    <BackTop class="top" @click.native="backClick" v-show="activeShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swipe from "components/common/swipe/Swipe";
import BScroll from "components/common/scroll/Scroll";
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
        pop: { page: 0, list: [] },
        // 新款
        new: { page: 0, list: [] },
        // 精选
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      activeShow: false,
      componentKey: 0
    };
  },
  components: {
    //公共组件
    NavBar,
    Swipe,
    BScroll,
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
      // 返回的时候有500毫秒的缓动动画
      // 直接访问父组件的bscrolldata数据
      // this.$refs.scrollTop.bscroll.scrollTo(0,0,500)
      // 访问父组件的方法
      this.$refs.scrollTop.top(0,0,500)
    },
    // 实现回到顶部按钮的显示和隐藏
    contentScroll(postion){
     if(postion.y<-1000){
       this.activeShow=true;
     }else{
       this.activeShow=false;
     }
    },
    contentPull(){
      //发送网络请求，请求更多页的数据
      //等待数据请求完成后，并且将新的数据展示出来后
      this.getHomeGoodsdata(this.currentType);
      //声明这个上拉加载执行完毕  没有就执行一次
      this.$refs.scrollTop.bscroll.finishPullUp();
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
      // 为了请求下一页数据
      let page = this.goods[type].page + 1;
      console.log(page);
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
        // 真正的页码+1
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
  z-index: 89;
  bottom: 50px;
  right: 8px;
}
.home {
  position: relative;
  /* 解决被盖住 */
  padding-top: 43px;
  /* 百分之百视口 viewport height */
  height: 100vh;
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
/* .tab-control {
  position: sticky;
  top: 43px;
  height: 46px;
  line-height: 46px;
  background: #fff;
} */
.scroll {
  margin-bottom: 60px;
}
.wrapper {
  /* 这些的前提下必须是home根div必须有一个视口高度 */
  position: absolute;
  overflow: hidden;
  /* 去除顶部的nav */
  top: 44px;
  /* 去除顶部的tabbar */
  /* 若不给根home添加高度，此处会不显示因为bottom */
  bottom: 60px;
  left: 0;
  right: 0;
}
</style>