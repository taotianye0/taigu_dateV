<template>
  <div>
    <!--物流园 建筑-->
    <!-- 右上角 标题 -->
    <div class="title">
      <div class="title_cn">{{ pageTitle_cn }}</div>
      <div class="title_en">{{ pageTitle_en }}</div>
      <!-- 返回按钮 -->
      <div class="button" @click="send(false)" v-if="isshow">
        ⋘ 返回上一页面
      </div>
      <!-- 跳转至园区管理按钮 -->
      <div class="button1">
        <a href="#">园区管理 ⋙</a>
      </div>
    </div>
    <!-- 左边数据 -->
    <div class="left">
      <div class="left_one">
        <div class="small_title">
          <p class="cn">园区概况</p>
          <p class="en">Park Overview</p>
        </div>
        <div class="con">
          <ul class="clearfix">
            <li class="wrap">
              <ul class="clearfix">
                <li class="in"></li>
                <li class="name">总规划建筑面积</li>
                <li class="text">12.7万㎡</li>
              </ul>
            </li>
            <li class="wrap">
              <ul class="clearfix">
                <li class="in"></li>
                <li class="name">企业数量</li>
                <li class="text">21家</li>
              </ul>
            </li>
            <li class="wrap">
              <ul class="clearfix">
                <li class="in"></li>
                <li class="name">人才数量</li>
                <li class="text">502位</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="left_two">
        <div class="small_title">
          <p class="cn">入驻企业</p>
          <p class="en">Settled Enterprise</p>
        </div>
        <div class="listBox">
          <ul class="list">
            <li v-for="(item, index) in companyList" :key="index">
              <div class="item_name">{{ item.companyName }}</div>
              <div class="item_time">{{ item.time }}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="left_three">
        <div class="small_title">
          <p class="cn">园区服务</p>
          <p class="en">Park Service</p>
        </div>
        <div class="con">
          <ul class="clearfix">
            <li class="one">
              <div class="up">
                <!-- 水波纹效果 -->
                <div class="bg"></div>
                <div class="wave">
                  <p><i>38</i>项</p>
                  <div class="wave1"></div>
                  <div class="wave2"></div>
                </div>
                <div class="down">
                  <i>技术合作</i>
                </div>
              </div>
            </li>
            <li class="two">
              <div class="up">
                <!-- 水波纹效果 -->
                <div class="bg"></div>
                <div class="wave">
                  <p><i>18</i>项</p>
                  <div class="wave4"></div>
                  <div class="wave3"></div>
                </div>
                <div class="down">
                  <i>知识产权</i>
                </div>
              </div>
            </li>
            <li class="three">
              <div class="up">
                <!-- 水波纹效果 -->
                <div class="bg"></div>
                <div class="wave">
                  <p><i>23</i>项</p>
                  <div class="wave5"></div>
                  <div class="wave6"></div>
                </div>
                <div class="down">
                  <i>科技服务</i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 右边数据 -->
    <div class="right">
      <div class="right_one">
        <!-- <div class="small_title">
          <p class="cn">园区企业</p>
          <p class="en">The park enterprises</p>
        </div>
        <div class="con">
          <ul class="clearfix">
            <li>
              <i class="one_left"></i>
              <p class="one_right">
                <i>企业总数</i>
                <span>102 <em>家</em> </span>
              </p>
            </li>
            <li>
              <i class="two_left"></i>
              <p class="one_right">
                <i>招商项目</i>
                <span>252 <em>个</em> </span>
              </p>
            </li>
          </ul>
        </div> -->
      </div>
      <div class="right_two">
        <div class="small_title">
          <p class="cn">引进人才</p>
          <p class="en">Talent Introduction</p>
        </div>
        <div class="righttwo_left">
          <div class="in"></div>
          <div class="out"></div>
          <div class="text">65%</div>
        </div>
        <div class="righttwo_fight">
          <ul class="clearfix">
            <li>
              <p class="up">院士</p>
              <p class="down"><i>1</i> <span>/人</span></p>
            </li>
            <li>
              <p class="up">硕士</p>
              <p class="down"><i>120</i> <span>/人</span></p>
            </li>
          </ul>
          <ul class="clearfix two">
            <li>
              <p class="up">领军人才</p>
              <p class="down"><i>3</i> <span>/人</span></p>
            </li>
            <li>
              <p class="up">海归</p>
              <p class="down"><i>30</i> <span>/人</span></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="right_three">
        <div class="small_title">
          <p class="cn">行业占比</p>
          <p class="en">Business Proportion</p>
        </div>
        <div class="list">
          <ul>
            <li>
              <p><i>NO.1</i></p>
              <i>生物##医药</i>
              <span>55%</span>
            </li>
            <li>
              <p><i>NO.2</i></p>
              <i>电子##信息</i>
              <span>22%</span>
            </li>
             <li>
              <p>
                <i>NO.3</i>
              </p>
              <i>现代##服务页</i>
              <span>10%</span>
            </li>
            <li>
              <p><i>NO.4</i></p>
              <i>节##能环保</i>
              <span>8%</span>
            </li>
            <li>
              <p><i>NO.5</i></p>
              <i>其他</i>
              <span>5%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle_cn: "兰州高新区现代医药物流园", //页面标题
      pageTitle_en:
        "Modern Pharmaceutical Logistics Park of Lanzhou High Tech Zone", //页面标题
      isshow: false,
      timer: null,
      companyList: [
        { companyName: "兰州万桥智####限公司", time: "2001-04-18" },
        { companyName: "甘肃泛植生物科技有限公司", time: "2015-12-01" },
        { companyName: "兰&&&&科技有限公司", time: "2004-12-06" },
        { companyName: "兰州荣&&&&&有限责任公司", time: "2004-09-04" },
        { companyName: "甘肃一德节能环保有限公司", time: "2006-04-06" },
        { companyName: "甘肃稳健医疗科技有限公司", time: "2013-01-28" },
        { companyName: "甘肃$$$$$$$团有限公司", time: "2007-04-25" },
        { companyName: "兰州鸿&&&7设计有限公司", time: "2004-10-26" },
        { companyName: "兰州安众信息科技有限公司", time: "2014-04-11" },
        { companyName: "甘肃力合科技设备有限公司", time: "2015-12-02" },
        { companyName: "甘肃鼎######材有限公司", time: "2016-06-17" },
        { companyName: "甘肃兰菲环保科技有限公司", time: "2015-01-27" },
        { companyName: "兰#######科技有限公司", time: "2004-06-07" },
        { companyName: "甘肃万新科技有限公司", time: "2002-09-13" },
        { companyName: "兰######物科技有限公司", time: "2003-06-25" },
      ],
    };
  },
  mounted() {
    this.wheel();
    this.teacherIn();
    this.teacherOut();
    this.$event.$on("show", (e) => {
      this.isshow = e;
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    //入住企业模块  自动播放动画
    wheel() {
      var list = document.querySelector(".left_two .list");
      var speed = 50;
      this.timer = setInterval(() => {
        if (
          list.scrollTop < Math.round(list.scrollHeight - list.offsetHeight)
        ) {
          list.scrollTop++;
        } else {
          setTimeout(() => {
            list.scrollTop = 0;
          }, 1500);
        }
      }, speed);
    },
    // 专家导师 模块  里面的动图
    teacherIn() {
      var myChart = this.$echarts.init(
        document.querySelector(".righttwo_left .in")
      );

      var pieData = [
        {
          value: 22,
          name: "name1",
          itemStyle: {
            normal: {
              // color: 'rgba(42,42,187,1)'
              color: {
                //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                type: "linear",
                x: 0,
                y: 0,
                x2: 0, //从左到右 0-1
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4b42f5", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#3540bb", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            }, //正常颜色
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            }, //鼠标移入颜色
          },
        },
        {
          value: 22,
          name: "name2",
          itemStyle: {
            normal: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0, //从左到右 0-1
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#3a48c1",
                  },
                  {
                    offset: 1,
                    color: "#4c70c2",
                  },
                ],
                globalCoord: false,
              },
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name3",
          itemStyle: {
            normal: {
              color: "rgba(85,132,151,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name4",
          itemStyle: {
            normal: {
              color: "rgba(87,179,180,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name5",
          itemStyle: {
            normal: {
              color: "rgba(58,177,184,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name6",
          itemStyle: {
            normal: {
              color: "rgba(29,173,194,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name7",
          itemStyle: {
            normal: {
              color: "rgba(4,171,203,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name8",
          itemStyle: {
            normal: {
              color: "rgba(3,177,203,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name9",
          itemStyle: {
            normal: {
              color: "rgba(3,134,205,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "rgba(3,102,205,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "rgba(89,105,180,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "rgba(68,65,198,1)",
            },
            emphasis: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
      ];
      let option = {
        series: [
          {
            name: "动图",
            type: "pie",
            radius: ["48%", "64%"],
            itemStyle: {
              borderColor: "#0c092a", // 增加空隙，该颜色与背景色相同
              borderWidth: 5, // 空隙大小
            },
            avoidLabelOverlap: false,
            hoverAnimation: false, // 取消鼠标滑入放大的效果
            animation: false, // 取消饼图展开的效果
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: pieData,
          },
        ],
      };
      // 绘图
      myChart.setOption(option);
      var myChartPieIndex = 0;
      var a = setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: myChartPieIndex,
        });
        myChartPieIndex = (myChartPieIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: myChartPieIndex,
        });
      }, 80);
    },
    teacherOut() {
      var myChart = this.$echarts.init(
        document.querySelector(".righttwo_left .out")
      );
      var pieData = [
        {
          value: 22,
          name: "name1",
          itemStyle: {
            normal: {
              color: "#083973",
            }, //正常颜色
            emphasis: {
              color: "rgba(255,255,255)",
            }, //鼠标移入颜色
          },
        },
        {
          value: 22,
          name: "name2",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name3",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name4",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name5",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name6",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name7",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name8",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name9",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name10",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name11",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
        {
          value: 22,
          name: "name12",
          itemStyle: {
            normal: {
              color: "#083973",
            },
            emphasis: {
              color: "rgba(255,255,255)",
            },
          },
        },
      ];
      let option = {
        series: [
          {
            name: "动图",
            type: "pie",
            radius: ["65%", "80%"],
            itemStyle: {
              borderColor: "rgba(1,23,55,0.5)", // 增加空隙，该颜色与背景色相同
              borderWidth: 5, // 空隙大小
            },
            avoidLabelOverlap: false,
            hoverAnimation: false, // 取消鼠标滑入放大的效果
            animation: false, // 取消饼图展开的效果
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: pieData,
          },
        ],
      };
      // 绘图
      myChart.setOption(option);
      var myChartPieIndex = 0;
      var a = setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: myChartPieIndex,
        });
        myChartPieIndex = (myChartPieIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: myChartPieIndex,
        });
      }, 5);
    },
    send(data) {
      this.$emit("back");
      this.$event.$emit("dl", data);
    },
  },
};
</script>

<style scoped>
@import "../../../../assets/css/leavegarden.css";

.title .title_en {
  letter-spacing: 0.004rem;
  font-size: 0.18rem;
}
</style>