<template>
  <div class="detail">
    <!-- 导航标题 -->
    <DetailNavBar class="detail-nav" @titleClick="titleClick" ref="detailnav" />
    <!-- 可滚动区域 -->
    <BScroll
      :probeType="2"
      :pullUpLoad="true"
      class="wrapper"
      ref="scroll"
      @scrollPostion="scrollPostion"
    >
      <!-- 轮播图 -->
      <DetailSwiper :topImages="topImages" @swiperImageLoad="swiperImageLoad" />
      <!--  商品信息-->
      <DetailBaseInfo :goods="goods" />
      <!-- 店铺信息 -->
      <DetailShopInfo :shop="shop" />
      <!-- 商品详细信息 -->
      <DetailGoodsInfo
        :detailInfo="detailInfo"
        @imgLoad="imgLoad"
        :paramInfo="paramInfo"
      />
      <!-- 商品参数params -->
      <DetailParamInfo :paramInfo="paramInfo" ref="params" />
      <!-- 用户评论 -->
      <DetailCommentInfo :rate="rate" ref="comment" />
      <!-- 推荐信息展示 -->
      <GoodsList :goods="recommends" ref="recommend" />
    </BScroll>
    <BackTop
      class="top"
      @click.native="DetailTop"
      v-show="postionTop"
    ></BackTop>
    <DetailBottom class="bottom" @addToCart="addToCart" />
  </div>
</template>

<script>
// 1.将actions映射到method是内
import {mapActions} from 'vuex'
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";
import GoodsList from "components/content/goods/GoodsList";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo";
import DetailBottom from "views/detail/childComps/DetailBottom";
import BackTop from "components/content/backTop/BackTop";
import BScroll from "components/common/scroll/Scroll";
export default {
  name: "Detail",
  components: {
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    BScroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    BackTop,
    DetailBottom
  },
  // 3.
  data() {
    return {
      iid: null,
      topImages: [],
      recommends: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      rate: {},
      themeTopYs: [],
      currentIndex: 0,
      postionTop: false,
      item_id: null
    };
  },
  created() {
    //   1.保存传入的iid(动态路由)
    // this.iid = this.$route.params.iid;
    // console.log(this.$route.params);
    // 1.2 query传参
    this.iid = this.$route.query.iid;
    // console.log(this.$route);
    // 2.根据Fiid请求数据进行展示
    this.getDetailData(this.iid);
  },
  methods: {
    /**
     * 处理网络请求
     */
    getDetailData(iid) {
      getDetail(iid)
        .then(res => {
          //   1.获取轮播图数据
          let data = res.result;
          this.topImages = data.itemInfo.topImages;
          // console.log(res);
          // 2.将数据抽离成一个对象进行存储
          // 获取商品信息
          // 2.
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );
          // 2.
          // 3.店铺信息
          this.shop = new Shop(data.shopInfo);
          // console.log(this.paramInfo);
          // 2.
          // 4.店铺详细信息
          this.detailInfo = data.detailInfo;
          // 2.
          // 5.商品参数
          this.paramInfo = new GoodsParam(
            data.itemParams.info,
            data.itemParams.rule
          );
          // 6.商品评价信息展示

          this.rate = data.rate.list[0];
        })
        .catch(err => {
          console.log(err);
        });
      getRecommend()
        .then(res => {
          // 7.推荐商品
          // this.recommends =res;
          const data = res.data;
          this.recommends = data.list;
          // console.log(this.recommends);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 2.使用映射
    // this.addToCart(product)代替下面
    //  this.$store.dispatch("addCart", product)
     ...mapActions(['addCart'])
    ,
    // 2.DetailBottom内发送的事件
    // 实现添加到购物车
    addToCart() {
      // 3.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      // iid需要传递  作为商品的标识
      product.iid = this.iid;
      // console.log(this.goods);
      // actions的promise可以在这里接收到，actions内的方法就是拿到组件内去使用的
      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(res);
      // });
      this.addCart(product).then(res=>{
        console.log(res);
        console.log(this.$toast);
        this.$toast.show(res,1500)
      })
      // window.alert('已加入购物车')
    },
    // 监听图片加载完就刷新
    swiperImageLoad() {
      this.$refs.scroll.bscroll.refresh();
    },
    //5. 监听图片全部加载完刷新
    // 商品详细信息的图片
    imgLoad() {
      this.$refs.scroll.bscroll.refresh();
      // 获取对应组件距离顶部的高度，实现点击标题跳转到对应的位置。
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      // 赋值最大值解决滚动导航变色if过于繁琐的问题
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    },
    // imageLoad(){
    //     this.$refs.scroll.bscroll.refresh();
    // },

    // 此处可使用混入mixins进行抽离，因为home组件也有这个功能
    DetailTop() {
      this.$refs.scroll.top(0, 0, 500);
    },
    // 点击标题跳转到对应的位置
    // 导航的回调函数
    titleClick(index) {
      // console.log(index);
      // 因为向下走都是负的
      this.$refs.scroll.top(0, -this.themeTopYs[index], 500);
    },
    //1. 监听滚动的回调事件
    // 到具体的位置变色
    scrollPostion(postion) {
      //2.获取y值，因为获取的y值是负的,存储的是正的。
      const postionY = -postion.y;
      let len = this.themeTopYs.length;
      // 3.positionY和themeTopYs中的值进行对比
      // [0, 6781, 7583, 7809]
      // postionY在0到6781之间,index=0;
      // postionY在=6781到7583之间,index=1;
      //postionY在=7583到7809之间,index=2;
      // postionY 大于等于7809值,index=3;
      // -1是因为最后一个值是为了解决item+1取不到的问题，不需要循环
      for (let item = 0; item < len - 1; item++) {
        if (
          this.currentIndex !== item &&
          postionY >= this.themeTopYs[item] &&
          postionY < this.themeTopYs[item + 1]
        ) {
          this.currentIndex = item;
          this.$refs.detailnav.currentIndex = this.currentIndex;
        }
        // 隐藏显示
        if (-postion.y > 1000) {
          this.postionTop = true;
        } else {
          this.postionTop = false;
        }
        // 普通方法
        //再次判断当currentIndex(初始为0)不等于item(到1的时候变色)
        //&&(当i<3并且在两数之前||当i==3并且i大于最后一个数1)
        // if (
        //   this.currentIndex !== item &&
        //   ((item < len - 1 &&
        //     postionY >=this.themeTopYs[item] &&
        //     postionY < this.themeTopYs[item + 1]) ||
        //     (item == len - 1 && postionY >=this.themeTopYs[item]))
        // ) {
        //     console.log(item);
        //   //当不相等的时候重新赋值
        //   this.currentIndex = item;
        //   this.$refs.detailnav.currentIndex=this.currentIndex;
        // }
      }
    }
  }
};
</script>

<style scoped>
.detail {
  /* overflow: auto; */
  position: relative;
  height: 100vh;
  z-index: 9;
  background: #ffffff;
}
.detail-nav {
  position: relative;
  z-index: 8;
}
.wrapper {
  /* 这些的前提下必须是home根div必须有一个视口高度 */
  position: absolute;
  overflow: hidden;
  /* 去除顶部的nav */
  top: 44px;
  /* 去除顶部的tabbar */
  /* 若不给根home添加高度，此处会不显示因为bottom */
  bottom: 58px;
  left: 0;
  right: 0;
  /* height: calc(100%-44px); */
}
.top {
  position: fixed;
  bottom: 60px;
  z-index: 99;
  right: 6px;
}
.bottom {
  position: fixed;
  bottom: 0;
}
</style>