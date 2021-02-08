export const itemListenerMixin={
    data () {
        return {
            itemImgListener:null
        }
    },
mounted () {
    // 解决图片加载完就更新
    this.itemImgListener= () => {
        console.log("----");
        this.$refs.scrollTop.bscroll.refresh();
      }
      this.$bus.$on("imageLoad",this.itemImgListener);
    //   console.log('xxxx');
}
}