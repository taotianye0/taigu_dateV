<template>
  <!-- <div> -->
  <!-- <router-link to="/home/yt" tag="div" class="yt">雁滩</router-link>
     <router-link to="/home/hp" tag="div" class="hp">和平</router-link>
     <router-link to="/home/qlh" tag="div" class="qlh">七里河</router-link>
     <router-link to="/home/dl" tag="div" class="dl">定连</router-link>
     <router-link to="/home/jz" tag="div" class="jz">九州</router-link> -->
  <!-- </div> -->

  <!-- 高新区雁滩园区 -->
  <div>
    <div class="indexbg">
      <img src="../../assets/img/index.png" />
      <!-- <img src="../../assets/img/indexBG.jpg" /> -->
      <div class="dl">
        <div class="name">
          <p>定连园区</p>
        </div>
        <div class="wrap"  @click="toDLpage()">
          <img src="../../assets/img/定连.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span>
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
      <div class="hp">
        <div class="name">
          <p>和平园区</p>
        </div>
        <div class="wrap"  @click="toHPpage()">
          <img src="../../assets/img/和平.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span>
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
      <div class="jz">
        <div class="name">
          <p>九州园区</p>
        </div>
        <div class="wrap"  @click="toJZpage()">
          <img src="../../assets/img/九州.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span>
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
      <div class="yt">
        <div class="name">
          <p>雁滩园区</p>
        </div>
        <div class="wrap"  @click="toYTpage()">
          <img src="../../assets/img/雁滩.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span>
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
      <div class="qlh">
        <div class="name">
          <p>七里河园区</p>
        </div>
        <div class="wrap"  @click="toQLHpage()">
          <img src="../../assets/img/七里河.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span>
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 数据的组件 -->
    <v-district></v-district>
  </div>
</template>

<script>
import vDistrict from "./component/district.vue";
export default {
  components: {
    vDistrict,
  },
  methods: {
    toDLpage() {
      this.$router.push("/home/dl");
    },
    toHPpage() {
      this.$router.push("/home/hp");
    },
    toYTpage() {
      this.$router.push("/home/yt");
    },
    toQLHpage() {
      this.$router.push("/home/qlh");
    },
    toJZpage() {
      this.$router.push("/home/jz");
    },
    changeLight(){

    }
  },
};
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>