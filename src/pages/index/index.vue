<template>
  <!-- 高新区雁滩园区 -->
  <div class="big_bg">
    <div class="indexbg">
      <!-- <img src="../../../static/img/indexbg.png" /> -->
      <!-- <img src="../../assets/img/indexBG.jpg" /> -->
      <div class="indexbgimg">
        <div class="b b1"></div>
        <div class="b b2"></div>
        <div class="b b3"></div>
        <div class="b b4"></div>
        <div class="b b5"></div>
        <div class="b b6"></div>
      </div>
      <div class="dl">
        <div class="name">
          <p>定连园区</p>
        </div>
        <div class="wrap" @click="toDLpage()">
          <img src="../../assets/img/定连.png" />
          <div class="box">
            <!-- <span style="--i: 1"></span> -->
            <span style="--i: 2"></span>
            <!-- <span style="--i: 3"></span> -->
            <!-- <span style="--i: 4"></span> -->
            <!-- <span style="--i: 5"></span> -->
            <!-- <span style="--i: 6"></span> -->
            <!-- <span style="--i: 7"></span> -->
            <!-- <span style="--i: 8"></span> -->
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
      <div class="hp">
        <div class="name">
          <p>和平园区</p>
        </div>
        <div class="wrap" @click="toHPpage()">
          <img src="../../assets/img/和平.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <!-- <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span> -->
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
      <div class="jz">
        <div class="name">
          <p>九州园区</p>
        </div>
        <div class="wrap" @click="toJZpage()">
          <img src="../../assets/img/九州.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <!-- <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span> -->
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
      <div class="yt">
        <div class="name">
          <p>雁滩园区</p>
        </div>
        <div class="wrap" @click="toYTpage()">
          <img src="../../assets/img/雁滩.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <!-- <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span> -->
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
      <div class="qlh">
        <div class="name">
          <p>七里河园区</p>
        </div>
        <div class="wrap" @click="toQLHpage()">
          <img src="../../assets/img/七里河.png" />
          <div class="box">
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <!-- <span style="--i: 3"></span>
            <span style="--i: 4"></span>
            <span style="--i: 5"></span>
            <span style="--i: 6"></span>
            <span style="--i: 7"></span>
            <span style="--i: 8"></span> -->
            <span style="--i: 9"></span>
            <span style="--i: 10"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 两边数据的组件 -->
    <v-district></v-district>
  </div>
</template>

<script>
import vDistrict from "./component/district.vue";
export default {
  data() {
    return {
      time: null, // 定时器名称
    };
  },
  components: {
    vDistrict,
  },
  mounted() {
    this.changeLight();
  },
  beforeDestroy() {
    clearInterval(this.time);
    this.time = null;
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
    changeLight() {
      let dl = document.querySelectorAll(".dl .wrap span");
      let dlname = document.querySelector(".dl .name");
      let hp = document.querySelectorAll(".hp .wrap span");
      let hpname = document.querySelector(".hp .name");
      let yt = document.querySelectorAll(".yt .wrap span");
      let ytname = document.querySelector(".yt .name");
      let qlh = document.querySelectorAll(".qlh .wrap span");
      let qlhname = document.querySelector(".qlh .name");
      let jz = document.querySelectorAll(".jz .wrap span");
      let jzname = document.querySelector(".jz .name");
      let num = 0;

      this.time = setInterval(() => {
        num++;
        console.log(num);

        // 样式制空
        if (num > 5) {
          num = 1;
        }
        dl.forEach((item) => {
          item.className = "wrap_hover";
        });
        if (num == 1) {
          this.paiTa(dl, dlname);
        }
        if (num == 2) {
          this.paiTa(hp, hpname);
        }
        if (num == 3) {
          this.paiTa(yt, ytname);
        }
        if (num == 4) {
          this.paiTa(qlh, qlhname);
        }
        if (num == 5) {
          this.paiTa(jz, jzname);
        }
      }, 2500);
    },
    // 排他
    paiTa(light, scale) {
      let all = document.querySelectorAll(".box span");
      let allname = document.querySelectorAll(".big_bg .name");
      all.forEach((item) => {
        item.className = " ";
      });
      allname.forEach((item) => {
        item.className = "name";
      });
      light.forEach((item) => {
        item.className = "wrap_hover";
      });
      scale.className = "name name_scale";
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>