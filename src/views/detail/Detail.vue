<template>
  <div>
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
import {getDetail} from "network/detail";
import DetailSwiper from "views/detail/childComps//DetailSwiper";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages:[]
    };
  },
  created() {
    //   1.保存传入的iid
    this.iid = this.$route.params.iid;
    // console.log(this.$route.params);
    // 2.根据Fiid请求数据进行展示
    this.getDetailData(this.iid)
  },
  methods:{
    /**
     * 处理网络请求
     */
    getDetailData(iid) {
      getDetail(iid).then(res => {
        //   获取轮播图数据
          this.topImages=res.result.itemInfo.topImages;
console.log(res);
console.log(this.topImages);
      })
    }
  }
}
</script>

<style scoped>
</style>