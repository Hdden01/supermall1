<template>
  <div class="category-content">
    <BScroll :probeType="3" :pullUpLoad="true" class="wrapper">
      <CategoryLeft
        :titleContent="titleContent"
        @TitleContent="TitleContent"
      ></CategoryLeft>
    </BScroll>
    <BScroll class="wrapper right" ref="b1">
      <CategoryRight :maitKey="maitKey" @imgLoad="imgLoad" />
    </BScroll>
  </div>
</template>

<script>
import CategoryLeft from "views/category/childComps/CategoryLeft";
import CategoryRight from "views/category/childComps/CategoryRight";
import BScroll from "components/common/scroll/Scroll";
export default {
  name: "CategoryContent",
  components: { CategoryLeft, BScroll, CategoryRight },
  props: {
    titleContent: {
      type: Array,
      default() {
        return [];
      }
    },
    maitKey: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    TitleContent(index) {
      this.$emit("TitleContent", index);
      this.$refs.b1.top(0, 0, 500);
    },
    imgLoad() {
      this.$refs.b1.bscroll.refresh();
    }
  }
  //   updated(){
  //   this.$refs.b1.bscroll.refresh();
  // }
};
</script>

<style  scoped>
.category-content {
  display: flex;
  /* height: 100%; */
}
.wrapper {
  /* position: absolute;
    left: 0;
    right: 0; */
  /* top: 44px;
    bottom: 44px; */
  height: 100%;
  width: 30%;
}
.right {
  width: 70%;
}
</style>