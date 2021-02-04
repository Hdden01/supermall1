<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
// 注册better-scroll的插件
BScroll.use(PullUp);
export default {
  name: "Scroll",
  data() {
    return {
      bscroll: null
    };
  },
  props: {
    probeType: {
      type: Number
    },
    pullUpLoad: {
      type: Boolean
    }
  },
  methods: {
    scroll() {
      // console.log(this.probeType);
      this.bscroll = new BScroll(this.$refs.wrapper, {
        // 侦测滚动
        probeType: this.probeType,
        // 允许下拉
        pullUpLoad: this.pullUpLoad,
        click: true,
        // mouseWheel: true, //开启鼠标滚轮
        // disableMouse: false, //启用鼠标拖动
        disableTouch: false //启用手指触摸
      });
      // console.log(this.bscroll);
      // 监听滚动事件
      if (this.probeType == 3 || this.probeType == 2) {
        this.bscroll.on("scroll", postion => {
          this.$emit("scrollPostion", postion);
        });
      }

      // 下拉加载事件
      if (this.pullUpLoad) {
        this.bscroll.on("pullingUp", () => {
          this.$emit("pullingUp");
          // this.bscroll.finishPullUp();
        });
      }
    },
    //回到顶部函数的封装
    top(x, y, time) {
      // 首先判断这个存在吗，为false后面的不会执行
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    },
    getScrollY() {
      // 直接返回滚动的距离
      return this.bscroll ? this.bscroll.y : 0;
    }
  },
  mounted() {
    this.scroll();
  },
  // 解决每次刷新无法滚动
  updated() {
    // console.log("xxxxxxxxx");
    this.bscroll && this.bscroll.refresh();
    // console.log(this.bscroll);
  }
};
</script>

<style scoped>
</style>