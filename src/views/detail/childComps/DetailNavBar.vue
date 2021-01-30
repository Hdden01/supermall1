<template>
  <NavBar>
    <template v-slot:left>
      <van-icon name="arrow-left" class="icon" @click='backClick'/>
    </template>
    <template v-slot:center>
      <ul class="center">
        <li
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index == currentIndex }"
          @click="clickActive(index)"
        >
          {{ item }}
        </li>
      </ul>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      //   记录点击的下边
      currentIndex: 0
    };
  },
  methods: {
    clickActive(index) {
      this.currentIndex = index;
    },
    backClick(){
        // 返回上一页go(-1)返回上一页
        this.$router.back();
    }
  }
};
</script>

<style scoped>
.icon {
  font-size: 34px;
  line-height: 44px;
}
.center {
  display: flex;
  margin: 0 0 0 10px;
}
li {
  flex: 1;
  font-size: 19px;
}
.active {
  color: var(--color-high-text);
}
</style>