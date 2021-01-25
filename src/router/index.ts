/*
 * @LastEditors: 赵兴
 * @LastEditTime: 2021-01-25 17:35:45
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// ? Hash Mode
// * history: createWebHashHistory()

// ? HTML5 Mode
// * history: createWebHistory(),

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
