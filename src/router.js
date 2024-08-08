import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("@/pages/edit.vue"),
    },
    {
      path: "/edit/preview/:id",
      name: "edit-preview",
      component: () => import("@/pages/edit-preview.vue"),
    },
  ],
});
