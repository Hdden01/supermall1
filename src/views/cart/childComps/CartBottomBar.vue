<template>
  <div class="buttomBar">
    <div class="checkAll">
      <CheckButton :isChecked="isSelectAll"
       @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="total">合计:{{ totlePrice }}</div>
    <div class="count">去计算:{{ checkedLength }}</div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  methods: {
    //   点击按钮
    checkClick() {
      // 全选状态的情况下  都改为false
      if (this.isSelectAll) {
        this.cartList.map(item => {
          item.checked = false;
        });
        // 否则都改为true
      } else {
        this.cartList.forEach(item => {
          item.checked = true;
        });
      }
    }
  },
  computed: {
    // 代替return this.$store.getters.cartList(外面有方法)
    ...mapGetters(["cartList", "cartLength"]),
    //   计算选中的价格
    totlePrice() {
      let total = this.cartList;
      // 满足条件就返回结果
      // 遍历数组，满足条件将内容返回
      // 1.将选中的对象返回
      // 2.将选中状态的值进行计算
      return (
        "￥" +
        total
          .filter(item => {
            return item.checked;
          })
          // 第一个参数用于前一个值,第二个参数用于遍历数组的值
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    // 选中状态就返回然后长度
    checkedLength() {
      return this.cartList.filter(item => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      return (
        this.cartList.filter(item => {
          return item.checked;
        }).length == this.cartLength
      );
      // 对所有选中的进行取反，不返回数据到数组长度为0   取反为true
      // 若有一个不选中，取反为true，返回数据到数组，取反为false
      return !this.cartList.filter(item => {
        return !item.checked;
      }).length;
    }
  }
};
</script>

<style  scoped>
.buttomBar {
  position: fixed;
  width: 100%;
  bottom: 44px;
  left: 0;
  background: #eee;
  height: 44px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;
}
.checkAll {
  display: flex;
  align-items: center;
  padding-left: 10px;
}
span {
  margin-left: 4px;
}
.count {
  background: rgb(236, 16, 89);
  height: 44px;
  line-height: 44px;
  padding: 0 10px;
}
</style>