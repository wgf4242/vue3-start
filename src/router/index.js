import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: () => import(/* webpackChunkName: "about" */ "../views/About.vue") },
  { path: "/data", name: "Data", component: () => import("../views/Data.vue") },
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
