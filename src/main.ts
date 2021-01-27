/*
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-27 09:26:52
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// normalize.css
import "normalize.css";
// 引入nprogress插件 （导航切换加载）
// 这个nprogress样式必须引入
import NProgress from "nprogress";
import "nprogress/nprogress.css";
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
