<template>
  <div class="param" v-if="Object.keys(paramInfo).length !== 0">
    <!-- 一个table -->
    <table
      v-for="(table, index1) in paramInfo.sizes"
      :key="index1"
      class="info-size"
    >
      <!-- 四个tr -->
      <tr v-for="(tr, index2) in table" :key="index2">
        <!-- 每个tr里有四个td -->
        <td v-for="(td, index3) in tr" :key="index3">{{ td }}</td>
      </tr>
    </table>

    <table>
      <tr v-for="(set, index4) in paramInfo.infos" :key="index4">
        <td class="info-param-key">{{ set.key }}</td>
        <td class="param-value">{{ set.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  data() {
    return {};
  },
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    // imageLoad(){
    //   this.$emit('imageLoad');
    // }
  }
};
</script>

<style  scoped>
.param {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param table {
  width: 100%;
  /* 合并边框 */
  border-collapse: collapse;
}
.param table tr {
  height: 42px;
}
.param table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.param-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>