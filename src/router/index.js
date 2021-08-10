import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const home = () => import("../pages/home");
const yt = () => import("../pages/yt_district/index");


let router = new Router({
  routes: [{
      path: "/home",
      component: home,
      children: [{
        path: "yt",
        component: yt,
        name: "兰州高新区雁滩园区,Yantan Park of Lanzhou High Tech Zone",
      }]
    },
    {
      path: "*",
      redirect: "/home/yt"
    }
  ]
});


export default router;
