<template>
  <div class="cartlist">
   <CartListItem :cartList="cartList"/>
  </div>
</template>

<script>
import CartListItem from 'views/cart/childComps/CartListItem';
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  computed: {
    // 用于组件遍历展示数据
    ...mapGetters(["cartList"])
  },
  components:{
      CartListItem
  }
};
</script>

<style  scoped>
.cartlist{
  padding: 51px 0;
  height: 100vh;
}
</style>