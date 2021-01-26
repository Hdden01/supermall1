<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <a :href="image.link"><img :src="image.image"/></a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Swipe",
  props: {
    banners: {
      type: [Array]
    }
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
div {
  position: relative;
}
</style>