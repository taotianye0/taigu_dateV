<template>
  <div>
    <!-- 左边 -->
    <div class="left">
      <div class="left_one">
        <div class="left_one_title">
          <i>园区概况</i>
          <span>Park Overview</span>
        </div>
        <div class="park">
          <div class="park_up">
            <ul class="clearfix">
              <li>
                <p>规划总面积</p>
                <div>
                  <span>182.77<em>平方公里</em></span>
                </div>
              </li>
              <li>
                <p>孵化总面积</p>
                <div>
                  <span>95万<em>平方米</em></span>
                </div>
              </li>
              <li>
                <p>地区生产总值</p>
                <div>
                  <span>447亿<em>元</em> </span>
                </div>
              </li>
              <li>
                <p>企业总数</p>
                <div>
                  <span>1.4万<em>户</em></span>
                </div>
              </li>
            </ul>
          </div>
          <div class="park_down">
            <ul class="clearfix">
              <li>
                <i></i>
                <p>23人</p>
                <span>院士/专家</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>9000人</p>
                <span>硕士/副高</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>120人</p>
                <span>领军人才</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>923人</p>
                <span>海归</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="left_two">
        <div class="left_three_title">
          <i>科研力量</i>
          <span>Research Strength</span>
        </div>
        <div class="develop" ref="develop"></div>
      </div>
      <div class="left_three">
        <div class="left_three_title">
          <i>行业占比</i>
          <span>Business Proportion</span>
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
      <div class="right_title">
        <i>企业发展</i>
        <span>Enterprise Development</span>
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
    // 绘制科研力量 图
    this.drawDevelop();
    // 绘制行业占比 图
    this.drawBusiness();
    // 绘制企业年限 图
    this.drawyear();
  },
  methods: {
    // 绘制科研力量 图
    drawDevelop() {
      let develop = this.$echarts.init(this.$refs.develop);
      // 用于清除定时器
      let tootipTimer = null;
      let option0 = {
        grid: {
          left: "5%",
          right: "7%",
          bottom: "3%",
          top: "18%",
          containLabel: false,
        },
        tooltip: {
          trigger: "axis",
        },
        toolbox: {
          show: true,
          feature: {
            // dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "国家实验室",
              "国家重点实验室",
              "省级重点实验室",
              "省级实验室培育基地",
              "省级工程实验室",
              "国家级企业技术中心",
              "省级企业技术中心",
              "国家级工程研究中心",
              "省级工程研究中心",
              "国家级创新平台",
              "省级创新平台",
              "地方创新示范中心",
            ],
            nameLocation: "center",
            // axisLabel: {
            //   color: "#fff",
            //   fontFamily: "Microsoft YaHei",
            //   fontWeight: 400,
            //   fontSize: 12,
            // },
            axisLine: {
              show: true,
            },
            axisTick: {
              show: false,
            },
            axisLabel: false,
          },
        ],
        yAxis: [
          {
            show: false,
            type: "value",
          },
        ],
        series: [
          {
            name: "个数",
            type: "bar",
            data: [1, 12, 43, 18, 17, 7, 23, 4, 47, 27, 43, 1],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
                // { coord: [1,12], value:12},
                // { coord: [2,43], value:43},
              ],
              animation: true,
              animationThreshold: 2000,
              animationDuration: function (idx) {
                // 越往后的数据时长越大
                return idx * 200;
              },
            },
            barWidth: "70%",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 1,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#3CCACB", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#002DFF", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              shadowColor: "#0063FF",
              shadowOffsetX: 3,
              shadowOffsetY: -1,
              // normal: {
              //   //每根柱子颜色设置
              //   color: function (params) {
              //     let colorList = [
              //       "#D85C5C",
              //       "#399D6F",
              //       "#1A63B1",
              //       "#D85C5C",
              //       "#399D6F",
              //       "#1A63B1",
              //       "#D85C5C",
              //       "#399D6F",
              //       "#1A63B1",
              //       "#D85C5C",
              //       "#399D6F",
              //       "#1A63B1",
              //     ];
              //     return colorList[params.dataIndex];
              //   },
              // },
            },
            emphasis: {
              itemStyle: {
                color: "rgba(70,237,238)",
              },
            },
          },
        ],
      };
      // 3,绘图
      develop.setOption(option0);
      // 可调用clearLoop方法，清除定时器
      tootipTimer && tootipTimer.clearLoop();
      tootipTimer = null;
      // 调用轮播的方法
      tootipTimer = tools.loopShowTooltip(develop, option0, {
        interval: 1500, // 轮播间隔时间
        loopSeries: true, // 是否开启轮播循环
      });
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
          max: 500,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            type: "pie",
            radius: "70%",
            center: ["50%", "52%"],
            data: [
              { value: 320, name: "电子信息"},
              { value: 150, name: "节能环保"},
              { value: 300, name: "生物医药"},
              { value: 50, name: "其他" },
              { value: 180, name: "工业生产" },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            avoidLabelOverlap: false,
            // hoverAnimation: false, // 取消鼠标滑入放大的效果
            // animation: false, // 取消饼图展开的效果
            label: {
              color: "#fff",
              fontFamily: "Microsoft YaHei",
              fontSize: 15,
              formatter: "{b} \n \n {d}%",
              padding: [0, -50, 0, -45],
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: "#BCC3D6",
                type: "radial",
              },
              smooth: 0,
              length: 5,
              length2: 80,
            },
            itemStyle: {
              normal: {
                color: "#0063FF",
              },
              emphasis: {
                color: "rgba(50,226,248,0.7)",
              },
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
      // 自动高亮动画
      var myChartPieIndex = 0;
      var a = setInterval(function () {
        var dataLen = option1.series[0].data.length;
        // 取消之前高亮的图形
        business.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: myChartPieIndex,
        });
        myChartPieIndex = (myChartPieIndex + 1) % dataLen;
        // 高亮当前图形
        business.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: myChartPieIndex,
        });
      }, 1000);
    },
    // 绘制企业发展 图
    drawyear() {
      // 1.初始化绘图容器
      let years = this.$echarts.init(this.$refs.years);
      // 2.绘图配置项
      let option2 = {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "1%",
          right: "3%",
          top: "5%",
          bottom: "2%",
          containLabel: true,
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          type: "category",
          data: ["瞪羚企业", "上市公司", "骨干企业", "高新技术企业"],
          nameLocation: "center",
          axisLabel: {
            color: "#fff",
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            fontSize: 16,
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
            barWidth: "50%",
            data: [157, 25, 30, 308],
            label: {
              show: true,
              position: "right",
              formatter: "{c}户",
              color: "#fff",
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              fontSize: 16,
            },
            itemStyle: {
              normal: {
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
              emphasis: {
                color: "rgba(70,237,238)",
              },
            },
          },
        ],
      };
      // 3,绘图
      years.setOption(option2);
      // 自动高亮动画
      var myChartPieIndex = 0;
      var a = setInterval(function () {
        var dataLen = option2.series[0].data.length;
        // 取消之前高亮的图形
        years.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: myChartPieIndex,
        });
        myChartPieIndex = (myChartPieIndex + 1) % dataLen;
        // 高亮当前图形
        years.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: myChartPieIndex,
        });
      }, 800);
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/indexdata.css";
.title .title_en {
  font-size: 0.2rem;
}
</style>