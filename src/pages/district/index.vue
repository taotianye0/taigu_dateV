<template>
  <div class="data">
    <div id="data-title" class="data-title">
      <img src="../assets/img/header_bg.png" alt="" />
      <div class="header-content flex">
        <div class="title-left flex">
          <div id="day">2020.9.16</div>
          <div id="weekend"></div>
          <div id="time"></div>
        </div>
        <div class="title-center">兰州大学国家大学科技园</div>
        <div class="title-right">
          <img class="back" src="../assets/img/logo.png" alt="" />
        </div>
      </div>
    </div>
    <div id="data-content" class="data-content">
      <div class="con-left fl">
        <div class="left-top p1">
          <div class="title">科研成果转化</div>
          <div class="mark"></div>
          <div class="res-list flex">
            <!-- <div class="res-item">
                                <div class="res-number">8个</div>
                                <div class="res-text">文化教育类</div>
                            </div> -->
          </div>
        </div>
        <div class="left-center p2">
          <div class="title">企业人员</div>
          <div class="mark"></div>
          <div id="echarts_1" class="charts"></div>
        </div>
        <div class="left-bottom">
          <div class="title">企业考评</div>
          <div class="mark"></div>
          <div class="check-area">
            <div class="check-val">
              <div
                id="echarts_2"
                class="charts"
                style="width: 174px; height: 174px"
              ></div>
            </div>
            <div class="check-text">
              <div class="check-text-item">
                <span id="check-success">88</span>
                <span class="text-tip">考评合格</span>
              </div>
              <div class="check-text-item">
                <span id="check-fail">12</span>
                <span class="text-tip">考评不合格</span>
              </div>
              <div class="check-text-item">
                <span id="check-pro">88%</span>
                <span class="text-tip">考评合格率</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="con-center fl">
        <div class="cen-top" id="map"></div>
        <div class="cen-count flex">
          <div class="count-item flex p2">
            <img src="../assets/img/c1.png" alt="" />
            <div class="info">
              <div>入孵企业</div>
              <div><span id="c1">88</span><span>家</span></div>
            </div>
          </div>
          <div class="count-item flex p1">
            <img src="../assets/img/c2.png" alt="" />
            <div class="info">
              <div>成果项目</div>
              <div><span id="c2">221</span><span>个</span></div>
            </div>
          </div>
          <div class="count-item flex">
            <img src="../assets/img/c3.png" alt="" />
            <div class="info">
              <div>专家导师</div>
              <div><span id="c3">88</span><span>人</span></div>
            </div>
          </div>
        </div>
        <div class="cen-bottom">
          <div class="title">项目金额</div>
          <div class="mark"></div>
          <div id="echarts_3" class="charts"></div>
        </div>
      </div>
      <div class="con-right fr">
        <div class="right-top">
          <div class="title">项目类型</div>
          <div class="mark"></div>
          <div id="echarts_4" class="charts"></div>
        </div>
        <div class="right-center">
          <div class="title">项目进度</div>
          <div class="mark"></div>
          <div class="obj-process">
            <div class="process-area">
              <div class="process-val">25</div>
            </div>
            <div class="process-text">
              <div class="p-title">项目数目/个</div>
              <div class="obj-count first-child">
                <span id="obj-count">396</span><span> / 次</span>
              </div>
              <div class="p-title">已完成/个</div>
              <div class="obj-count">
                <span id="finish-count">25</span><span> / 次</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-bottom">
          <div class="title">大事纪</div>
          <div class="mark"></div>
          <div class="year-area">
            <!-- <div class="year-item" onclick="lookMore()">2005-2010</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../assets/css/common.css";
@import "../assets/css/index.css";
</style>