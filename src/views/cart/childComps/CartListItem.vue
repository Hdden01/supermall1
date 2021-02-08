<template>
  <!-- 每个商品列表的item -->
  <div class="shop-item">
    <ul>
      <li v-for="(item, index) in cartList" :key="index">
        <CheckButton
          class="icon"
          @checkClick="checkClick(item)"
          :isChecked="item.checked"
        />
        <!-- 商品图片 -->
        <div class="cartImage">
          <img :src="item.image" />
        </div>
        <!-- 商品介绍 -->
        <div class="cartMess">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
          <div class="buttom">
            <div class="price">￥{{ item.price }}</div>
            <div class="count">
              <van-icon name="cross" style="vertical-align:middle" />{{
                item.count
              }}
            </div>
          </div>
        </div>
        <!-- {{ item }} -->
      </li>
    </ul>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
export default {
  name: "CartListItem",
  data() {
    return {
    };
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick(item) {
      item.checked=!item.checked;
      // if (item.checked) {
      //   item.checked=false;
      // }else{
      //   item.checked=true;
      // }
    }
  }
};
</script>

<style  scoped>
.shop-item{
  padding-bottom: 44px;
}
/* .icon{
  width: 17px;
  height: 17px;
  display: flex;
  align-items: center;
  border: ;
  border-radius: 50%;
} */
li {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 6px;
  padding: 4px;
}
.cartlist .cartImage img {
  width: 91px;
  height: 114px;
  border-radius: 5px;
}
.cartlist {
  padding: 55px 0;
}
.cartMess {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2px 10px;
}
.title,
.desc {
  /* 实现多余字体显示... */
  /* 1.多余隐藏 */
  overflow: hidden;
  /* 2.强制不换行 */
  white-space: nowrap;
  /* 3.隐藏显示样式 */
  text-overflow: ellipsis;
  font-size: 21px;
}
.desc {
  font-size: 17px;
}
.buttom {
  display: flex;
  justify-content: space-between;
}
.price {
  font-size: 18px;
  color: #d43f0c;
}
</style>