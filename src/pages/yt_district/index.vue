<template>
  <!-- 高新区雁滩园区 -->
  <div>
    <div class="supermap" id="supermap">
      <!-- 超图 -->
      <!-- <img src="../../assets/img/bg.jpg" title ="超图的位置"> -->
      <yt-CesiumCom @func="getclick"></yt-CesiumCom>
    </div>
    <!-- 区的页面组件 -->
    <leave-garden v-if="isshow"></leave-garden>
    <!-- 建筑 的组件 -->
    <v-district v-else></v-district>
  </div>
</template>

<script>
import vDistrict from "./component/district.vue";
import ytCesiumCom from "../superMap/ytcesium.vue";
import leaveGarden from "./component/building/leaveGarden.vue";
export default {
  data() {
    return {
      // 显示隐藏区组件与建筑组件 true显示区的组件
      isshow: true,
      // isshow: false,
    };
  },
  components: {
    vDistrict,
    ytCesiumCom,
    leaveGarden,
  },
  methods: {
    // 超图的点击事件
    getclick(val) {
      if (val) {
        this.isshow = true;
      }
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