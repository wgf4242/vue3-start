import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: () => import(/* webpackChunkName: "about" */ "../views/About.vue") },
  { path: "/data", name: "Data", component: () => import("../views/Data.vue") },
  { path: "/Test", name: "Test", component: () => import("../views/Test.vue") },
  { path: "/RenderView", name: "RenderView", component: () => import("../views/RenderView.vue") },
  { path: "/Communication", name: "Communication", component: () => import("../views/Communication.vue") },
  { path: "/UseJsx", name: "UseJsx", component: () => import("../views/UseJsx.vue") },
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
