import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const index = () => import("../pages/index/index");
const home =()=> import("../pages/home");
const dl = () => import("../pages/dl_district/index");
const jz = () => import("../pages/jz_district/index");
const hp = () => import("../pages/hp_district/index");
const qlh = () => import("../pages/qlh_district/index");
const yt = () => import("../pages/yt_district/index");
const text = () => import("../components/text.vue");

export default new Router({
  routes: [
    {
      path: "/home",
      component: home,
      children: [
        {
          path: "dl",
          component: dl,
          name: "兰州高新区定连园区,Dinglian Park of Lanzhou High Tech Zone ",
        },
        {
          path: "jz",
          component: jz,
          name: "兰州高新区九州经济开发区,Jiuzhou Economic Development Zone of Lanzhou High Tech Zone",
        },
        {
          path: "hp",
          component: hp,
          name: "兰州高新区和平园区,HEPING AREA OF LANZHOU HIGH-TECH ZONES",
        },
        {
          path: "qlh",
          component: qlh,
          name: "兰州高新区七里河园区,Qilihe Park of Lanzhou High Tech Zone",
        },
        {
          path: "yt",
          component: yt,
          name: "兰州高新区雁滩园区,Yantan Park of Lanzhou High Tech Zone",
        }
      ]
    },
    {
      path:"/",
      name: "兰州国家高新技术产业开发区,Lanzhou National High Tech Industrial Development Zone",
      component:index,
    },
    // {
    //   path:"/text",
    //   component:text
    // },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
