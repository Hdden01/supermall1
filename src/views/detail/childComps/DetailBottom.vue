<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="le">
        <div class="icon">
          <van-icon name="chat-o" />
        </div>
        <div class="text">客服</div>
      </div>
      <div class="ri">
        <div class="icon">
          <van-icon name="shop-o" />
        </div>
        <div class="left-text">店铺</div>
      </div>
      <div class="cen">
        <div class="icon">
          <van-icon name="star-o" />
        </div>
        <div class="left-text">收藏</div>
      </div>
    </div>
    <div class="center" @click="addToCart">加入购物车</div>
    <div class="right">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  components: {},
  data() {
    return {};
  },
  methods: {
    // 处理添加数据到购物车
    addToCart() {
    //  1.数据在detail.vue里面需要发送事件
    this.$emit('addToCart');
    }
  }
};
</script>

<style  scoped>
.bottom-bar {
  height: 58px;
  background: #fff;
  width: 100%;
  display: flex;
  border-top: 1px solid #f5f5f5;
}
.left,
.right,
.center {
  flex: 1;
  text-align: center;
  line-height: 58px;
}
.icon {
  font-size: 24px;
}

.center {
  background: #eac600;
}
.right {
  background: #f25d7d;
}
.left {
  line-height: initial;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
}
</style>