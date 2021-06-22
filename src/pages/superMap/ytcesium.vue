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
      isshows: this.isshow,
    };
  },
  mounted: function () {
    var cesiumAsset =
      "https://blog.csdn.net/weixin_42448623/article/details/100284740";
    var tiandituTk = "8c9a7d54ac20558e50738df50fcd1920";
    // // 服务负载子域
    var subdomains = ["0", "1", "2", "3", "4", "5", "6", "7"];
    Cesium.Ion.defaultAccessToken = cesiumAsset;
    let viewer = new Cesium.Viewer("cesium-container", {
      animation: false, //动画
      homeButton: true, //home键
      geocoder: true, //地址编码
      baseLayerPicker: false, //图层选择控件
      timeline: false, //时间轴
      fullscreenButton: true, //全屏显示
      infoBox: true, //点击要素之后浮窗
      sceneModePicker: true, //投影方式  三维/二维
      navigationInstructionsInitiallyVisible: false, //导航指令
      navigationHelpButton: false, //帮助信息
      selectionIndicator: false, // 选择
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

    viewer.imageryLayers.addImageryProvider(
      new Cesium.BingMapsImageryProvider({
        url: "https://dev.virtualearth.net",
        mapStyle: Cesium.BingMapsStyle.AERIAL,
      })
    );
    this.viewer = viewer;
    this.scene = this.viewer.scene;
    this.camera = this.scene.camera;
    this.viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏supermap logo
    this.scene.globe.show = true;
    this.camera.flyCircleLoop = true;
    this.scene.viewFlag = true;

    // 超图
    let url =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/JZ/config";
    this.scene
      .addS3MTilesLayerByScp(url, {
        name: "bim",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay();
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
      .then(() => {});
    let url3 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/FHDS/config";
    this.scene.addS3MTilesLayerByScp(url3, {
      name: "hatch",
      packingRequest: 4,
    });
    let url4 =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/CXDS/config";
    this.scene.addS3MTilesLayerByScp(url4, {
      name: "innovate",
      packingRequest: 4,
    });
    // 将三维球定位到中国
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
            -1238487.5114361974,
            5007000.07057683,
            3753346.084607418
          ),
          orientation: {
            heading: -0.1,
            pitch: -0.47877092800193255,
            roll: 6.283171325419627,
          },
          duration: 5, //持续时间
          complete: function callback() {
            // 创新大厦扫描
            // setTimeout(function () {
            //   viewer.scene.scanEffect.show = true;
            //   viewer.scene.scanEffect.mode = Cesium.ScanEffectMode.CIRCLE; //利用圆环扫描效果
            //   var position = new Cesium.Cartesian3([
            //     "3186770.6820279765, 939130.1448450445, 5444690.273847996",
            //     "3187000.043022081, 938350.5645055493, 5444700.717966651",
            //     "3187100.586357547, 937716.5514422462, 5444745.639940157",
            //   ]);
            //   var centerPosition = viewer.scene.pickPosition(position);
            //   viewer.scene.scanEffect.add(centerPosition); // 设置扫描中心点
            //   // viewer.scene.scanEffect.centerPostion = pos;
            //   // 扫描范围
            //   viewer.scene.scanEffect._speed = 100;
            //   // viewer.scene.scanEffect._lineWidth = 500;
            //   // 扫描时间
            //   viewer.scene.scanEffect._period = 2000;
            //   // 扫描颜色
            //   viewer.scene.scanEffect.color = new Cesium.Color(
            //     248 / 255,
            //     9 / 255,
            //     9 / 255,
            //     1
            //   );
            // }, 1000);
          },
        });
      },
    });
    this.addSpotLight();
    // 点击建筑页面的返回按钮  ====》 接收的值
    this.$event.$on("aa", (e) => {
      // console.log(e, "值在这");
      if (e == false) {
        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3(
            -1238487.5114361974,
            5007000.07057683,
            3753346.084607418
          ),
          orientation: {
            heading: -0.1,
            pitch: -0.47877092800193255,
            roll: 6.283171325419627,
          },
          duration: 5, //持续时间
        });
      }
    });
    // var time = setTimeout(function () {
    //   var pos = new Cesium.Cartesian3(
    //     3186893.8134447704,
    //     939000.0194418641,
    //     5444572.424701958
    //   );
    //   let heading = -0.1;
    //   const pitch = -0.47877092800193255;
    //   const roll = 2000;
    //   let x = -0.1;
    //   viewer.scene.preUpdate.addEventListener(function () {
    //     x += 0.15;
    //     heading = Cesium.Math.toRadians(x);
    //     viewer.camera.lookAt(
    //       pos,
    //       new Cesium.HeadingPitchRange(heading, pitch, roll)
    //     );
    //   });
    // }, 10000);
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
      console.log(selectlayer.name);
      that.select = selectlayer.name;
      if (selectlayer.name == "syb") {
        // 留创园
        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3(
            -1238690.4726560987,
            5005733.138761906,
            3753770.6485069036
          ),
          orientation: {
            heading: 4.1945742079374515,
            pitch: -0.478811382362184,
            roll: 6.283171325420994,
          },
          duration: 5, //持续时间
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
    addSpotLight: function () {
      let scene = this.scene;
      let Cesium = window.Cesium;
      var spotLight, spotLight1, spotLight2;
      // 标识点光源
      var positions = new Cesium.Cartesian3(
        3187326.501174774,
        938506.0412503146,
        5444900.653218728
      );
      var targetPosition = new Cesium.Cartesian3(
        3187018.9721922115,
        938853.4495226444,
        5444484.463146444
      );
      var options = {
        color: new Cesium.Color(255 / 255, 255 / 255, 255 / 255, 0.1),
        distance: 3000,
        decay: 1,
        intensity: 0.8,
      };
      spotLight = new Cesium.SpotLight(positions, targetPosition, options);
      scene.addLightSource(spotLight);
      // 标识点光源
      var positions = new Cesium.Cartesian3(
        3187000.043022081,
        938350.5645055493,
        5444700.717966651
      );
      var targetPosition = new Cesium.Cartesian3(
        3187018.9721922115,
        938853.4495226444,
        5444484.463146444
      );
      var options = {
        color: new Cesium.Color(255 / 255, 255 / 255, 255 / 255, 0.1),
        distance: 3000,
        decay: 1,
        intensity: 0.8,
      };
      spotLight1 = new Cesium.SpotLight(positions, targetPosition, options);
      scene.addLightSource(spotLight1);
      // 标识点光源
      var positions = new Cesium.Cartesian3(
        3187100.586357547,
        937716.5514422462,
        5444745.639940157
      );
      var targetPosition = new Cesium.Cartesian3(
        3187018.9721922115,
        938853.4495226444,
        5444484.463146444
      );
      var options = {
        color: new Cesium.Color(255 / 255, 255 / 255, 255 / 255, 0.1),
        distance: 3000,
        decay: 1,
        intensity: 0.8,
      };
      spotLight2 = new Cesium.SpotLight(positions, targetPosition, options);
      scene.addLightSource(spotLight2);
    },

    addOverlay: function () {
      let scene = this.scene;
      var layer = scene.layers.find("bim");
      // 关闭太阳光
      scene.sun.show = false;
      layer.style3D.lineWidth = 1.5;
      layer.style3D.lineColor = new Cesium.Color(0.16, 0.48, 0.86, 1);
      layer.style3D.fillStyle = Cesium.FillStyle.Fill_And_WireFrame;
      layer.style3D.fillForeColor = new Cesium.Color(1, 1.0, 1.0, 0.98);
      layer.wireFrameMode = Cesium.WireFrameType.EffectOutline;
      layer.setObjsColor(
        [2996],
        // new Cesium.Color(9 / 255, 277 / 255, 248 / 255, 0.9)
        new Cesium.Color(0, 1, 1, 1)
      );
      //设置环境光(夜晚)
      // scene.lightSource.ambientLightColor = new Cesium.Color(110/255, 110/255, 110/255, 0.5);
      scene.lightSource.ambientLightColor = new Cesium.Color(
        21 / 255,
        80 / 255,
        165 / 255,
        0.1
      );
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
          url: "./static/img/background.jpg",
        })
      );
      console.log(imageLayer);
    },
    addOverlay1: function () {
      let scene = this.scene;
      var layer = scene.layers.find("road");
      layer.style3D.fillForeColor = new Cesium.Color(8, 5, 0, 0.8);
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