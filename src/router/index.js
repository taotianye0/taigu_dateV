import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const index = () => import("../pages/index/index");
const supermap = () => import("../pages/superMap/index");



export default new Router({
  routes: [
    {
      path: "/",
      component: index,
      name:"主页",
      children:[]
    },
    {
      path: "/supermap",
      component: supermap,
      children:[]
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});
