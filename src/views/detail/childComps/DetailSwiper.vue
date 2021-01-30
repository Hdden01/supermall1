<template>
  <div>
    <van-swipe :autoplay="3000" class="detail-swipe">
      <van-swipe-item v-for="(image, index) in topImages" :key="index">
        <img :src="image" @load="imageLoad" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    //1. 监听图片什么时候加载完
    // 此处只需要执行一次
    imageLoad() {
      if (this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = false;
      }
    }
  }
};
</script>

<style  scoped>
img {
  width: 100%;
  /* height: 100%; */
}
.detail-swipe{
    height: 300px;
    /* overflow: hidden; */
    object-fit: contain;
}
</style>