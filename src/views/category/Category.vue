<template>
  <!-- 分类 -->
  <div class="category">
    <CategoryNavbar class="nav" />
    <CategoryContent
      :titleContent="titleContent"
      class="content"
      @TitleContent="TitleContent"
      :maitKey="maitKey"
    />
  </div>
</template>

<script>
import CategoryNavbar from "views/category/childComps/CategoryNavbar";
import CategoryContent from "views/category/childComps/CategoryContent";
import { getCategoryData, getCategorySubData } from "network/category";
export default {
  name: "Categroy",
  components: { CategoryNavbar, CategoryContent },
  data() {
    return {
      titleContent: [],
      index: 0,
      maitKey: []
    };
  },
  created() {
    //   1.请求左侧标题数据
    // // 当组件创建完
    this.getTitleContentData();
  },
  methods: {
    /**网络请求 */
     // 1.
    getData(index) {
      getCategorySubData(this.titleContent[index].maitKey).then(res => {
        let data = res.data;
        this.maitKey = data.list;
        console.log(this.maitKey);
      });
    },
    //   左侧标题导航
    getTitleContentData() {
      getCategoryData().then(res => {
        let data = res.data.category;
        this.titleContent = data.list;
        // 数据添加完毕后调用根据maitKey和index请求数据的方法
        // 2..index默认是0因此组件创建调用index为0的
        this.getData(0);
      });
    },
    /**事件监听 */
    TitleContent(index) {
      // console.log("x");
      // 点击按钮再次请求对应的数据
      // 3.
      this.getData(index);
    }
  }
};
</script>

<style  scoped>
.category {
  height: 100vh;
  overflow: hidden;
}
.nav {
  position: relative;
  z-index: 1;
}
.content {
  height: calc(100% - 44px - 44px);
}
</style>