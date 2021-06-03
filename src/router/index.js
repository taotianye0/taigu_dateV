import Vue from 'vue'
import Router from 'vue-router'




const index = () => import("../pages/index");   //使用懒加载
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [

      ]
    }
  ]
})



