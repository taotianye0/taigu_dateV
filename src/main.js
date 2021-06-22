
import Vue from 'vue';
import App from './App';
import router from './router';
import less from 'less';

// css重置样式
import "./assets/css/reset.css";
// js全局挂载
import "./assets/js/reset"
// 全局挂载less
Vue.use(less);
// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
// eventBus 挂载全局
Vue.prototype.$event = new Vue;

// var Cesium = require('cesium/Cesium');
// var widgets= require('cesium/Widgets/widgets.css');

// Vue.prototype.Cesium = Cesium
// Vue.prototype.widgets = widgets

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
