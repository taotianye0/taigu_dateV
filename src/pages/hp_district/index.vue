<template>
  <!-- 高新区雁滩园区 -->
  <div>
    <div class="supermap" id="supermap">
      <!-- 超图 -->
      <!-- <img src="../../assets/img/bg.jpg" title="超图的位置" /> -->
      <hp-cesiumCom @func="getclick"></hp-cesiumCom>
    </div>

    <v-district></v-district>
  </div>
</template>

<script>
import vDistrict from "./component/district.vue";
import hpCesiumCom from "../superMap/hp.vue";

export default {
  data() {
    return {
      // 显示隐藏区组件与建筑组件 1显示留学生创业园的组件 2表示创新大厦  3表示孵化大厦
      isshow: 0,
      // isshow: 1,
    };
  },
  components: {
    vDistrict,
    hpCesiumCom,
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
    background: url("../../assets/img/bg.jpg") no-repeat;
    background-size: 100% 100%;
}
img {
  width: 100vw;
  height: 100vh;
}
</style>