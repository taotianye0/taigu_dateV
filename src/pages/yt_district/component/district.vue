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
                <div class="clearfix downBox">
                  <span>12.26<em>平方公里</em></span>
                </div>
              </li>
              <li>
                <p>企业总数</p>
                <div class="clearfix downBox">
                  <span>5610<em>个</em></span>
                </div>
              </li>
            </ul>
          </div>
          <div class="park_down">
            <ul class="clearfix">
              <li>
                <i></i>
                <p>8人</p>
                <span>院士/专家</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>4657人</p>
                <span>硕士/副高</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>65人</p>
                <span>领军人才</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>751人</p>
                <span>海归</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="left_two">
        <div class="left_three_title">
          <i>产业增加值</i>
          <span> Industry value added</span>
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
      <!-- 返回按钮 -->
      <div class="button" @click="toIndex">⋘ 返回主页</div>
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
    // 绘制产业增加值 图
    this.drawDevelop();
    // 绘制行业占比 图
    this.drawBusiness();
    // 绘制企业发展 图
    this.drawyear();
  },
  methods: {
    // 页面跳转
    toIndex() {
      this.$router.push("/");
    },
    // 绘制产业增加值 图
    drawDevelop() {
      // 用于清除定时器
      let tootipTimer = null;
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
        tooltip: {
          trigger: "axis",
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     // dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        // },
        calculable: true,
        dataset: {
          source: [
            ["product", "2017", "2018", "2019", "2020"],
            ["第二产业增加值", 14, 15.3, 17.1, 19.0],
            ["第三产业增加值", 25.5, 29.6, 35.1, 37.2],
            ["固定资产投资额", 58.1, 67.4, 78.5, 84.0],
            ["社会消费品零售总额", 15.8, 17.5, 19.2, 20.3],
          ],
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#0D52AC",
              with: 3,
            },
          },
          type: "category",
          nameLocation: "center",
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
        grid: {
          left: "-5%",
          right: "10%",
          top: "25%",
          bottom: "0%",
          containLabel: true,
        },
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "none",
            color: "#00FFE9",
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "none",
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "none",
            color: "#00FF00",
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "none",
            color: "#FF00B2",
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
        interval: 1000, // 轮播间隔时间
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
        // visualMap: {
        //   show: false,
        // min: 20,
        // max: 700,
        // inRange: {
        //   colorLightness: [0, 1],
        // },
        // },
        series: [
          {
            type: "pie",
            radius: "76%",
            center: ["50%", "55%"],
            data: [
              { value: 500, name: "电子信息", itemStyle: { color: "#2688E0" } },
              { value: 50, name: "其他", itemStyle: { color: "#064782" } },
              { value: 130, name: "工业生产", itemStyle: { color: "#060D77" } },
              { value: 100, name: "节能环保", itemStyle: { color: "#2550A6" } },
              { value: 220, name: "生物医药", itemStyle: { color: "#333DE5" } },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            avoidLabelOverlap: false,

            label: {
              color: "#BCC3D6",
              fontFamily: "Microsoft YaHei",
              fontSize: 15,
              formatter: "{b} \n \n {d}%",
              padding: [0, -60, 0, -50],
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: "#BCC3D6",
                type: "radial",
              },
              smooth: 0,
              length: 10,
              length2: 55,
            },
            itemStyle: {
              // color: "#0063FF",
              normal: {
                color: "#0063FF",
              },
              emphasis: {
                color: "rgba(50,226,248)",
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
            color: "#BCC3D6",
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
            data: [63, 10, 12, 123],
            label: {
              show: true,
              position: "right",
              formatter: "{c}户",
              color: "#BCC3D6",
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              fontSize: 18,
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
                color: "#A36CFF",
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
      }, 1000);
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/yt.css";

.title .title_en {
  letter-spacing: 0.028rem;
}
</style>