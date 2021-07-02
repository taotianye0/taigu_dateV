<template>
  <div>
    <div id="cesium-container" class="container" @click="child"></div>
    <div class="button" @click="hidden(true)" v-if="hide">
      <ul>
        <li v-if="this.select=='syb'" @click="rotateByPosition(flag)">停止旋转</li>
        <li v-else-if="this.select=='innovate'" @click="rotateByPosition(flag1)">停止旋转</li>
        <li v-else-if="this.select=='hatch'" @click="rotateByPosition(flag2)">停止旋转</li>
      </ul>
    </div>
    <div class="button1" v-else @click="rotateByPosition(flag3)">停止旋转</div>
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
      flag: {
        isshow: true,
        selectid: 1,
      },
      flag1: {
        isshow: true,
        selectid: 2,
      },
      flag2: {
        isshow: true,
        selectid: 3,
      },
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
      selectEnabled: true,
    });
    this.viewer = viewer;
    this.scene = this.viewer.scene;
    this.camera = this.scene.camera;
    this.viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏supermap logo
    this.scene.globe.show = true;
    this.camera.flyCircleLoop = true;
    this.scene.viewFlag = true;
    this.child();
    let url =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/JZ/config"; //楼层超图
    let url1 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/DL/config"; //道路超图
    let url2 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/LCY/config"; //留创园超图
    let url3 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/FHDS/config"; //孵化大厦超图
    let url4 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/CXDS/config"; //创新大厦超图
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
    this.scene
      .addS3MTilesLayerByScp(url2, {
        name: "syb",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay2();
      });
    this.scene
      .addS3MTilesLayerByScp(url4, {
        name: "innovate",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay3();
      });
    this.scene
      .addS3MTilesLayerByScp(url3, {
        name: "hatch",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay4();
      });
    let that = this;
    // 飞行到二级页面
    that.flyTosecond();
    // 点击建筑页面的返回按钮  ====》 接收的值
    that.$event.$on("aa", (e) => {
      that.hide = false;
      if (e == false) {
        that.flyTosecond();
      }
    });
    // 点击事件
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (event) {
      //1.椭球面坐标:获取当前点击视线与椭球面相交处的坐标，在加载地形的场景上获取的坐标有误差
      //var earthPosition = viewer.camera.pickEllipsoid(event.position,viewer.scene.globe.ellipsoid);
      //2.场景坐标:获取场景中任意点击处的对应的世界坐标，需要开启“地形深度检测”（在未开启“地形深度检测”的情况下只能在3DTile上准确获取空间坐标，开启“地形深度检测”后，viewer.scene.pickPosition 也能在非3DTile上准确获取坐标）
      viewer.scene.globe.depthTestAgainstTerrain = true;
      // var earthPosition = viewer.scene.pickPosition(event.position);
      //3.地标坐标：获取点击处地球表面的世界坐标，不包括模型、倾斜摄影表面
      // var ray = viewer.camera.getPickRay(event.position);
      // var earthPosition = viewer.scene.globe.pick(ray, viewer.scene);
      // console.log(event,ray);
      // if (Cesium.defined(earthPosition)) {
      //   console.log(earthPosition);
      // }
      // 获取选中的S3M图层
      let selectlayer = null;
      console.log(selectlayer, "pr");
      selectlayer = viewer.scene.layers.getSelectedLayer();
      // console.log(selectlayer);
      console.log(selectlayer.name, "next");
      if (selectlayer.name !== undefined) {
        that.select = selectlayer.name;
      }
      switch (selectlayer.name) {
        case "innovate":
          // 创新大厦
          viewer.camera.flyTo({
            destination: new Cesium.Cartesian3(
              -1237753.6199691885,
              5006008.215701284,
              3753851.1959734997
            ),
            orientation: {
              heading: 1.3061396370797075,
              pitch: -0.47865140602711786,
              roll: 6.283171324877447,
            },
            duration: 5, //持续时间
            complete: function callback() {
              var flag = {
                isshow: false,
                selectid: 2,
              };
              that.rotateByPosition(flag);
            },
          });
          break;
        case "hatch":
          // 孵化大厦
          viewer.camera.flyTo({
            destination: new Cesium.Cartesian3(
              -1237240.8328621706,
              5006000.742842774,
              3753900.111206762
            ),
            orientation: {
              heading: 0.32180464817195986,
              pitch: -0.4786520862834105,
              roll: 6.283171324322858,
            },
            duration: 5, //持续时间
            complete: function callback() {
              var flag = {
                isshow: false,
                selectid: 3,
              };
              that.rotateByPosition(flag);
            },
          });
          break;
        case "syb":
          // 留创园
          viewer.camera.flyTo({
            destination: new Cesium.Cartesian3(
              -1238750.4726560987,
              5005753.138761906,
              3753830.6485069036
            ),
            orientation: {
              heading: 4.1945742079374515,
              pitch: -0.478811382362184,
              roll: 6.283171325420994,
            },
            duration: 5, //持续时间
            complete: function callback() {
              var flag = {
                isshow: false,
                selectid: 1,
              };
              that.rotateByPosition(flag);
            },
          });
          break;
        default:
          break;
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  },
  methods: {
    // 停止按钮显示隐藏
    hidden(data) {
      this.$event.$emit("show", data);
      this.hide = false;
    },
    // 二级给三级页面传值
    child() {
      switch (this.select) {
        case "syb":
          this.$emit("func", 1);
          break;
        case "innovate":
          this.$emit("func", 2);
          break;
        case "hatch":
          this.$emit("func", 3);
          break;

        default:
          break;
      }
    },
    // 建筑物旋转 传入不同flag 进行旋转
    rotateByPosition: function (flag) {
      console.log(flag);

      let viewer = this.viewer;
      switch (flag.selectid) {
        case 1:
          var options = {
            lng: 103.89658963464912,
            lat: 36.051262177199426,
            height: 54.889351745520514,
            heading: 4.1945742079374515,
            pitch: -0.478811382362184,
            roll: 6.283171325420994,
            angle: 360 / 60,
            distance: 345,
          };
          this.hide = true;
          this.concel = false;
          break;
        case 2:
          var options = {
            lng: 103.89156919082117,
            lat: 36.05349164952365,
            height: 45.840420097123555,
            heading: 0.32180464817195986,
            pitch: -0.47865140602711786,
            roll: 6.283171324877447,
            angle: 360 / 60,
            distance: 350,
          };
          this.hide = true;
          this.concel = false;
          break;
        case 3:
          var options = {
            lng: 103.88325184141213,
            lat: 36.05525210245023,
            height: 53.389768732255995,
            heading: 4.1945742079374515,
            pitch: -0.4786520862834105,
            roll: 6.283171324322858,
            angle: 360 / 60,
            distance: 210,
          };
          this.hide = true;
          this.concel = false;
          break;
        case 4:
          var options = {
            lng: 103.89156919082117,
            lat: 36.05349164952365,
            height: 45.840420097123555,
            heading: 0.32180464817195986,
            pitch: -0.47865140602711786,
            roll: 6.283171324877447,
            angle: 360 / 180,
            distance: 2000,
          };
          this.concel = true;
          this.hide = false;
          break;
        default:
          break;
      }
      var position = Cesium.Cartesian3.fromDegrees(
        options.lng,
        options.lat,
        options.height
      );
      var pitch = Cesium.Math.toRadians(-25);
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
        -1240000.5114361974,
        5007200.07057683,
        3753006.084607418
      );
      var orientation = {
        heading: -0.7,
        pitch: -0.47877092800193255,
        roll: 6.283171325419627,
      };
      var viewer = that.viewer;
      viewer.camera.flyTo({
        destination: destination,
        orientation: orientation,
        duration: 5, //持续时间
        complete: function callback() {
          // 扫描
          viewer.scene.scanEffect.show = true;
          viewer.scene.scanEffect.mode = Cesium.ScanEffectMode.CIRCLE; //利用圆环扫描效果
          // scene.scanEffect.textureUrl = "./static/img/saomiao.png";
          var pos = new Cesium.Cartesian3(
            -1238508.0591207296,
            5005734.255154756,
            3753611.5887083
          );
          viewer.scene.scanEffect.centerPostion = pos;
          // 扫描范围
          viewer.scene.scanEffect._speed = 100;
          // viewer.scene.scanEffect._lineWidth = 500;
          // 扫描时间
          viewer.scene.scanEffect._period = 2000;
          // 扫描颜色
          viewer.scene.scanEffect.color = new Cesium.Color(
            2 / 255,
            252 / 255,
            21 / 255,
            1
          );

          let pos2 = new Cesium.Cartesian3(
            -1238006.0865971656,
            5005710.466257274,
            3753798.090426597
          );
          let pos3 = new Cesium.Cartesian3(
            -1237250.8879051239,
            5005783.087518156,
            3753961.419175015
          );

          viewer.scene.scanEffect.add(pos2);
          viewer.scene.scanEffect.add(pos3);
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
    // 留创园样式
    addOverlay2: function () {
      let scene = this.scene;
      var layer = scene.layers.find("syb");
      // 关闭太阳光
      scene.sun.show = false;
      layer.style3D.lineWidth = 1.5;
      layer.style3D.lineColor = new Cesium.Color(
        196 / 255,
        196 / 255,
        196 / 255,
        0.3
      );
      layer.style3D.fillStyle = Cesium.FillStyle.Fill_And_WireFrame;
      layer.style3D.fillForeColor = new Cesium.Color.CYAN();
      layer.wireFrameMode = Cesium.WireFrameType.EffectOutline;
    },
    // 创新大厦样式
    addOverlay3: function () {
      let scene = this.scene;
      var layer = scene.layers.find("innovate");
      // 关闭太阳光
      scene.sun.show = false;
      layer.style3D.lineWidth = 1.5;
      layer.style3D.lineColor = new Cesium.Color(0.16, 0.48, 0.86, 0.3);
      layer.style3D.fillStyle = Cesium.FillStyle.Fill_And_WireFrame;
      layer.style3D.fillForeColor = new Cesium.Color.CYAN();
      layer.wireFrameMode = Cesium.WireFrameType.EffectOutline;
    },
    // 孵化大厦样式
    addOverlay4: function () {
      let scene = this.scene;
      var layer = scene.layers.find("hatch");
      // 关闭太阳光
      scene.sun.show = false;
      layer.style3D.lineWidth = 1.5;
      layer.style3D.lineColor = new Cesium.Color(
        121 / 255,
        196 / 255,
        255 / 255,
        0.3
      );
      layer.style3D.fillStyle = Cesium.FillStyle.Fill_And_WireFrame;
      layer.style3D.fillForeColor = new Cesium.Color.CYAN();
      layer.wireFrameMode = Cesium.WireFrameType.EffectOutline;
      scene.skyAtmosphere.show = false;
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
  z-index: 10;
  color: #fff;
  top: 0;
  bottom: 0;
  right: 0.25rem;
  margin: 0 auto;
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