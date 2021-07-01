<template>
  <div>
    <div id="cesium-container" class="container"></div>
    <div class="button1" v-if="concel" @click="rotateByPosition(flag3)">停止旋转</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewer: {},
      scene: {},
      camera: {},
      select: "",
      hide: false,
      concel: false,
      flag3: {
        isshow: true,
        selectid: 4,
      },
    };
  },
  mounted: function () {
    let viewer = new Cesium.Viewer("cesium-container", {
      infoBox: false,
      selectionIndicator: false,
      isShowGlobe: true,
    });
    this.viewer = viewer;
    this.scene = this.viewer.scene;
    this.camera = this.scene.camera;
    this.viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏supermap logo
    this.scene.globe.show = true;
    this.camera.flyCircleLoop = true;
    this.scene.viewFlag = true;
    let url =
      "http://117.50.11.239:7090/iserver/services/3D-JZ/rest/realspace/datas/JZ/config"; //楼层超图
    let url1 =
      "http://117.50.11.239:7090/iserver/services/3D-JZ/rest/realspace/datas/DL/config"; //道路超图
    this.scene
      .addS3MTilesLayerByScp(url, {
        name: "bim",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay();
      });
    this.scene
      .addS3MTilesLayerByScp(url1, {
        name: "road",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay1();
      });
    let that = this;
    // 飞行到二级页面
    that.flyTosecond();
    // 点击建筑页面的返回按钮  ====》 接收的值
    that.$event.$on("dl", (e) => {
      this.hide = false;
      if (e == false) {
        that.flyTosecond();
      }
    });
  },
  methods: {
    // 停止按钮显示隐藏
    hidden(data) {
      this.$event.$emit("show", data);
      this.hide = false;
    },
    // 建筑物旋转 传入不同flag 进行旋转
    rotateByPosition: function (flag) {
      let viewer = this.viewer;
      var options = {
        lng: 103.83399846144168,
        lat: 36.08697787038669,
        height: 49.316376498823395,
        heading: 5.283185307179585,
        pitch: -0.4787709280019339,
        roll: 6.283171325419627,
        angle: 360 / 180,
        distance: 7000,
      };
      this.concel = true;
      this.hide = false;

      var position = Cesium.Cartesian3.fromDegrees(
        options.lng,
        options.lat,
        options.height
      );
      var pitch = Cesium.Math.toRadians(-30);
      // 给定飞行一周所需时间，比如10s, 那么每秒转动度数
      var angle = options.angle;
      // 给定相机距离点多少距离飞行，这里取值为5000m
      var distance = options.distance;
      var startTime = Cesium.JulianDate.fromDate(new Date());
      var stopTime = Cesium.JulianDate.addSeconds(
        startTime,
        100000,
        new Cesium.JulianDate()
      );
      if (flag.isshow == true) {
        var stopTime = Cesium.JulianDate.addSeconds(
          startTime,
          1,
          new Cesium.JulianDate()
        );
      }
      console.log(startTime, stopTime);
      viewer.clock.startTime = startTime.clone(); // 开始时间
      viewer.clock.stopTime = stopTime.clone(); // 结速时间
      viewer.clock.currentTime = startTime.clone(); // 当前时间
      viewer.clock.clockRange = Cesium.ClockRange.CLAMPED; // 行为方式
      viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK; // 时钟设置为当前系统时间; 忽略所有其他设置。
      // 相机的当前heading
      var initialHeading = viewer.camera.heading;
      var Exection = function TimeExecution() {
        // 当前已经过去的时间，单位s
        var delTime = Cesium.JulianDate.secondsDifference(
          viewer.clock.currentTime,
          viewer.clock.startTime
        );
        var heading = Cesium.Math.toRadians(delTime * angle) + initialHeading;
        viewer.scene.camera.setView({
          destination: position, // 点的坐
          orientation: {
            heading: heading,
            pitch: pitch,
          },
        });
        viewer.scene.camera.moveBackward(distance);
        if (
          Cesium.JulianDate.compare(
            viewer.clock.currentTime,
            viewer.clock.stopTime
          ) >= 0
        ) {
          viewer.clock.onTick.removeEventListener(Exection);
        }
      };
      viewer.clock.onTick.addEventListener(Exection);
    },
    // 飞行到二级页面
    flyTosecond() {
      var that = this;
      var destination = new Cesium.Cartesian3(
        -1238848.901115697,
        5008548.955271368,
        3756097.1632762575
      );
      var orientation = {
        heading: -1,
        pitch: -0.47877092800193255,
        roll: 6.283171325419627,
      };
      var viewer = that.viewer;
      viewer.camera.flyTo({
        destination: destination,
        orientation: orientation,
        duration: 5, //持续时间
        complete: function callback() {
          var flag = {
            isshow: false,
            selectid: 4,
          };
          that.rotateByPosition(flag);
        },
      });
    },
    // 楼层样式
    addOverlay: function () {
      let scene = this.scene;
      var layer = scene.layers.find("bim");
      // 关闭太阳光
      scene.sun.show = false;
      layer.style3D.lineWidth = 1.5;
      // layer.style3D.lineColor = new Cesium.Color(0.16, 0.48, 0.86, 0.3);
      layer.style3D.lineColor = new Cesium.Color(
        62 / 255,
        71 / 255,
        129 / 255,
        0.3
      );
      layer.style3D.fillStyle = Cesium.FillStyle.Fill_And_WireFrame;
      // layer.wireFrameMode = Cesium.WireFrameType.EffectOutline;
      layer.style3D.fillForeColor = new Cesium.Color(
        18 / 255,
        55 / 255,
        109 / 255,
        0.98
      );
      //设置自发光纹理
      function setHypsometric(layer) {
        var hyp = new Cesium.HypsometricSetting();
        // console.log(2222222222222222);
        hyp.emissionTextureArray = [
          {
            url: "./static/img/wenli16.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: "./static/img/wenli17.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 80,
            VTiling: 80,
          },
          {
            url: "./static/img/wenli16.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: "./static/img/wenli16.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: "./static/img/wenli20.jpg",
            USpeed: 0.5,
            VSpeed: 0,
            UTiling: 50,
            VTiling: 50,
          },
          {
            url: "./static/img/wenli2.jpg",
            USpeed: 0.5,
            VSpeed: 0,
            UTiling: 30,
            VTiling: 30,
          },
          {
            url: "./static/img/wenli2.jpg",
            USpeed: 0.5,
            VSpeed: 0,
            UTiling: 20,
            VTiling: 20,
          },
          {
            url: "./static/img/wenli16.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: "./static/img/wenli17.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 70,
            VTiling: 70,
          },
          {
            url: "./static/img/wenli15.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: "./static/img/wenli15.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 70,
            VTiling: 70,
          },
        ];
        layer.hypsometricSetting = {
          hypsometricSetting: hyp,
        };
      }

      scene.skyAtmosphere.show = false;
      setHypsometric(layer); //夜景
      // 修改地图底色 官网使用底图方式
      let imageLayer = this.viewer.imageryLayers.addImageryProvider(
        new Cesium.SingleTileImageryProvider({
          url: "./static/img/bg.jpg",
        })
      );
      console.log(imageLayer);
    },
    // 道路样式
    addOverlay1: function () {
      let scene = this.scene;
      var layer = scene.layers.find("road");
      layer.style3D.fillForeColor = new Cesium.Color(6, 2, 0, 0.35);
      // 关闭太阳光
      scene.sun.show = false;
    },
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100%;
}
.container >>> .cesium-viewer-navigationContainer {
  display: none;
}
.button,
.button1 {
  position: absolute;
  width: 1rem;
  height: 0.38rem;
  z-index: 1000;
  color: #bcc3d6;
  right: 2%;
  top: 1.25rem;
  line-height: 0.38rem;
  font-size: 0.18rem;
  border-radius: 0.15rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  text-align: center;
  background: #152e67;
  cursor: pointer;
}
</style>