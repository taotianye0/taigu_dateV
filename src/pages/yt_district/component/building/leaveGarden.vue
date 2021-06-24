<template>
  <div>
    <!--留学人员创业园 建筑-->
    <!-- 右上角 标题 -->
    <div class="title">
      <div class="title_cn">{{ pageTitle_cn }}</div>
      <div class="title_en">{{ pageTitle_en }}</div>
      <!-- 返回按钮 -->
      <div class="button" @click="send(false)">⋘ 返回上一页面</div>
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
                <li class="text">142万㎡</li>
              </ul>
            </li>
            <li class="wrap">
              <ul class="clearfix">
                <li class="in"></li>
                <li class="name">企业数量</li>
                <li class="text">253家</li>
              </ul>
            </li>
            <li class="wrap">
              <ul class="clearfix">
                <li class="in"></li>
                <li class="name">留学人才</li>
                <li class="text">58位</li>
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
            <li>
              <div class="item_name">甘肃远瞻信息科技有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃######有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃###科技有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃****有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃远瞻信息科技有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃######有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃###科技有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃****有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃远瞻信息科技有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃######有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃###科技有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃****有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃远瞻信息科技有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃######有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃###科技有限公司</div>
              <div class="item_time">2018-02-02</div>
            </li>
            <li>
              <div class="item_name">甘肃****有限公司</div>
              <div class="item_time">2018-02-02</div>
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
                  <p><i>96</i>万</p>
                  <div class="wave1"></div>
                  <div class="wave2"></div>
                </div>
                <div class="down">
                  <i>服务交易</i>
                </div>
              </div>
            </li>
            <li class="two">
              <div class="up">
                <!-- 水波纹效果 -->
                <div class="bg"></div>
                <div class="wave">
                  <p><i>152</i>项</p>
                  <div class="wave4"></div>
                  <div class="wave3"></div>
                </div>
                <div class="down">
                  <i>财税服务</i>
                </div>
              </div>
            </li>
            <li class="three">
              <div class="up">
                <!-- 水波纹效果 -->
                <div class="bg"></div>
                <div class="wave">
                  <p><i>552</i>项</p>
                  <div class="wave5"></div>
                  <div class="wave6"></div>
                </div>
                <div class="down">
                  <i>项目申报</i>
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
              <p class="down"><i>12</i> <span>/人</span></p>
            </li>
            <li>
              <p class="up">硕士</p>
              <p class="down"><i>102</i> <span>/人</span></p>
            </li>
          </ul>
          <ul class="clearfix two">
            <li>
              <p class="up">博士</p>
              <p class="down"><i>52</i> <span>/人</span></p>
            </li>
            <li>
              <p class="up">海归</p>
              <p class="down"><i>102</i> <span>/人</span></p>
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
              <i>软件信息</i>
              <span>23.5%</span>
            </li>
            <li>
              <p><i>NO.1</i></p>
              <i>软件信息</i>
              <span>23.5%</span>
            </li>
            <li>
              <p><i>NO.1</i></p>
              <i>软件信息</i>
              <span>23.5%</span>
            </li>
            <li>
              <p><i>NO.1</i></p>
              <i>软件信息</i>
              <span>23.5%</span>
            </li>
            <li>
              <p><i>NO.1</i></p>
              <i>软件信息</i>
              <span>23.5%</span>
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
      pageTitle_cn: "中国兰州留学人员创业园", //页面标题
      pageTitle_en: "China Lanzhou Overseas Students Pioneer Park", //页面标题
    };
  },
  mounted() {
    this.wheel();
    this.teacherIn();
    this.teacherOut();
  },
  methods: {
    //入住企业模块  自动播放动画
    wheel() {
      var list = document.querySelector(".left_two .list");
      var speed = 50;
      setInterval(() => {
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
      this.$event.$emit("aa", data);
    },
  },
};
</script>

<style scoped>
@import "../../../../assets/css/leavegarden.css";

.title .title_en {
  letter-spacing: 0.01rem;
}
</style>