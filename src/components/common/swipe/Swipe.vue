<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <a :href="image.link"
          ><img :src="image.image" @load="imageLoad"
        /></a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Swipe",
  data() {
    return {
      isLoad:true
    }
  },
  props: {
    banners: {
      type: [Array]
    }
  },
  methods: {
    //1. 监听图片什么时候加载完
    // 此处只需要执行一次
    imageLoad() {
      if (this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad=false
      }
    }
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>