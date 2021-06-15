<template>
  <div>
    <!--留学人员创业园 建筑-->
    <!-- 右上角 标题 -->
    <div class="title">
      <div class="title_cn">{{ pageTitle_cn }}</div>
      <div class="title_en">{{ pageTitle_en }}</div>
    </div>
    <!-- 左边数据 -->
    <div class="left">
      <div class="left_one">
        <div class="small_title">
          <p class="cn">园区基本信息</p>
          <p class="en">asic Information of the Park</p>
        </div>
        <div class="con">
          <ul class="clearfix">
            <li class="wrap">
              <ul>
                <li class="in"></li>
                <li class="name">总规划建筑面积</li>
                <li class="text">142万㎡</li>
              </ul>
            </li>
            <li class="wrap">
              <ul>
                <li class="in"></li>
                <li class="name">总规划建筑面积</li>
                <li class="text">142万㎡</li>
              </ul>
            </li>
            <li class="wrap">
              <ul>
                <li class="in"></li>
                <li class="name">总规划建筑面积</li>
                <li class="text">142万㎡</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="left_two">
        <div class="small_title">
          <p class="cn">入住企业</p>
          <p class="en">In the enterprise</p>
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
          <p class="en">The park service</p>
        </div>
        <ul class="con">
          <li>
            <div class="down"></div>
            <div class="wave">
              <!-- 水波纹效果 -->
              <div class="wave1"></div>
              <div class="wave2"></div>
            </div>
          </li>
            <li>
            <div class="down"></div>
            <div class="wave">
              <!-- 水波纹效果 -->
              <div class="wave1"></div>
              <div class="wave3"></div>
            </div>
          </li>
            <li>
            <div class="down"></div>
            <div class="wave">
              <!-- 水波纹效果 -->
              <div class="wave1"></div>
              <div class="wave2"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 右边数据 -->
    <div class="right">
      <div class="right_one">
        <div class="small_title">
          <p class="cn">园区企业</p>
          <p class="en">The park enterprises</p>
        </div>
      </div>
      <div class="right_two">
        <div class="small_title">
          <p class="cn">专家导师</p>
          <p class="en">Expert teacher</p>
        </div>
      </div>
      <div class="right_three">
        <div class="small_title">
          <p class="cn">行业占比</p>
          <p class="en">Industry accounted for</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle_cn: "兰州留学人员创业园", //页面标题
      pageTitle_en: "Lanzhou Overseas Students Pioneer Park", //页面标题
    };
  },
  mounted() {
    this.wheel();
  },
  methods: {
    //入住企业模块 自动播放动画
    wheel() {
      var area = document.querySelector(".listBox");
      var list = document.querySelector(".list");
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
  },
};
</script>

<style scoped>
@import "../../../../assets/css/leavegarden.css";
</style>