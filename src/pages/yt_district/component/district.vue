<template>
  <div>
    <!-- 左边 -->
    <div class="left">
      <div class="left_one">
        <div class="left_one_title">
          <i>园区企业数据</i>
          <span>Park enterprise data</span>
        </div>
        <div class="park">
          <div class="park_up">
            <ul class="clearfix">
              <li>
                <p>企业总数</p>
                <div class="clearfix downBox">
                  <i></i><span>1024<em>家</em> </span>
                </div>
              </li>
              <li>
                <p>招商项目</p>
                 <div class="clearfix downBox">
                  <span>180<em>个</em></span>
                </div>
              </li>
            </ul>
          </div>
          <div class="park_down">
            <ul class="clearfix">
              <li>
                <i></i>
                <p>26人</p>
                <span>院士</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>5000人</p>
                <span>硕士</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>460人</p>
                <span>博士</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>569人</p>
                <span>海归</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
        <!-- 返回按钮 -->
      <div class="button" @click="toIndex">⋘ 返回主页</div>
    </div>
    <!-- 右下角 -->
    <div class="right">
      <div class="right_title">
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
    // 页面跳转
    toIndex(){
      this.$router.push("/");
    },
    // 绘制企业发展 图
    drawDevelop() {
      let develop = this.$echarts.init(this.$refs.develop);
      let option0 = {
        legend: {
          top: "25",
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
          axisLabel: {
            color: "#BCC3D6",
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            fontSize: 16,
          },
        },
        yAxis: {
          show: false,
        },
        grid: { left: "0%" },
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
            type: "pie",
            radius: "78%",
            center: ["45%", "50%"],
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
              fontSize: 15,
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
              length: 1,
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
        tooltip: {
          trigger: "axis",
        },
        
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          type: "category",
          data: ["4 微型企业", "3 小型企业", "2 中型企业", "1 大型企业"],
          nameLocation: "center",
          axisLabel: {
            color: "#00FCF9",
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            fontSize: 18,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },

        series: [
          {
            type: "bar",
            barWidth: "45%",
            data: [18, 23, 12, 14, 11, 5],
            label: {
              show: true,
              position: "right",
              formatter: "{c}年",
              color: "#00FCF9",
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              fontSize: 18,
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#A36CFF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#33B8E4", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
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