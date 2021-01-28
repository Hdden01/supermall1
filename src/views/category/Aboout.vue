<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <button @click="btn">按钮</button>
        <li>分类1</li>
        <li>分类2</li>
        <li>分类3</li>
        <li>分类4</li>
        <li>分类5</li>
        <li>分类6</li>
        <li>分类7</li>
        <li>分类8</li>
        <li>分类9</li>
        <li>分类10</li>
        <li>分类11</li>
        <li>分类12</li>
        <li>分类13</li>
        <li>分类14</li>
        <li>分类15</li>
        <li>分类16</li>
        <li>分类17</li>
        <li>分类18</li>
        <li>分类19</li>
        <li>分类20</li>
        <li>分类21</li>
        <li>分类22</li>
        <li>分类23</li>
        <li>分类24</li>
        <li>分类25</li>
        <li>分类26</li>
        <li>分类27</li>
        <li>分类28</li>
        <li>分类29</li>
        <li>分类30</li>
        <li>分类31</li>
        <li>分类32</li>
        <li>分类33</li>
        <li>分类34</li>
        <li>分类35</li>
        <li>分类36</li>
        <li>分类37</li>
        <li>分类38</li>
        <li>分类39</li>
        <li>分类40</li>
        <li>分类41</li>
        <li>分类42</li>
        <li>分类43</li>
        <li>分类44</li>
        <li>分类45</li>
        <li>分类46</li>
        <li>分类47</li>
        <li>分类48</li>
        <li>分类49</li>
        <li>分类50</li>
        <li>分类51</li>
        <li>分类52</li>
        <li>分类53</li>
        <li>分类54</li>
        <li>分类55</li>
        <li>分类56</li>
        <li>分类57</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
// 增强型滚动  实现下拉更新
import Pullup from '@better-scroll/pull-up';
 BScroll.use(Pullup)
export default {
  name: "Aboout",
  // 已经挂载完组件了,
  data() {
    data: {
      return {
        bscroll: null
      };
    }
  },
  methods: {
    btn() {
      console.log("xxxx");
    }
  },
  // 此处模板已经渲染成html(挂载上了)
  mounted() {
    // 使用变量接收  函数执行完内存回收
    let bscroll = new BScroll(this.$refs.wrapper, {
      // probe侦测
      // 默认情况下是0，0，1都不侦测实时位置
      // 2在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
      probeType: 2,
    //   下拉为true
      pullUpLoad: true,
      click:true
    });
    // 监听上拉加载事件，当到达底部回调函数。
    bscroll.on("pullingUp", () => {
      console.log("上拉加载");
      //发送网络请求，请求更多页的数据

      //   等待数据请求完成后，并且将新的数据展示出来后
      bscroll.finishPullUp(); //声明这个上拉加载执行完毕
    });
    // 监测事件，此处检测鼠标滚动事件
    // this.bscroll.on("scroll", postion => {
    //   console.log(postion);
    // });
  }
};
</script>

<style scoped>
.wrapper {
  /* 高度必须固定 */
  height: 100px;
  /* overflow: scroll; */
  background: seagreen;
}
</style>