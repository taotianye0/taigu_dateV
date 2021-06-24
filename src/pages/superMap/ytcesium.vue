<template>
  <div id="cesium-container" class="container" @click="child"></div>
</template>
<script>
export default {
  data() {
    return {
      viewer: {},
      scene: {},
      camera: {},
      value: 0,
      select: "",
      isshow: true,
      val: 0,
    };
  },
  created() {
    this.$watch("val", function (newValue, oldValue) {
      console.log(newValue, oldValue);
      this.gettime();
    });
  },
  mounted: function () {
    // var cesiumAsset =
    //   "https://blog.csdn.net/weixin_42448623/article/details/100284740";
    // var tiandituTk = "8c9a7d54ac20558e50738df50fcd1920";
    // // 服务负载子域
    // var subdomains = ["0", "1", "2", "3", "4", "5", "6", "7"];
    // Cesium.Ion.defaultAccessToken = cesiumAsset;
    let viewer = new Cesium.Viewer("cesium-container", {
      infoBox: false,
      selectionIndicator: false,
      isShowGlobe: true,
      // animation: false, //动画
      // homeButton: true, //home键
      // geocoder: true, //地址编码
      // baseLayerPicker: false, //图层选择控件
      // timeline: false, //时间轴
      // fullscreenButton: true, //全屏显示
      // infoBox: true, //点击要素之后浮窗
      // sceneModePicker: true, //投影方式  三维/二维
      // navigationInstructionsInitiallyVisible: false, //导航指令
      // navigationHelpButton: false, //帮助信息
      // selectionIndicator: false, // 选择
      // imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      //   //影像底图
      //   url:
      //     "http://t{s}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" +
      //     tiandituTk,
      //   subdomains: subdomains,
      //   layer: "tdtImgLayer",
      //   style: "default",
      //   format: "image/jpeg",
      //   tileMatrixSetID: "GoogleMapsCompatible", //使用谷歌的瓦片切片方式
      //   show: true,
      // }),
    });
    // viewer._cesiumWidget._creditContainer.style.display = "none"; // 隐藏cesium ion
    // viewer.imageryLayers.addImageryProvider(
    //   new Cesium.WebMapTileServiceImageryProvider({
    //     //影像注记
    //     url:
    //       "http://t{s}.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=" +
    //       tiandituTk,
    //     subdomains: subdomains,
    //     layer: "tdtCiaLayer",
    //     style: "default",
    //     format: "image/jpeg",
    //     tileMatrixSetID: "GoogleMapsCompatible",
    //     show: true,
    //   })
    // );

    // viewer.imageryLayers.addImageryProvider(
    //   new Cesium.BingMapsImageryProvider({
    //     url: "https://dev.virtualearth.net",
    //     mapStyle: Cesium.BingMapsStyle.AERIAL,
    //   })
    // );
    this.viewer = viewer;
    this.scene = this.viewer.scene;
    this.camera = this.scene.camera;
    this.viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏supermap logo
    this.scene.globe.show = true;
    this.camera.flyCircleLoop = true;
    this.scene.viewFlag = true;
    this.child();
    let url =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/JZ/config";
    this.scene
      .addS3MTilesLayerByScp(url, {
        name: "bim",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay();
        var layer = viewer.scene.layers.find("bim");
        // 关闭太阳光
        viewer.scene.sun.show = false;
        layer.style3D.lineWidth = 1.5;
        layer.style3D.lineColor = new Cesium.Color(0.16, 0.48, 0.86, 1);
      });
    let url1 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/DL/config";
    this.scene
      .addS3MTilesLayerByScp(url1, {
        name: "road",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay1();
      });
    let url2 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/LCY/config";
    this.scene
      .addS3MTilesLayerByScp(url2, {
        name: "syb",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay2();
      });
    let url3 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/FHDS/config";
    this.scene
      .addS3MTilesLayerByScp(url3, {
        name: "hatch",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay3();
      });
    let url4 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/CXDS/config";
    this.scene
      .addS3MTilesLayerByScp(url4, {
        name: "innovate",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay2();
      });
    // 将三维球定位

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(103.901125, 36.05943, 10000),
      orientation: {
        heading: Cesium.Math.toRadians(348.4202942851978),
        pitch: Cesium.Math.toRadians(-89.74026687972041),
        roll: Cesium.Math.toRadians(0),
      },
      complete: function callback() {
        // 定位完成之后的回调函数
        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3(
            -1240000.5114361974,
            5007200.07057683,
            3753006.084607418
          ),
          orientation: {
            heading: -0.7,
            pitch: -0.47877092800193255,
            roll: 6.283171325419627,
          },
          duration: 5, //持续时间
          complete: function callback() {
            // 创新大厦扫描
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
            // this.val = 2;
          },
        });
      },
    });
    // 点击建筑页面的返回按钮  ====》 接收的值
    this.$event.$on("aa", (e) => {
      this.val = 0;
      console.log(this.val, "值在这");
      if (e == false) {
        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3(
            -1240000.5114361974,
            5007200.07057683,
            3753006.084607418
          ),
          orientation: {
            heading: -0.7,
            pitch: -0.47877092800193255,
            roll: 6.283171325419627,
          },
          duration: 6, //持续时间
          complete: function callback() {
            // this.gettime();
            // location.reload();
            that.val = 0;
          },
        });
      }
    });
    let that = this;
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (event) {
      //1.椭球面坐标:获取当前点击视线与椭球面相交处的坐标，在加载地形的场景上获取的坐标有误差
      //var earthPosition = viewer.camera.pickEllipsoid(event.position,viewer.scene.globe.ellipsoid);
      //2.场景坐标:获取场景中任意点击处的对应的世界坐标，需要开启“地形深度检测”（在未开启“地形深度检测”的情况下只能在3DTile上准确获取空间坐标，开启“地形深度检测”后，viewer.scene.pickPosition 也能在非3DTile上准确获取坐标）
      viewer.scene.globe.depthTestAgainstTerrain = true;
      var earthPosition = viewer.scene.pickPosition(event.position);
      //3.地标坐标：获取点击处地球表面的世界坐标，不包括模型、倾斜摄影表面
      // var ray = viewer.camera.getPickRay(event.position);
      // var earthPosition = viewer.scene.globe.pick(ray, viewer.scene);
      console.log(event);
      if (Cesium.defined(earthPosition)) {
        console.log(earthPosition);
      }
      // 获取选中的S3M图层
      let selectlayer = viewer.scene.layers.getSelectedLayer();
      // console.log(selectlayer.name);
      if (selectlayer.name !== undefined) {
        that.select = selectlayer.name;
      }
      if (selectlayer.name == "syb") {
        // 留创园
        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3(
            -1238700.4726560987,
            5005743.138761906,
            3753780.6485069036
          ),
          orientation: {
            heading: 4.1945742079374515,
            pitch: -0.478811382362184,
            roll: 6.283171325420994,
          },
          duration: 5, //持续时间
          complete: function callback() {
            // that.gettime();
            that.val = 1;
          },
        });
      } else if (selectlayer.name == "innovate") {
        // 创新大厦

        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3(
            -1237873.6199691885,
            5005898.215701284,
            3753811.1959734997
          ),
          orientation: {
            heading: 1.1661396370797075,
            pitch: -0.47865140602711786,
            roll: 6.283171324877447,
          },
          duration: 5, //持续时间
          complete: function callback() {
            that.val = 2;
          },
        });
      } else if (selectlayer.name == "hatch") {
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
            that.val = 3;
          },
        });
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  },
  methods: {
    child() {
      if (this.select == "syb") {
        this.$emit("func", 1);
      } else if (this.select == "innovate") {
        this.$emit("func", 2);
      } else if (this.select == "hatch") {
        this.$emit("func", 3);
      }
    },
    gettime() {
      var viewer = this.viewer;
      if (this.val == 2 || this.val == 0) {
        var options = {
          lng: 103.89155934168078,
          lat: 36.05350322030359,
          height: 1.578004941040925,
          heading: 0.0,
          pitch: 0.0,
          roll: 0.0,
        };
      } else if (this.val == 1) {
        var options = {
          lng: 103.89658963464912,
          lat: 36.051262177199426,
          height: 54.889351745520514,
          heading: 0.0,
          pitch: 0.0,
          roll: 0.0,
        };
      }
      setTimeout(() => {
        var position = Cesium.Cartesian3.fromDegrees(
          options.lng,
          options.lat,
          options.height
        );
        // 相机看点的角度，如果大于0那么则是从地底往上看，所以要为负值，这里取-30度
        var pitch = Cesium.Math.toRadians(-30);
        // 给定飞行一周所需时间，比如10s, 那么每秒转动度数
        var angle = 360 / 30;
        // 给定相机距离点多少距离飞行，这里取值为5000m
        var distance = 350;
        var startTime = Cesium.JulianDate.fromDate(new Date());
        var stopTime = Cesium.JulianDate.addSeconds(
          startTime,
          0,
          new Cesium.JulianDate()
        );
        console.log(startTime, stopTime, "start");
        viewer.clock.startTime = startTime.clone(); // 开始时间
        if (this.val == 0) {
          console.log("stop");
          viewer.clock.stopTime = stopTime.clone(); // 结速时间
        }

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
            destination: position, // 点的坐标
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
      }, 1000);
      //   setTimeout(() => {
      //   var startTime = Cesium.JulianDate.fromDate(new Date());
      //   console.log(startTime);
      //   var stopTime = Cesium.JulianDate.addSeconds(
      //     startTime,
      //     10,
      //     new Cesium.JulianDate()
      //   );
      //   viewer.clock.startTime = startTime.clone(); // 开始时间
      //   viewer.clock.stopTime = stopTime.clone(); // 结速时间
      //   viewer.clock.currentTime = startTime.clone(); // 当前时间
      //   viewer.clock.clockRange = Cesium.ClockRange.CLAMPED; // 行为方式
      //   viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK; // 时钟设置为当前系统时间; 忽略所有其他设置。 // 相机的当前heading
      //   var initialHeading = viewer.camera.heading;
      //   var Exection = function TimeExecution() {
      //     // 当前已经过去的时间，单位s
      //     var delTime = Cesium.JulianDate.secondsDifference(
      //       viewer.clock.currentTime,
      //       viewer.clock.startTime
      //     );
      //     var heading = Cesium.Math.toRadians(delTime * angle) + initialHeading;
      //     viewer.scene.camera.setView({
      //       destination: Cesium.Cartesian3.fromDegrees(
      //         103.89658963464912,
      //         36.051262177199426,
      //         54.889351745520514
      //       ), // 点的坐
      //       orientation: {
      //         heading: heading,
      //         pitch: pitch,
      //       },
      //     });
      //     viewer.scene.camera.moveBackward(distance);
      //     if (
      //       Cesium.JulianDate.compare(
      //         viewer.clock.currentTime,
      //         viewer.clock.stopTime
      //       ) >= 0
      //     ) {
      //       viewer.clock.onTick.removeEventListener(Exection);
      //     }
      //   };
      //   viewer.clock.onTick.addEventListener(Exection);
      // }, 5000);
    },
    // 楼层样式
    addOverlay: function () {
      let scene = this.scene;
      var layer = scene.layers.find("bim");
      // 关闭太阳光
      scene.sun.show = false;
      layer.style3D.lineWidth = 1.5;
      layer.style3D.lineColor = new Cesium.Color(0.16, 0.48, 0.86, 1);
      layer.style3D.fillStyle = Cesium.FillStyle.Fill_And_WireFrame;
      layer.style3D.fillForeColor = new Cesium.Color(
        18 / 255,
        55 / 255,
        109 / 255,
        0.98
      );
      layer.wireFrameMode = Cesium.WireFrameType.EffectOutline;
      // layer.setObjsColor(
      //   [2996],
      //   // new Cesium.Color(9 / 255, 277 / 255, 248 / 255, 0.9)
      //   new Cesium.Color(0, 1, 1, 1)
      // );
      //设置环境光(夜晚)
      // scene.lightSource.ambientLightColor = new Cesium.Color(110/255, 110/255, 110/255, 0.5);
      // scene.lightSource.ambientLightColor = new Cesium.Color(
      //   18 / 255,
      //   55 / 255,
      //   109 / 255,
      //   1
      // );
      //设置场景颜色校正
      var hyp = new Cesium.HypsometricSetting();
      //设置自发光纹理
      function setHypsometric(layer) {
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
    // 道路颜色
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
      layer.style3D.lineColor = new Cesium.Color(0.16, 0.48, 0.86, 1);
      layer.style3D.fillStyle = Cesium.FillStyle.Fill_And_WireFrame;
      layer.style3D.fillForeColor = new Cesium.Color.CYAN();
      layer.wireFrameMode = Cesium.WireFrameType.EffectOutline;
      //设置场景颜色校正
      var hyp = new Cesium.HypsometricSetting();
      //设置自发光纹理
      function setHypsometric(layer) {
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
    },
    // 孵化大厦
    addOverlay3: function () {
      let scene = this.scene;
      var layer = scene.layers.find("hatch");
      // 关闭太阳光
      scene.sun.show = false;
      layer.style3D.lineWidth = 1.5;
      layer.style3D.fillStyle = Cesium.FillStyle.Fill_And_WireFrame;
      layer.style3D.fillForeColor = new CCesium.Color.SPRINGGREEN();
      layer.wireFrameMode = Cesium.WireFrameType.EffectOutline;
      //设置场景颜色校正
      var hyp = new Cesium.HypsometricSetting();
      //设置自发光纹理
      function setHypsometric(layer) {
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
    },
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100%;
}
</style>