import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const index = () => import("../pages/index");
const home =()=> import("../pages/home");
const dl = () => import("../pages/dl_district/index");
const jz = () => import("../pages/jz_district/index");
const hp = () => import("../pages/hp_district/index");
const qlh = () => import("../pages/qlh_district/index");
const yt = () => import("../pages/yt_district/index");

export default new Router({
  routes: [
    {
      path: "/home",
      name: "兰州国家高新技术产业开发区",
      component: home,
      children: [
        {
          path: "dl",
          component: dl,
          name: "兰州高新区定连园区,DINGLIAN AREA OF LANZHOU HIGH-TECH ZONES",
        },
        {
          path: "jz",
          component: jz,
          name: "兰州高新区九州园区,JIUZHOU AREA OF LANZHOU HIGH-TECH ZONES",
        },
        {
          path: "hp",
          component: hp,
          name: "兰州高新区和平园区,HEPING AREA OF LANZHOU HIGH-TECH ZONES",
        },
        {
          path: "qlh",
          component: qlh,
          name: "兰州高新区七里河园区,QILIHE AREA OF LANZHOU HIGH-TECH ZONES",
        },
        {
          path: "yt",
          component: yt,
          name: "兰州高新区雁滩园区,YANTAN AREA OF LANZHOU HIGH-TECH ZONES",
        }
      ]
    },
    {
      path:"/",
      component:index,
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
