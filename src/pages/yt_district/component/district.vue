<template>
  <div>
    <div class="supermap">
      <!-- 超图 -->
    </div>
    <div class="datav">
      <!-- 左边 -->
      <div class="left"></div>
      <!-- 右上角 标题 -->
      <div class="title">
        <div class="title_cn">{{ pageTitle_cn}}</div>
        <div class="title_en">{{ pageTitle_en }}</div>
      </div>
      <!-- 右下角 -->
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle_cn:"", //页面标题
      pageTitle_en:"", //页面标题
    };
  },
  mounted() {
    // 园区名字
    this.pageTitle_cn = this.$route.name.split(",")[0];
    this.pageTitle_en = this.$route.name.split(",")[1];
  },
};
</script>

<style scoped>
@import "../../../assets/css/yt.css";
</style>