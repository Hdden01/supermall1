<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
.tab-bar {
  /* 本身样式  高度由使用者决定 */
  width: 100%;
  background: #f6f6f6;
  border: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  /* 定位 */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  /* 对里面的小盒子进行布局 */
  display: flex;
  text-align: center;
}
</style>