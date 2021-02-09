<template>
  <div class="cate-right">
    <CategoryRightItem
      v-for="(item, index) in maitKey"
      :key="index"
      class="item"
    >
      <template v-slot:img>
        <a :href="item.link"><img :src="item.image" @load="imgLoad"/></a>
      </template>
      <template v-slot:text>{{ item.title }}</template>
    </CategoryRightItem>
  </div>
</template>

<script>
import CategoryRightItem from "views/category/childComps/CategoryRightItem";
export default {
  name: "CategoryRight",
  data(){
      return{
          imagLength:null,
          count:0
      }
  }
  ,
  components: { CategoryRightItem },
  props: {
    maitKey: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgLoad() {
        if (++this.count==this.imagLength) {
            this.$emit('imgLoad');
            console.log('x');
            console.log(this.imagLength);
        }
            // console.log(this.maitKey.length);
    }
  },
  watch:{
     maitKey(){
        //  console.log('bb');
        //  console.log(this.maitKey);
         this.imagLength=this.maitKey.length;
     } 
  }
};
</script>

<style scoped>
.cate-right::after {
  display: block;
  content: "";
  clear: both;
}
.item {
  float: left;
}
</style>