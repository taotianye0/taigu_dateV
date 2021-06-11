<template>
  <!-- 高新区雁滩园区 -->
  <div>
      <div class="supermap" id="supermap">
      <!-- 超图 -->
      <!-- <img src="../../assets/img/bg.jpg" title ="超图的位置"> -->
      <yt-CesiumCom></yt-CesiumCom>
    </div>
    <!-- 区的页面组件 -->
    <v-district></v-district>
  </div>
</template>

<script>
import vDistrict from "./component/district.vue";
import ytCesiumCom from "../superMap/ytcesium.vue";
export default {
  components: {
    vDistrict,
    ytCesiumCom
  },
};
</script>

<style scoped>
.supermap {
  width: 100vw;
  height: 100vh;
}
img{
width: 100vw;
height: 100vh;
}
</style>