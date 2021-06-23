<template>
  <div id="cesium-container" class="container"></div>
</template>
<script>
const Cesium = window.Cesium;
export default {
  data() {
    return {
      viewer: {},
      scene: {},
      camera: {},
      pointLight3: undefined,
      pointLight4: undefined,
    };
  },
  mounted: function () {
    // let that = this;
    let viewer = new Cesium.Viewer("cesium-container", {
      infoBox: false,
      selectionIndicator: false,
      isShowGlobe: true,
    });
    viewer.imageryLayers.addImageryProvider(
      new Cesium.BingMapsImageryProvider({
        url: "https://dev.virtualearth.net",
        mapStyle: Cesium.BingMapsStyle.AERIAL,
      })
    );
    this.viewer = viewer;
    this.scene = this.viewer.scene;
    this.camera = this.scene.camera;
    this.scene.globe.show = true;
    this.viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏supermap logo
    this.scene.globe.show = true;
    this.camera.flyCircleLoop = true;
    this.scene.viewFlag = true;
    let url =
      "http://117.50.11.239:7090/iserver/services/3D-YTYQ/rest/realspace/datas/LCY/config";
    this.scene
      .addS3MTilesLayerByScp(url, {
        name: "bim",
        packingRequest: 1,
      })
      .then(() => {
        this.addOverlay();
      });
    // var promise = this.scene.open(
    //   "http://www.supermapol.com/realspace/services/3D-CQmodel_wireframe_2000/rest/realspace"
    // );
    // Cesium.when.all(promise, function () {
    //   that.addOverlay();
    //   //设置相机位置，定位至模型
    //   that.scene.camera.setView({
    //     destination: new Cesium.Cartesian3(
    //       -1584234.1130613836,
    //       5326981.135751215,
    //       3139896.3140030033
    //     ),
    //     orientation: {
    //       heading: 0.023770275120284623,
    //       pitch: -0.47877092800193255,
    //       roll: 6.283171325419627,
    //     },
    //   });

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
      // var position = viewer.scene.pickPosition(event.position);
      // console.log(11111111111111111);
      //将笛卡尔坐标转化为经纬度坐标
      // var cartographic = Cesium.Cartographic.fromCartesian(position);
      // console.log(cartographic)
      // var x = Cesium.Math.toDegrees(cartographic.longitude);
      // var y = Cesium.Math.toDegrees(cartographic.latitude);
      // var z = cartographic.height;
      var h = viewer.scene.camera.heading;
      var p = viewer.scene.camera.pitch;
      var r = viewer.scene.camera.roll;
      console.log(h, p, r);
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    // setTimeout(function () {
    // 飞行到项目标段中心点
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
      duration: 4, //持续时间
      complete: function callback() {
        setTimeout(function () {
          var pos = new Cesium.Cartesian3(
            -1238500.174399915,  5005745.274836783, 3753610.6448958735
          );
          let heading = 4.1945742079374515;
          const pitch = -0.478811382362184;
          const roll = 300;
          let x = -0.1;
          viewer.scene.preUpdate.addEventListener(function () {
            x += 1.15;
            heading = Cesium.Math.toRadians(x);
            viewer.camera.lookAt(
              pos,
              new Cesium.HeadingPitchRange(heading, pitch, roll)
            );
          });
        }, 100);
      },
    });
  },

  methods: {
       // 楼层样式
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
    //   layer.setObjsColor(
    //     [2996],
    //     // new Cesium.Color(9 / 255, 277 / 255, 248 / 255, 0.9)
    //     new Cesium.Color(0, 1, 1, 1)
    //   );
      //设置环境光(夜晚)
      scene.lightSource.ambientLightColor = new Cesium.Color(110/255, 110/255, 110/255, 0.5);
      scene.lightSource.ambientLightColor = new Cesium.Color(
        242 / 255,
        129 / 255,
        108 / 255,
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
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100%;
}
</style>