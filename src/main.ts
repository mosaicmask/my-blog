/*
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-25 16:28:55
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css"; // normalize.css
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css"; // 这个nprogress样式必须引入

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
