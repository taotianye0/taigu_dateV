
import Vue from 'vue';
import App from './App';
import router from './router';
import less from 'less';

// css重置样式
import "./assets/css/reset.css";
// js全局挂载
import "./assets/js/reset";
import "./assets/js/tooltip-auto-show";
// 全局挂载less
Vue.use(less);
// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
// eventBus 挂载全局
Vue.prototype.$event = new Vue;
// //引入插件
// import Loading from './components/Loading'
// //全局注册插件
// Vue.component('Loading',Loading)

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
