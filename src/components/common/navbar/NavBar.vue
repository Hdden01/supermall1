<template>
  <div class="nav-bar" :style="{background:bgColor,color:color}">
    <div class="left">
      <slot name：left></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
      bgColor:{
          type:String
      },
      color:{
          type:String
      }
  }
};
</script>

<style scoped>
/* 进行插槽布局 */
.nav-bar {
  /* width: 100%; */
  display: flex;
  line-height:44px;
  height:44px;
  text-align: center;
  /* 盒子阴影 */
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
}
.left,.right{
    width: 60px;
    /* background: red; */
}
/* 中间占据剩余区域 */
.center{
    flex: 1;
    /* background: palegreen; */
}
</style>