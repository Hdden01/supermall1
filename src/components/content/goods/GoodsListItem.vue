<template>
  <div class="goods-item">
    <div class="img">
      <img :src="goodsItem.show.img" />
    </div>
    <div class="text">
      <p>{{ goodsItem.title }}</p>
      <span class="text-color">{{ goodsItem.orgPrice }}</span>
      <span class="te"><van-icon name="star-o" />{{goodsItem.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-item {
    /* 让每两个块在不同屏幕上都预留相同的空间 */
 width: 48%;
  text-align: center;
  margin: 0 4px;
  margin-top: 10px; 
}

img {
  width: 100%;
}
p{
     overflow: hidden;
  /* 移除样式 */
  text-overflow: ellipsis;
    /* 不换行 */
    white-space: nowrap;
    margin: 6px 0;
}
.text-color {
  color: var(--color-high-text);
}
.te{
    font-size: 13px;
    margin-left: 7px;
}
</style>