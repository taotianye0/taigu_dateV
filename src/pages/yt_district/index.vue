<template>
  <!-- 高新区雁滩园区 -->
  <div>
    <div class="supermap" id="supermap">
      <!-- 超图 -->
      <yt-CesiumCom @func="getclick"></yt-CesiumCom>
    </div>

    <!--留学生创业园 建筑 的组件 -->
    <leave-garden v-if="isshow == 1" @back="districtBack()"></leave-garden>
    <!--创新大厦 建筑 的组件 -->
    <Innovative-building
      v-else-if="isshow == 2"
      @back="districtBack()"
    ></Innovative-building>
    <!--孵化大厦 建筑 的组件 -->
    <Incubation-building
      v-else-if="isshow == 3"
      @back="districtBack()"
    ></Incubation-building>
    <!-- 区的页面组件 -->
    <v-district v-else></v-district>
  </div>
</template>

<script>
import vDistrict from "./component/district.vue";
import ytCesiumCom from "../superMap/ytcesium.vue";
import leaveGarden from "./component/building/leaveGarden.vue";
import IncubationBuilding from "./component/building/IncubationBuilding.vue";
import InnovativeBuilding from "./component/building/InnovativeBuilding.vue";

export default {
  data() {
    return {
      // 显示隐藏区组件与建筑组件 1显示留学生创业园的组件 2表示创新大厦  3表示孵化大厦
      isshow: 0,
      // isshow: 3,
    };
  },
  components: {
    vDistrict,
    ytCesiumCom,
    leaveGarden, //留创园
    IncubationBuilding, //孵化大厦
    InnovativeBuilding, //创新大厦
  },
  methods: {
    // 超图的点击事件
    getclick(val) {
      if (val) {
        this.isshow = val;
        // console.log(val);
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