<template>
  <div id="cesium-container" class="container" @click="child"></div>
</template>
<script>
// const Cesium = window.Cesium;
export default {
  data() {
    return {
      viewer: {},
      scene: {},
      camera: {},
      value: true,
      select: 0,
    };
  },
  mounted: function () {
    var cesiumAsset =
      "https://blog.csdn.net/weixin_42448623/article/details/100284740";
    var tiandituTk = "8c9a7d54ac20558e50738df50fcd1920";
    // 服务负载子域
    var subdomains = ["0", "1", "2", "3", "4", "5", "6", "7"];
    Cesium.Ion.defaultAccessToken = cesiumAsset;
    let viewer = new Cesium.Viewer("cesium-container", {
      infoBox: false,
      selectionIndicator: true,
      isShowGlobe: true,
      imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        //影像底图
        url:
          "http://t{s}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" +
          tiandituTk,
        subdomains: subdomains,
        layer: "tdtImgLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible", //使用谷歌的瓦片切片方式
        show: true,
      }),
    });
    viewer._cesiumWidget._creditContainer.style.display = "none"; // 隐藏cesium ion
    viewer.imageryLayers.addImageryProvider(
      new Cesium.WebMapTileServiceImageryProvider({
        //影像注记
        url:
          "http://t{s}.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=" +
          tiandituTk,
        subdomains: subdomains,
        layer: "tdtCiaLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        show: true,
      })
    );

    // 将三维球定位到中国
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(103.84, 31.15, 17850000),
      orientation: {
        heading: Cesium.Math.toRadians(348.4202942851978),
        pitch: Cesium.Math.toRadians(-89.74026687972041),
        roll: Cesium.Math.toRadians(0),
      },
      complete: function callback() {
        // 定位完成之后的回调函数
      },
    });
    this.viewer = viewer;
    this.scene = this.viewer.scene;
    this.camera = this.scene.camera;
    this.viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏supermap logo
    this.scene.globe.show = true;
    this.camera.flyCircleLoop = true;
    this.scene.viewFlag = true;
    let url =
      "http://117.50.11.239:7090/iserver/services/3D-local3DCache-yty/rest/realspace/datas/yty/config";
    this.scene
      .addS3MTilesLayerByScp(url, {
        name: "bim",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay();
      });
    let url1 =
      "http://117.50.11.239:7090/iserver/services/3D-local3DCache-DL/rest/realspace/datas/DL/config";
    this.scene
      .addS3MTilesLayerByScp(url1, {
        name: "road",
        packingRequest: 4,
      })
      .then(() => {
        this.addOverlay1();
      });
    this.addSpotLight();

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
      if (Cesium.defined(earthPosition)) {
        console.log(earthPosition);
      }
      // 获取选中的S3M图层
      let selectlayer = viewer.scene.layers.getSelectedLayer();
      // 获取选中图元的id
      let selectid = selectlayer.getSelection()[0];
      that.select = selectid;
      if (selectid == 2996) {
        viewer.camera.flyTo({
          destination: new Cesium.Cartesian3(
            3186750.6820279765,
            939350.1448450445,
            5444850.273847996
          ),
          orientation: {
            heading: -2,
            pitch: -0.47877092800193255,
            roll: 6.283171325419627,
          },
          duration: 5, //持续时间
        });
      } else {
        that.getExection();
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    setTimeout(function () {
      //   //飞行到项目标段中心点
      viewer.camera.flyTo({
        destination: new Cesium.Cartesian3(
          3188650.6820279765,
          939600.1448450445,
          5444580.273847996
        ),
        orientation: {
          heading: -0.1,
          pitch: -0.47877092800193255,
          roll: 6.283171325419627,
        },
      });
    }, 100);
    // 扫描
    window.setTimeout(function () {
      viewer.scene.scanEffect.show = true;
      viewer.scene.scanEffect.mode = Cesium.ScanEffectMode.CIRCLE; //利用圆环扫描效果
      var pos = new Cesium.Cartesian3(
        3186893.8134447704,
        939000.0194418641,
        5444572.424701958
      );
      viewer.scene.scanEffect.centerPostion = pos;
      // 扫描范围
      viewer.scene.scanEffect._speed = 100;
      // viewer.scene.scanEffect._lineWidth = 500;
      // 扫描时间
      viewer.scene.scanEffect._period = 2000;
      // 扫描颜色
      viewer.scene.scanEffect.color = new Cesium.Color(
        248 / 255,
        9 / 255,
        9 / 255,
        1
      );
    }, 10000);
  },
  methods: {
    child() {
      if (this.select == 2996) {
        this.$emit("func", this.value);
      }
    },
    getExection() {
      var Exection = function TimeExecution() {
        // 当前已经过去的时间，单位s
        var delTime = Cesium.JulianDate.secondsDifference(
          viewer.clock.currentTime,
          viewer.clock.startTime
        );
        var heading = Cesium.Math.toRadians(delTime * angle) + initialHeading;
        viewer.scene.camera.setView({
          destination: new Cesium.Cartesian3(
            3187326.501174774,
            938506.0412503146,
            5444900.653218728
          ), // 点的坐标
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

      // this.viewer.clock.onTick.addEventListener(Exection);
    },
    addSpotLight: function () {
      let scene = this.scene;
      let Cesium = window.Cesium;
      var spotLight;
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
        new Cesium.Color(0, 1, 1, 0.9)
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
            url: cesiumAsset + "/img/wenli16.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: cesiumAsset + "/img/wenli17.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 80,
            VTiling: 80,
          },
          {
            url: cesiumAsset + "/img/wenli16.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: cesiumAsset + "/img/wenli16.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: cesiumAsset + "/img/wenli20.jpg",
            USpeed: 0.5,
            VSpeed: 0,
            UTiling: 50,
            VTiling: 50,
          },
          {
            url: cesiumAsset + "/img/wenli2.jpg",
            USpeed: 0.5,
            VSpeed: 0,
            UTiling: 30,
            VTiling: 30,
          },
          {
            url: cesiumAsset + "/img/wenli2.jpg",
            USpeed: 0.5,
            VSpeed: 0,
            UTiling: 20,
            VTiling: 20,
          },
          {
            url: cesiumAsset + "/img/wenli16.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: cesiumAsset + "/img/wenli17.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 70,
            VTiling: 70,
          },
          {
            url: cesiumAsset + "/img/wenli15.jpg",
            USpeed: 0,
            VSpeed: 0,
            UTiling: 100,
            VTiling: 100,
          },
          {
            url: cesiumAsset + "/img/wenli15.jpg",
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
          url: cesiumAsset + "/img/background.jpg",
        })
      );
    },
    addOverlay1: function () {
      let scene = this.scene;
      var layer = scene.layers.find("road");
      layer.style3D.fillForeColor = new Cesium.Color(8, 5, 0, 1);
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