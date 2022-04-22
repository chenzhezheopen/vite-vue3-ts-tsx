/*
 * @Author: chenzhe
 * @Date: 2021-12-13 09:48:07
 * @LastEditors: cz
 * @LastEditTime: 2022-03-11
 * @Desciprtion:U_1:未登录访问，U_2:登录访问，U_3:路由是否需要记录
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "@/App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "App",
    component: App,
  }
];
// createWebHashHistory
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
