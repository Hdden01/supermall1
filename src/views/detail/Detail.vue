<template>
  <div>
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import { getDetail, Goods } from "network/detail";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    };
  },
  created() {
    //   1.保存传入的iid(动态路由)
    this.iid = this.$route.params.iid;
    // console.log(this.$route.params);
    // 2.根据Fiid请求数据进行展示
    this.getDetailData(this.iid);
  },
  methods: {
    /**
     * 处理网络请求
     */
    getDetailData(iid) {
      getDetail(iid).then(res => {
        //   1.获取轮播图数据
        let data=res.result;
        this.topImages = data.itemInfo.topImages;
        console.log(res);
        // 2.将数据抽离成一个对象进行存储
        // 获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        console.log(this.goods);
      });
    }
  }
};
</script>

<style scoped>
</style>