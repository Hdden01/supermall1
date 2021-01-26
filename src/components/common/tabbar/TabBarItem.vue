<template>
  <div class="tab-bar-item" @click="itemClick()" :style="isColor" >
    <div class="item-icon" v-show="!isActive">
      <slot name="icon"></slot>
    </div>
    <div class="item-icon-active" v-show="isActive">
      <slot name="icon-active"></slot>
    </div>
    <div class="item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String
    },
    cor: {
      type: String
    }
  },
  methods: {
    // 点击就将当前组件对应的值传递过来
    itemClick() {
      this.$router.replace(this.link);
    }
  },
  computed: {
    isActive() {
      //   当前活跃状态  当前路径中有传入的值
      return this.$route.path.indexOf(this.link) !== -1;
    },
    isColor() {
        console.log(this.cor);
      return this.isActive ?{color:this.cor}:{};
    }
  }
};
</script>

<style  scoped>
/* 此处修改的是一个块的样式 */
.tab-bar-item {
  flex: 1;
  margin-top: 6px;
  font-size: 12px;
}
.item-icon,
.item-icon-active {
  font-size: 20px;
}
</style>