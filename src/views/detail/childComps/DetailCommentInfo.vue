<template>
  <div v-if="Object.keys(rate).length !== 0" class="comment">
    <!-- 标题 -->
    <div class="header">
      <div class="left">用户评价</div>
      <div class="right">
        更多
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 用户头像和名字 -->
    <div class="user">
      <img :src="rate.user.avatar" alt="" />
      <span>{{ rate.user.uname }}</span>
    </div>
    <div class="detail">
      <p>{{ rate.content }}</p>
      <div class="other">
        <span class="date">{{ rate.created | showDate }}</span>
        <span>{{ rate.style }}</span>
      </div>
      <div class="imgs">
        <img :src="item" v-for="(item, index) in rate.images" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../common/utils";
export default {
  name: "DetailCommentInfo",
  data() {
    return {};
  },
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      }
    }
  },
   // 将第一个数据当作过滤的参数
    filters:{
      showDate(value) {
        //1.将时间戳转成date对象
        const date = new Date(value*1000);
        //2.将date格式化
        return formatDate(date, "yyyy-M-dd");
      }
    }
};
</script>

<style  scoped>
.header {
  display: flex;
  /* margin-top: 20px; */
  margin-bottom: 20px;
  border-bottom: 5px solid #f2f5f8;
  justify-content: space-between;
}
.left,
.right {
  margin: 16px 8px;
  vertical-align: middle;
}
.user {
  padding: 10px 0 5px;
}
.user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.detail {
  padding: 0 5px 15px;
}
.detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.detail .other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.other .date {
  margin-right: 8px;
}
.imgs {
  margin-top: 10px;
}
.imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>