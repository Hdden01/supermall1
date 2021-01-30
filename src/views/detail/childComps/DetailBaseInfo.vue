<template>
  <div class="base-goods" v-if="Object.keys(goods).lenght !== 0">
    <div class="title">
      <p>{{ goods.title }}</p>
    </div>
    <div class="price">
      <span class="new">{{ goods.newPrice }}</span>
      <span class="old">{{ goods.oldPrice }}</span>
      <span :style="{ background: goods.discountBgColor }" class="dis">{{
        goods.discount
      }}</span>
    </div>
    <div class="other">
      <div  v-for="(item, index) in goods.columns" :key="index" class="other-span">
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="service">
        <div v-for="(item,index) in goods.services" :key="index">
            <img :src="item.icon">
            <span>{{item.name}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style  scoped>
.base-goods {
  margin-top: 16px;
  padding-left: 10px;
}
.title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  color: #000;
}
.price {
  position: relative;
}
.new {
  color: var(--color-high-text);
  font-size: 18px;
  font-weight: bold;
}
.old {
  text-decoration: line-through;
  font-size: 13px;
}
.dis {
  display: inline-block;
  color: #fff;
  border-radius: 5px;
  padding: 0 6px;
  vertical-align: top;
}
span {
  margin-right: 10px;
}
.other {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  border-bottom: 3px solid #f1f1f1;
  padding-bottom: 10px;
    font-size: 13px;
}
.service img{
    width: 15px;
}
.service{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    border-bottom: 3px solid #f1f1f1;
    padding-bottom: 20px;
    font-size: 14px;
}
/* .other-span {
  flex: 1;
} */
</style>