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
  props:{
    probeType:{
      type:Number,
    },
    pullUpLoad:{
      type:Boolean
    }
  }
  ,
  methods: {
    scroll() {
         console.log(this.probeType);
      this.bscroll = new BScroll(this.$refs.wrapper, {
        // 侦测滚动
        probeType:this.probeType,
        // 允许下拉
        pullUpLoad: this.pullUpLoad,
        click: true,
      });
      // 监听位置
      this.bscroll.on('scroll',(postion)=>{
       this.$emit('scrollPostion',postion);
      })
      this.bscroll.on("pullingUp", () => {
        this.$emit('pullingUp');
        // this.bscroll.finishPullUp(); 
      });
    
    },
    //回到顶部函数的封装
    top(x,y,time){
        this.bscroll.scrollTo(x,y,time);
    }
  },
  mounted() {
    this.scroll();
  },
  // 解决每次刷新无法滚动
  updated(){
  this.bscroll.refresh();
  }
};
</script>

<style scoped>
</style>