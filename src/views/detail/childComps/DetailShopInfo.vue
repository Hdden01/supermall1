<template>
  <div class="shop">
    <div class="img">
      <img :src="shop.log"/>
      <span>{{ shop.name }}</span>
    </div>
    <div class="other">
      <div class="left">
        <div class="left1">
          <p class="top">{{shop.sells|sellCountFilter}}</p>
          <p class="bottom">总销量</p>
        </div>
        <div class="left2">
          <p class="top">{{ shop.goodsCount }}</p>
          <p class="bottom">全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(item, index) in shop.score" :key="index" class="right-score">
          <span>{{ item.name }}</span
          ><span class="right-color" :class="{color:item.isBetter}">{{ item.score }}</span
          ><span :class="{ red: item.isBetter, green: !item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
     <div class="stroll">
       <span> 进店逛逛</span>
      </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter: function(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style  scoped>
.stroll{
  text-align: center;
  margin-top: 50px;
}
.stroll span{
  display: inline-block;
    padding: 6px 30px;
    border-radius: 10px;
  background: #e7ecf1;
}
.shop {
  color: #000;
}
.img img {
  width: 60px;
  border: 1px solid #f0f0f0;
  border-radius: 50px;
  vertical-align: middle;
  margin-right: 8px;
}
.img {
  margin-top: 20px;
  margin-left: 10px;
}
.other {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
/*  */
.left{
  display: flex;
  border-right:2px solid #ededed;
  /* padding-right: 90px; */
}
.top{
  font-size: 19px;
  margin-bottom: 16px;
}
/* 销量宝贝 */
.bottom{
  font-size: 13px;
}
/* 左侧区域 */
p{
  margin-right: 20px;
}
.right-score{
  margin-bottom: 8px;
}
.right-score span{
  margin-right: 10px;
}
.green,
.red {
  color: #fff;
}
.green {
  background: green;
}
.right-color{
  color: green;
}
.color{
  color: red;
}
.red {
  background: red;
}
</style>