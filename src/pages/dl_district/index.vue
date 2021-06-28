<template>
  <!-- 高新区雁滩园区 -->
  <div>
    <div class="supermap" id="supermap">
      <!-- 超图 -->
      <img src="../../assets/img/bg.jpg" title="超图的位置" />
    </div>
    <logistic-park v-if="isshow == 1"></logistic-park>
    <biological-park v-else-if="isshow == 2"></biological-park>
    <v-district v-else></v-district>
  </div>
</template>

<script>
import vDistrict from "./component/district.vue";
import logisticPark from "./component/building/LogisticPark.vue"; //物流园
import biologicalPark from "./component/building/BiologicalPark.vue"; // 生物园

export default {
  data() {
    return {
      // 显示隐藏区组件与建筑组件 1显示物流园的组件 2表示生物园
      // isshow: 0,
      isshow: 2,
    };
  },
  components: {
    vDistrict,
    logisticPark,
    biologicalPark,
  },
  methods: {
    // 超图的点击事件
    getclick(val) {
      if (val) {
        this.isshow = val;
        console.log(val);
      }
    },
    // 从建筑页面返回区页面
    districtBack() {
      this.isshow = null;
    },
  },
};
</script>

<style scoped>
.supermap {
  width: 100vw;
  height: 100vh;
}
img {
  width: 100vw;
  height: 100vh;
}
</style>