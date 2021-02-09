<template>
  <div class="cate-left">
    <CategoryLeftItem
      v-for="(item, index) in titleContent"
      :key="index"
      class="item"
      :class="{active:index==currentIndex}"
       @click.native="activeClick(index)"
      >{{ item.title }}</CategoryLeftItem
    >
  </div>
</template>

<script>
import CategoryLeftItem from "views/category/childComps/CategoryLeftItem";
export default {
  name: "CategoryLeft",
  components: { CategoryLeftItem },
  data(){
      return{
          currentIndex:0
      }
  }
  ,
  props: {
    titleContent: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  methods:{
      activeClick(index){
          this.currentIndex=index;
          this.$emit('TitleContent', index);
      }
  }
};
</script>

<style scoped>
.cate-left {
  background: #eee;
  /* height: 100%; */
  text-align: center;
  /* width: 30%; */
}
.item {
  color: #888;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  padding: 15px 0;
  /* width: 100%; */
}
.active{
border-left: 4px solid var(--color-tint);
background: #fff;
color: var(--color-tint);

}
</style>