import axios from "axios";
import qs from "qs";
import { errorAlert, warningAlert } from "./alert";
import store from "../store/index";
import router from "../router";

// 定于基础url
const baseUrl = "/api";
// const baseUrl = "";

// 请求拦截 ==》 设置请求头
// axios.interceptors.request.use(config => {
//   console.group("本次请求的路径为：" + config.url);
//   if (config.url !== baseUrl + "/api/userlogin") {
//     config.headers.authorization = store.state.user.token;
//   }
//   return config;
// });

// 响应拦截
axios.interceptors.response.use(res => {
  console.group("本次响应路径为:" + res.config.url);
  if (res.data.code !== 200) {
    // if (res.data.code == 403) {
    //   warningAlert(res.data.msg);
    //   setTimeout(() => {
    //     router.push("/login");
    //   }, 1000);
    //   return;
    // }
    // errorAlert(res.data.msg);
    return;
  }
  console.log(res);
  return res;
});

// // post请求
// export const reqAddMenu = data => {
//   return axios({
//     method: "post",
//     url: baseUrl + "/api/menuadd",
//     data: qs.stringify(data)
//   });
// };
// // get请求 
// export const reqMenuList = params => {
//   return axios({
//     method: "get",
//     url: baseUrl + "/api/menulist",
//     params
//   });
// };

