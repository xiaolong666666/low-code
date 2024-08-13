import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      // 低代码配置路由
      path: "/edit/:id",
      name: "edit",
      component: () => import("@/pages/edit.vue"),
    },
    {
      // 低代码配置的组件显示路由（iframe 嵌套）
      path: "/edit/preview/:id",
      name: "edit-preview",
      component: () => import("@/pages/edit-preview.vue"),
    },
  ],
});
