<template>
  <div>
    <div class="supermap">
      <!-- 超图 -->
    </div>
    <!-- 左边 -->
    <div class="left">
      <div class="left_one"></div>
      <div class="left_two">
        <div class="left_three_title">
          <i>企业发展</i>
          <span>Enterprise development</span>
        </div>
        <div class="develop" ref="develop"></div>
      </div>
      <div class="left_three">
        <div class="left_three_title">
          <i>行业占比</i>
        <span>Industry accounted for</span>
        </div>
        <div class="business" ref="business"></div>
      </div>
    </div>
    <!-- 右上角 标题 -->
    <div class="title">
      <div class="title_cn">{{ pageTitle_cn }}</div>
      <div class="title_en">{{ pageTitle_en }}</div>
    </div>
    <!-- 右下角 -->
    <div class="right">
      <div class="left_three_title">
         <i>企业年限</i>
          <span>Enterprise fixed number of year</span>
      </div>
      <div class="years" ref="years"></div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pageTitle_cn: "", //页面标题
      pageTitle_en: "", //页面标题
    };
  },
  mounted() {
    // 园区名字
    this.pageTitle_cn = this.$route.name.split(",")[0];
    this.pageTitle_en = this.$route.name.split(",")[1];
    // 绘制企业发展 图
    this.drawDevelop();
    // 绘制行业占比 图
    this.drawBusiness();
    // 绘制企业年限 图
    this.drawyear();
  },
  methods: {
    // 绘制企业发展 图
    drawDevelop() {
      let develop = this.$echarts.init(this.$refs.develop);
      let option0 = {
        legend: {
          top: "30",
          formatter: "{name}",
          textStyle: {
            color: "#BCC3D6",
            fontWeight: 400,
            fontFamily: "Microsoft YaHei",
            fontSize: 16,
          },
          icon: "rect",
        },
        // tooltip: {
        //   trigger: "axis",
        // // showContent: false,//是否展示数据
        //   triggerOn: "click", //点击时展示数据
        // },
        dataset: {
          source: [
            ["product", "2017", "2018", "2019", "2020", "2021"],
            ["大型企业", 30.4, 85.1, 23.3, 93.8, 98.7],
            ["中小型企业", 32.1, 85.7, 23.1, 53.4, 95.1],
            ["微型企业", 47.2, 79.5, 46.4, 85.2, 22.5],
          ],
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#0D52AC",
              with: 2,
            },
          },
          type: "category",

          axisTick: {
            alignWithLabel: true,
          },
          // 没起作用
          nameTextStyle: {
            color: "#BCC3D6",
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            fontSize: 14,
          },
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "none",
            color: "#30B7C1",
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "none",
            color: "#C33CFD",
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "none",
            color: "#1E8BFF",
          },
        ],
      };
      // 3,绘图
      develop.setOption(option0);
    },
    // 绘制行业占比 图
    drawBusiness() {
      // 1.初始化绘图容器
      let business = this.$echarts.init(this.$refs.business);
      // 2.绘图配置项
      let option1 = {
        tooltip: {
          trigger: "item",
          formatter: " <br/>{b} : {c} ({d}%)",
          triggerOn: "click",
        },
        visualMap: {
          show: false,
          min: 10,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            data: [
              { value: 300, name: "软件信息" },
              { value: 350, name: "广告设计" },
              { value: 274, name: "工业生产" },
              { value: 205, name: "电子商务" },
              { value: 400, name: "生物医药" },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "#BCC3D6",
              fontFamily: "Microsoft YaHei",
              fontSize: 16,
              formatter: "{b} \n \n {d}%",
              padding: [0, -70, 0, -70],
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: "#BCC3D6",
                type: "radial",
              },
              smooth: 0,
              length: 15,
              length2: 80,
            },
            itemStyle: {
              color: "#0063FF",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };
      // 3,绘图
      business.setOption(option1);
    },
    // 绘制企业年限 图
    drawyear() {
      // 1.初始化绘图容器
      let years = this.$echarts.init(this.$refs.years);
      // 2.绘图配置项
      let option2 = {
        title: {
          text: "世界人口总量",
          subtext: "数据来自网络",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2011年", "2012年"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
          },
        ],
      };
      // 3,绘图
      years.setOption(option2);
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/yt.css";
</style>