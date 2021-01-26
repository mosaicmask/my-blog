/*
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-26 11:55:07
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css"; // normalize.css
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css"; // 这个nprogress样式必须引入
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// vh-check
import vhCheck from "vh-check";
vhCheck("browser-address-bar");

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
