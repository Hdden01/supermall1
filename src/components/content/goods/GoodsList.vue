<template>
  <div class="goods" >
      <GoodsListItem v-for='(item,index) of goods' :key="index" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from'components/content/goods/GoodsListItem'
export default {
  name: "GoodsList",
  components:{
      GoodsListItem
  }
  ,
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style  scoped>
.goods{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>