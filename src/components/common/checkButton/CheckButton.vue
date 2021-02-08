<template>
  <div class="check">
    <img
      src="~assets/img/cart/tick.svg"
      :class="{ active: isChecked }"
      @click="checkClick"
    />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkClick() {
      this.$emit("checkClick");
    }
  }
};
</script>

<style  scoped>
.check {
  display: flex;
  /* vertical-align: middle; */
  align-items: center;
}
img {
  width: 17px;
  height: 17px;
  border: 1px solid #d5d4d4;
  border-radius: 50%;
}
.active {
  background: red;
}
</style>