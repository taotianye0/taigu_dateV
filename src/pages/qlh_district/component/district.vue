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
                  <span>21.52<em>平方公里</em></span>
                </div>
              </li>
              <li>
                <p>企业总数</p>
                <div class="clearfix downBox">
                  <span>3560<em>个</em></span>
                </div>
              </li>
            </ul>
          </div>
          <div class="park_down">
            <ul class="clearfix">
              <li>
                <i></i>
                <p>4人</p>
                <span>院士/专家</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>1561人</p>
                <span>硕士/副高</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>26人</p>
                <span>领军人才</span>
                <span class="shu"></span>
              </li>
              <li>
                <i></i>
                <p>101人</p>
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
        dataset: {
          source: [
            ["product", "2017", "2018", "2019", "2020"],
            ["第二产业增加值", 138.3,	146.2 ,	159.3 ,	175.5 ],
            ["第三产业增加值", 19.8	,22.3	,25.5	,27.3],
            ["固定资产投资额",52.5,	60.9	,73.2	,77.5],
            ["社会消费品零售总额",22.9,	25.3,	29.2,	31.8],
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
          grid: {
          left: "-7%",
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
             color: "#C33CFD",
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            symbol: "none",
       
               color: "#1E8BFF",
          },
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
          min: 1,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            type: "pie",
            radius: "78%",
            center: ["50%", "50%"],
            data: [
              { value: 400, name: "电子信息" },
              { value: 150, name: "其他" },
              { value: 130, name: "工业生产" },
              { value: 180, name: "节能环保" },
              { value: 220, name: "生物医药" },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            avoidLabelOverlap: false,
            hoverAnimation: false, // 取消鼠标滑入放大的效果
            animation: false, // 取消饼图展开的效果
            label: {
              color: "#BCC3D6",
              fontFamily: "Microsoft YaHei",
              fontSize: 15,
              formatter: "{b} \n \n {d}%",
              padding: [0, -65, 0, -66],
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: "#BCC3D6",
                type: "radial",
              },
              smooth: 0,
              length: 1,
              length2: 75,
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
            data: [39,7,8,77],
            label: {
              show: true,
              position: "right",
              formatter: "{c}户",
              color: "#00FCF9",
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
  font-size: 0.2rem;
  letter-spacing: 0.03rem;
}
</style>