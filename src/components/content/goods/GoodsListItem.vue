<template>
  <div class="goods-item" @click="itemClick">
    <div class="img">
      <img :src="showImage" @load="imageLoad"/>
    </div>
    <div class="text">
      <p>{{goodsItem.title }}</p>
      <span class="text-color">{{showPrice }}</span>
      <span class="te"><van-icon name="star-o" />{{goodsItem.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemClick() {
      // 1.详情页需要返回
      // 当前数组内的iid(将iid内的数据到路由界面进行展示)
      let iid=this.goodsItem.iid;
    if (this.$route.path.indexOf('/home')!==-1) {
      this.$router.push({path:'/detail', query: {iid}});
    }
    else if (this.$route.path.indexOf('/detail')!==-1) {
      let path=this.$route.path;
      // path.replace(path,this.goodsItem.item_id)
      let item_id=this.goodsItem.item_id;
      this.$router.push({query: {item_id}});
      this.$bus.$emit('itemClick');
    }
    },
    imageLoad(){
      // this.$bus.#$emit('imageLoad');
      // 根据路由判断回调那个函数
      // 事件总线
      //决定监听那个路由内的图片
      // if(this.$route.path.indexOf('/home')){
      //   this.$bus.#$emit('homeItemImgLoad');
      // }else if(this.$route.path.indexOf('/detail'))
      // this.$bus.$emit('detailImageLoad');
    },
  },
  // 解决数据参数不用的问题
  computed: {
      showImage(){
       return this.goodsItem.image||this.goodsItem.show.img
      },
      showPrice(){
        return this.goodsItem.discountPrice||this.goodsItem.orgPrice
      }
    }
};
</script>

<style scoped>
.goods-item {
  /* 让每两个块在不同屏幕上都预留相同的空间 */
  width: 48%;
  text-align: center;
  margin: 0 4px;
  margin-top: 10px;
}

img {
  width: 100%;
}
p {
  overflow: hidden;
  /* 移除样式 */
  text-overflow: ellipsis;
  /* 不换行 */
  white-space: nowrap;
  margin: 6px 0;
}
.text-color {
  color: var(--color-high-text);
}
.te {
  font-size: 13px;
  margin-left: 7px;
}
</style>